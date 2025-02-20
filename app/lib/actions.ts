'use server'

import bcrypt from 'bcryptjs';
import { z } from "zod";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import postgres from "postgres";
import { signIn } from "@/auth";
import { AuthError } from "next-auth";


export async function authenticate(
    prevState: string | undefined,
    formData: FormData,
) {
    try {
        await signIn('credentials', formData);
    } catch (error) {
        if (error instanceof AuthError) {
            switch (error.type) {
                case 'CredentialsSignin':
                    return 'Invalid credentials.';
                default:
                    return 'Something went wrong.';
            }
        }
        throw error;
    }
}

const sql = postgres(process.env.POSTGRES_URL!, { ssl: 'require' });

const FormSchemaCourse = z.object({
    id: z.string(),
    title: z.string({ invalid_type_error: 'Merci de choisir un titre' }),
    description: z.string({ invalid_type_error: 'Merci de choisir une decription' }),
    instrument: z.string({ invalid_type_error: 'Merci de choisir un instrument' }),
    teacherId: z.string({ invalid_type_error: 'Merci de choisir un enseignant' }),
    level: z.string({ invalid_type_error: 'Merci de choisir un niveau' }),
    schedule: z.string({ invalid_type_error: 'Merci de choisir un horaire' }),
    capacity: z.number({ invalid_type_error: 'Merci de choisir une capacité' }),

})

const CreateCourse = FormSchemaCourse.omit({ id: true });

export interface StateCourse {
    message: string | null;
    errors: {
        title?: string[];
        description?: string[];
        instrument?: string[];
        teacherId?: string[];
        level?: string[];
        schedule?: string[];
        capacity?: string[];
    };
}


export async function createCourse(prevState: StateCourse, formData: FormData): Promise<StateCourse> {
    const validatedFields = CreateCourse.safeParse({
        title: formData.get('title'),
        description: formData.get('description'),
        instrument: formData.get('instrument'),
        teacherId: formData.get('teacherId'),
        level: formData.get('level'),
        schedule: formData.get('schedule'),
        capacity: Number(formData.get('capacity')),
    });
    if (!validatedFields.success) {
        return {
            errors: validatedFields.error.flatten().fieldErrors,
            message: 'Missing Fields. Fields to Create Course.',
        };

    }
    const { title, description, instrument, teacherId, level, schedule, capacity } = validatedFields.data;

    try {
        await sql`
            INSERT INTO courses (title, description, instrument, teacherId, level, schedule, capacity)
            VALUES (${title}, ${description}, ${instrument},${teacherId},${level},${schedule},${capacity})
        `;
    } catch (error) {
        return {
            message: 'Database Error: Failed to Create Courses',
            errors: {}
        }
    }
    revalidatePath('/dashboard/cours');
    redirect('/dashboard/cours');
}



const FormSchemaUser = z.object({
    id: z.string(),
    name: z.string({ invalid_type_error: 'Merci de choisir un prénom' }),
    email: z.string({ invalid_type_error: 'Merci de choisir un email' }),
    password: z.string({ invalid_type_error: 'Merci de choisir un mot de passe' }),
    role: z.string({ invalid_type_error: 'Merci de choisir un role' }),

})

const CreateUser = FormSchemaUser.omit({ id: true });


export type StateUser = {
    message?: string | null;
    errors: {
        id?: string[];
        name?: string[];
        description?: string[];
        email?: string[];
        password?: string[];
        role?: string[];
    };
}

export async function createUser(prevState: StateUser, formData: FormData): Promise<StateUser> {

    const validatedFields = CreateUser.safeParse({
        name: formData.get('name'),
        email: formData.get('email'),
        password: formData.get('password'),
        role: formData.get('role')
    });
    if (!validatedFields.success) {
        return {
            errors: validatedFields.error.flatten().fieldErrors,
            message: 'Missing Fields. Fields to Create User.',
        };

    }
    const { name, email, password, role } = validatedFields.data;
    const hashedPassword = await bcrypt.hash(`${password}`, 10);

    try {
        await sql`
            INSERT INTO users (name, email, password, role)
            VALUES (${name}, ${email}, ${hashedPassword},${role})
        `;
    } catch (error) {
        return {
            message: 'Database Error: Failed to Create Users',
            errors: {}
        }
    }
    revalidatePath('/dashboard');
    redirect('/dashboard');
}

export async function fetchCourseById(courseId: string) {
    try {
        const course = await sql`
            SELECT * FROM courses WHERE id = ${courseId}
        `;
        return course[0];
    } catch (error) {
        console.error('Failed to fetch course:', error);
        return null;
    }
}
const UpdateCourse = FormSchemaCourse.omit({ id: true });

export async function updateCourse(id: string, prevState: StateCourse, formData: FormData): Promise<StateCourse> {

    console.log("Bien passer dans la fonction updateCourse");
    const validatedFields = UpdateCourse.safeParse({
        title: formData.get('title'),
        description: formData.get('description'),
        instrument: formData.get('instrument'),
        teacherId: formData.get('teacherId'),
        level: formData.get('level'),
        schedule: formData.get('schedule'),
        capacity: Number(formData.get('capacity')),
    });

    if (!validatedFields.success) {
        console.log(validatedFields.error.flatten().fieldErrors);
        return {
            errors: validatedFields.error.flatten().fieldErrors,
            message: 'Missing Fields. Failed to Update courses.',
        };
    }
    const { title, description, instrument, teacherId, level, schedule, capacity } = validatedFields.data;

    console.log("Id dans le action",id);
    
    try {
        await sql`
        UPDATE courses
        SET title = ${title}, description = ${description}, instrument = ${instrument}, teacherId = ${teacherId}, level = ${level}, schedule = ${schedule}, capacity = ${capacity}
        WHERE id = ${id}
    `;
    }
    catch (error) {
        return { 
            message: 'Database Error: Failed to Update Course.',
            errors: {}
         };
    }
    revalidatePath('/dashboard/teacher');
    redirect('/dashboard/teacher');
}

export async function deleteCourse(courseId: string) {
    try {
        await sql`
            DELETE FROM courses WHERE id = ${courseId}
        `;
        revalidatePath('/dashboard/teacher');
        redirect('/dashboard/teacher');
        return {
            message: 'Course deleted successfully',
        };
    } catch (error) {
        return {
            message: 'Database Error: Failed to Delete Course',
        };
    }
}