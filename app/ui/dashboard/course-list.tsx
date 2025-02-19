import { fetchCourse } from "@/app/lib/data";
import Link from "next/link";
import clsx from 'clsx'

export default async function CourseList() {
    const teacherList = await fetchCourse();
    
    

    return (
        <div className="flex flex-col ">
            <h2 className="text-xl">Cours</h2>
            <div className="flex flex-col justify-between rounded-xl bg-sky-200 w-80">
                <div className="flex flex-col justify-between rounded-xl bg-sky-300 m-2 p-2">
                    {teacherList.map((course, i) => {
                        console.log("Redirection vers:", `/courses/${course.id}`);
                        return (
                            <div
                                key={course.id}
                                className={clsx(
                                    'flex flex-row items-center justify-between py-4',
                                    {
                                        'border-t': i !== 0,
                                    },
                                )}
                            >
                                <div className="flex items-center">
                                    <div className="min-w-0">
                                        <p className="truncate text-xl font-semibold md:text-base">
                                            Cours: {course.title}
                                        </p>
                                        <p className="hidden text-lg text-gray-500 sm:block">
                                            Description: {course.description}
                                        </p><p className="hidden text-lg text-gray-500 sm:block">
                                            Instrument: {course.instrument}
                                        </p>
                                        <p className="hidden text-lg text-gray-500 sm:block">
                                            Niveau: {course.level}
                                        </p>
                                        <p className="hidden text-lg text-gray-500 sm:block">
                                            Horaire: {course.schedule}
                                        </p>
                                        
                                        <li key={course.id}>
                                            <a className="bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 h-[48px] w-32 rounded-lg shadow-lg" href={`/dashboard/cours/${course.id}`}>
                                                Inscription
                                            </a>
                                        </li>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>

    )

}