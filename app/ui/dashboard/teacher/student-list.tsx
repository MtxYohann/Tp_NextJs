import { fetchStudent } from "@/app/lib/data";
import clsx from 'clsx'
import Link from 'next/link';

export default async function StudentList() {
    const studentList = await fetchStudent();
    console.log("studentList", studentList);
    

    return (
        <div className="flex flex-col ">
            <h2 className="text-xl">Liste des élève : </h2>
            <div className="flex flex-col justify-between rounded-xl bg-sky-300 w-80">
                <div className="flex flex-col justify-between rounded-xl bg-sky-200 m-2 p-2">
                {studentList.map((user, i) => (
                        <div
                            key={`${user.id}-${i}`}
                            className={clsx(
                                'flex flex-row items-center justify-between py-4',
                                {
                                    'border-t': i !== 0,
                                },
                            )}
                        >
                            <div className="flex items-center">
                                <div className="min-w-0">
                                    <p className="truncate text-sm font-semibold md:text-base">
                                        Prénom: {user.name}
                                    </p>
                                    <p className="hidden text-sm text-gray-500 sm:block">
                                        Email: {user.email}
                                    </p>
                                    <Link href={`/dashboard/teacher/courses?userId=${user.id}`}>
                                        Voir les cours
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>

    )

}