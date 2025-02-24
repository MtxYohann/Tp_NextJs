import { auth } from "@/auth";
import { redirect } from "next/navigation";
import CourseList from "@/app/ui/dashboard/student/course-list";
import { fetchEnrolledCourses,fetchProgress } from '@/app/lib/actions';

export default async function Page() {
    const session = await auth(); 
     if (!session) {
                redirect("/login");
                return;
        }

    const courses = await fetchEnrolledCourses(session.user.id);
        

    return (
        <div className= "flex flex-col items-center">
            <h1 className="text-2xl">Bienvenue sur la page de suivie {session.user.name} !</h1>
            {await Promise.all(courses.map(async (course) => {
                                    const progress = await fetchProgress(course.id, session.user.id);
                                    console.log("course", course);
                                    
                                    return (
                                        <CourseList
                                            key={course.id}
                                            courseId={course.id}
                                            userId={session.user.id}
                                            initialEvaluation={progress?.evaluation || ""}
                                            initialComment={progress?.comment || ""}
                                        />
                                    );
                                    }))}
        </div>
        
    );
}