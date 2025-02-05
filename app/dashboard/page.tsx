import TeacherList from "../ui/dashboard/teacher-list";

export default function Page() {
    return (
        <main>
            <p>Dashboard Page</p>
            <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-4 lg:grid-cols-8">
                <TeacherList />
            </div>
        </main>
    );
}