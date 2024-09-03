import Image from 'next/image'
import React from 'react'

const CommunityCard = ({src, alt, text, name}) => {
  return (
    <div className='flex justify-start items-start gap-3 tablet:gap-8 border-2 border-primary rounded-3xl tablet:w-[450px] tablet:h-[200px] px-5 py-5 shadow-purple whitespace-pre-wrap'>
        <div className='h-fit tablet:min-w-[100px] min-w-[50px]'>
            <Image src={src} alt={alt} height={9999} width={9999} style={{width: "100%", height: "100%"}}/>
        </div>
        <div className='text-textDefault flex flex-col justify-between h-full tablet:gap-0 gap-4'>
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