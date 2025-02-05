import { fetchTeacher } from "@/app/lib/data";
import clsx from 'clsx'

export default async function TeacherList() {
    const teacherList = await fetchTeacher();
    return (
        <div>
            <h2>Professeur</h2>
            <div>
                <div>
                    {teacherList.map((user, i) => {
                        return (
                            <div
                                key={user.id}
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
                                            {user.name}
                                        </p>
                                        <p className="hidden text-sm text-gray-500 sm:block">
                                            {user.email}
                                        </p>
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