"use client";
import React from 'react'

const Connect = () => {
  const [email, setEmail] = React.useState('');
  const handleSubscribe = () => {
    email && alert(`You have successfully subscribed with ${email}`);
    setEmail('');
  }
  return (
    <div className='w-full  flex flex-col py-10 bg-main-light  items-center gap-6'>
      <h1 className='text-black font-bold text-3xl'>Let&apos;s Stay In Touch!</h1>
      <p className='text-slate-600 text-center text-2xl max-w-[30rem]'> Join our newsletter, so that we reach out to you with our news and offers</p>
      <div className='flex gap-4'>
        <input type="text" placeholder="Enter your email" className='rounded-md px-2 w-80 h-10 outline-none text-black' value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button className='bg-main px-4 py-1 hover:shadow-md rounded-md' onClick={handleSubscribe}>Subscribe</button>
      </div>
    </div>
  )
}

export default Connect
