import { fetchEnrolledCourses } from '@/app/lib/actions';
import Link from 'next/link';
import CourseNoteForm from '@/app/ui/dashboard/teacher/course-note';

export default async function CoursesNotePage ({ params }: { params: Promise<{ id: string} >}) {
    
    const userId= (await params).id;
    console.log("courseId", userId);
    
    const courses = await fetchEnrolledCourses(userId);


    return (
        <div className="max-w-2xl mx-auto p-6 bg-white shadow-lg rounded-lg">
            <h1 className="text-2xl font-bold mb-4">Cours inscrits</h1>
            {courses.length === 0 ? (
                <div>No courses found</div>
            ) : (
                <ul className="space-y-4">
                    {courses.map((course) => (
                        <li key={course.id} className="p-4 border rounded-lg">
                            <h2 className="text-xl font-semibold">{course.title}</h2>
                            <p>{course.description}</p>
                            <p>Instrument: {course.instrument}</p>
                            <p>Niveau: {course.level}</p>
                            <p>Horaire: {course.schedule}</p>
                            <CourseNoteForm courseId={course.id} userId={userId} />
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};
