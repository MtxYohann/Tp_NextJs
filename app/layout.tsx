import '@/app/ui/global.css'
import Image from 'next/image'
import Link from 'next/link';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <div className="flex h-20 items-center shrink-0 rounded-lg bg-cyan-100 m-4 p-4 md:h-52">
          <Image
            src="/logo.png"
            alt="Logo"
            width={150}
            height={150}
          />
          <Link
            href={"/"}>
            <button className='m-20 bg-sky-400 h-24 w-32 rounded-lg shadow-lg' >Accueil</button>
          </Link>
          <Link
            href={"/dashboard"}>
            <button className='m-20 bg-sky-400 h-24 w-32 rounded-lg shadow-lg' >Dashboard</button>
          </Link>
        </div>
        {children}</body>
    </html>
  );
}
