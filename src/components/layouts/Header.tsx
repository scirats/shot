'use client';

import Image from 'next/image';
import UploadModal from "../upload/UploadModal";

export default function Header() {
  return (
    <header className='flex justify-between items-center p-4'>
      <Image
        src="/logo.svg"
        alt="Shot Logo"
        width={80}
        height={80}
        priority
      />
      <div className=''>
        <input
          type="text"
          placeholder="Search tags..."
          className='mx-6'
        />
        <UploadModal />
      </div>
    </header>
  )
}
