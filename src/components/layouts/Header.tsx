'use client';

import Image from 'next/image';
import UploadModal from "../upload/UploadModal";
import Link from 'next/link';

export default function Header() {
  return (
    <header className='flex justify-between items-center py-4'>
      <Link href="/">
        <Image
          src="/logo.svg"
          alt="Shot Logo"
          width={80}
          height={80}
          priority
        />
      </Link>
      <UploadModal />
    </header>
  )
}
