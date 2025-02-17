import { auth } from "@/auth";
import { redirect } from "next/navigation";

export default async function Page() {
    const session = await auth(); 
    if (!session) {
        redirect("/login");
        return;
    }else if (session.user.role !== "admin") {
        redirect("/dashboard");
        return;
    }

    return (
        <div>
            <h1>Bienvenue {session.user.email}, votre rôle est {session.user.role} !</h1>
        </div>
    );
}
