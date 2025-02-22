import { auth } from "@/auth";
import { redirect } from "next/navigation";
import CourseList from "@/app/ui/dashboard/student/course-list";
import { fetchEnrolledCourses } from '@/app/lib/actions';

export default async function Page() {
    const session = await auth(); 
     if (!session) {
                redirect("/login");
                return;
        }
        console.log("session: ",session);
        const courses = await fetchEnrolledCourses(session.user.id);
        

    return (
        <div className= "flex flex-col items-center">
            <h1 className="text-2xl">Bienvenue sur la page de suivie {session.user.name} !</h1>
            <CourseList courses={courses}/> 
        </div>
        
    );
}