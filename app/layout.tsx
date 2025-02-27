import '@/app/ui/global.css'
import Image from 'next/image'
import Link from 'next/link';
import { inter } from '@/app/ui/fonts'
import { PowerIcon } from '@heroicons/react/24/outline';
import { signOut,auth } from '@/auth';

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await auth();
  const isLogged = session ? true : false;
  const role = session ? session.user.role : null;
  const id = session ? session.user.id : null;
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>

        <div className="flex h-16 items-center shrink-0 rounded-lg bg-cyan-100 m-4 p-4 md:h-40">
          <Image
            src="/logo.png"
            alt="Logo"
            width={100}
            height={100}
          />

          <Link
            href={"/dashboard"}>
            <button className='ml-20 bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 h-[48px] w-32 rounded-lg shadow-lg' >Dashboard</button>
          </Link> 
          {(role === 'student') && (
          <>
          <Link
            href={"/dashboard/cours"}>
            <button className='ml-20 bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 h-[48px] w-32 rounded-lg shadow-lg' >Cours</button>
          </Link>
         
            <Link
              href={`/dashboard/student/${id}`}>
              <button className='ml-20 bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 h-[48px] w-32 rounded-lg shadow-lg' >Mon espace</button>
            </Link>
          </>
          )}
          {role === 'teacher' && (
          <>
            <Link
              href={"/dashboard/teacher"}>
              <button className='ml-20 bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 h-[48px] w-32 rounded-lg shadow-lg' >Gestion Cours</button>
            </Link>
            <Link
              href={"/dashboard/teacher/eleve"}>
              <button className='ml-20 bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 h-[48px] w-32 rounded-lg shadow-lg' >Gestion note</button>
            </Link>
          </>
            )}
          {role === 'admin' && (
            <Link
              href={"/dashboard/admin"}>
              <button className='ml-20 bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 h-[48px] w-32 rounded-lg shadow-lg' >Admin</button>
            </Link>
            )}
          {isLogged === false &&(
          <Link
            href="/login">
            <button className='ml-20 bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 h-[48px] w-32 rounded-lg shadow-lg' >Se connecter</button>
            
            
          </Link>
          )}
          {isLogged === true &&(
          <form action={async () => { 'use server'; await signOut({ redirectTo: '/' }); }}>
            <button className="flex ml-20 h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3">
              <PowerIcon className="w-6" />
              <div className="hidden md:block">Se deconnecter</div>
            </button>
          </form>
          )}

        </div>
        {children}</body>
    </html >
  );
}
