import Image from 'next/image'
import React from 'react'

const CommunityCard = ({src, alt, text, name}) => {
  return (
    <div className='flex justify-start items-start gap-8 border-2 border-primary rounded-3xl w-[450px] px-5 py-5 shadow-purple'>
        <div>
            <Image src={src} alt={alt} height={420} width={420}/>
        </div>
        <div className='text-textDefault flex flex-col gap-4'>
            <p className='text-[14px] font-light'>
                {text}
            </p>
            <span className='text-xl font-bold'>
                {name}
            </span>
        </div>
    </div>
  )
}

export default CommunityCard