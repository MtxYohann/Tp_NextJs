import { getRole } from "@/app/lib/actions";

export default async function Page() {
    const role = await getRole();
    console.log("test :", role);

    if (role === "ADMIN") {
        return (
            <div>
                <p>You are an admin, welcome!</p>
            </div>
        );
    }

    return <p>You are not authorized to view this page!</p>;
}
