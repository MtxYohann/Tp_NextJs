import { fetchCourseById } from '@/app/lib/actions';
import postgres from "postgres";
import { auth } from "@/auth";
import { redirect } from "next/navigation";
import EditCourseForm from '@/app/ui/dashboard/teacher/course-update';

const sql = postgres(process.env.POSTGRES_URL!, { ssl: "require" });

export default async function CoursePage({ params }: { params: Promise<{ id: string} >}) {
    const session = await auth();

    const courseId = (await params).id;

    const course = await Promise.all([
        fetchCourseById(courseId)
    ]);

    if (!session || !session.user) {
        redirect("/login");
        return null;
    }
    
    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-100 w-auto">
            <div className="bg-white mt-7 p-8 rounded-lg shadow-lg max-w-md w-full">
                <EditCourseForm course={course} />
            </div>
        </div>
    );
}