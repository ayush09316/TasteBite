import React from 'react'
import Image from 'next/image'
import { IoIosStarHalf ,IoIosStarOutline, IoIosStar } from "react-icons/io";

type Props = {
    count:number,
    size:number,
    color2:string
}

const Rating = ({count,size,color2}:Props) => {
  return (
    <div className='flex'>
        <IoIosStar size={size} color={color2} />
        <IoIosStar size={size} color={color2} />
        <IoIosStar size={size} color={color2} />
     <IoIosStarHalf size={size} color={color2} />
     <IoIosStarOutline size={size} color={color2} />
    </div>
  )
}

export default Rating
