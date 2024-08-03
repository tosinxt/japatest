import Link from 'next/link'
import React from 'react'

const Button = ({text, bgColor, color, width, path}) => {
  return (
    <Link href={path}>
      <button
        className={`py-2 px-5 rounded-[30px] border border-primary ${color} ${bgColor} ${width}`}
      >
        {text}
      </button>
    </Link>
  );
}

export default Button