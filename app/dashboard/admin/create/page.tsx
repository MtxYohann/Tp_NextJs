'use client';

import { useActionState } from "react"
import { createUser, StateUser } from '@/app/lib/actions';
import { redirect } from "next/navigation";
import { Session } from 'next-auth';

export default async function Page({ session }: { session: Session | null }) {
    
    if (!session) {
        redirect("/login");
        return;
    }else if (session.user.role !== "admin") {
        redirect("/dashboard");
        return;
    }
    const initialState: StateUser = { message: null, errors: {} };
    const [state, formAction, isPending] = useActionState(createUser, initialState);

    return (
        <div className="max-w-2xl mx-auto p-6 bg-white shadow-lg rounded-lg">
            <h1 className="text-2xl font-bold mb-4">Créer un nouveau cours</h1>
            <form action={formAction} className="space-y-4">
                <input type="text" name="name" placeholder="Prénom" id="name" required className="w-full p-2 border rounded" />
                <input type="email" name="email" placeholder="Email" id="email" required className="w-full p-2 border rounded" />
                <input type="password" name="password" placeholder="Mot de passe" id="password" required className="w-full p-2 border rounded" />
                <select name="role" id="role" required className="w-full p-2 border rounded">
                    <option value="">Rôle</option>
                    <option value="student">Etudiant</option>
                    <option value="teacher">Enseignant</option>
                    <option value="admin">Admin</option>
                </select>

                <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded">Créer</button>
            </form>
        </div>

    );
}
