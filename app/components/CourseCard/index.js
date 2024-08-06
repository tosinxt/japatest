import Image from 'next/image'
import Link from 'next/link';
import React from 'react'

const CourseCard = ({src, alt, title, text, path}) => {
  return (
    <div className={`flex flex-col p-3 h-full rounded-2xl text-textDefault w-fit bg-primaryLight`}>
      <div className='flex flex-col gap-2'>
        <Image src={src} alt={alt} width={300} height={200}/>
        <span className='text-lg font-bold'>{title}</span>
        <p className='text-sm w-[300px]'>{text}</p>
      </div>
      <Link href={path} className='border border-textDefault w-full px-5 py-1 rounded-[30px] mt-14 mb-3 bg-transparent font-light text-center'>Learn more</Link>
    </div>
  );
}

export default CourseCard