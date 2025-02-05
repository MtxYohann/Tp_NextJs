import postgres from 'postgres';
import { User, Course, Enrollment, Progress } from './definitions';


const sql = postgres(process.env.POSTGRES_URL!, { ssl: 'require' });

export async function fetchCourse() {
  try {
    const data = await sql<Course[]>`SELECT * FROM course`;

    return data;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch revenue data.');
  }
}