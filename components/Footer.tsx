import Image from 'next/image'
import React from 'react'

const Footer = () => {
  return (
    <div className='flex p-4 w-full flex-col gap-5 text-black  bg-gray-light'>
     <div className='flex  justify-around items-center'>
     <div className="flex flex-col gap-4">
        <Image src='/logob.svg' width={100} height={100} alt='logo'/>
        <p className='max-w-[300px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos.</p>
      </div>
      <div className="">
        <h3 className='font-bold'>Quick Links</h3>
        <ul className='flex flex-col gap-1'>
          <li>Home</li>
          <li>Menu</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </div>
      <div className="">
        <h3 className='font-bold'>Quick links</h3>
        <ul className='flex flex-col gap-1'>
          <li>Share Recipe</li>
          <li>About Us</li>
          <li>Contact</li>
        </ul>
      </div>
      <div className="">
        <h3 className='font-bold'>Legal</h3>
        <ul className='flex flex-col gap-1'>
          <li>Privacy Policy</li>
          <li>Terms of Service</li>
          <li>Refund Policy</li>
        </ul>
      </div>
     </div>
     <div className='w-[92rem]  h-[1px] bg-black'/>
     <div className='flex  justify-around items-center h-9  w-auto '>
        <h1 className='text-black'>@2024 Tastebite. All Right Reserved</h1>
        <div className='flex gap-8'>
            <Image src='/fb.svg' width={30} height={30} alt='fb'/>
            <Image src='/yt.svg' width={30} height={30} alt='yt'/>
            <Image src='/twitter.svg' width={30} height={30} alt='twitter'/>
            <Image src='/insta.svg' width={30} height={30} alt='insta'/>

        </div>
     </div>
    
    </div>
  )
}

export default Footer
