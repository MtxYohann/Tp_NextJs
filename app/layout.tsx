import '@/app/ui/global.css'
import Image from 'next/image'
import Link from 'next/link';
import { inter } from '@/app/ui/fonts'
import { PowerIcon } from '@heroicons/react/24/outline';
import { signOut } from '@/auth';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
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
            href={"/"}>
            <button className='ml-20 bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 h-[48px] w-32 rounded-lg shadow-lg' >Accueil</button>
          </Link>
          <Link
            href={"/dashboard"}>
            <button className='ml-20 bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 h-[48px] w-32 rounded-lg shadow-lg' >Dashboard</button>
          </Link>
          <Link
            href={"/dashboard/cours"}>
            <button className='ml-20 bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 h-[48px] w-32 rounded-lg shadow-lg' >Cours</button>
          </Link>
          <form
            action={async () => {
              'use server';
              await signOut({ redirectTo: '/' });
            }}
          ></form>

          <button className="flex ml-20 h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3">
            <PowerIcon className="w-6" />
            <div className="hidden md:block">Sign Out</div>
          </button>
        </div>
        {children}</body>
    </html >
  );
}
