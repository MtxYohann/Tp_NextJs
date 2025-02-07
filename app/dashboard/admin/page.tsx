import { getRole } from '@/app/lib/actions'
import { redirect } from 'next/navigation'

export default async function Page() {
    const role = await getRole();
    console.log("test :", role);

    if (role !== "ADMIN") {

        redirect('/dashboard');
    }

    return <p>You are in the Admin page!</p>;
}