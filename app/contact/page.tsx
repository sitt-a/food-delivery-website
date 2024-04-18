'use client'
import { Button } from '@/components/ui/button';
import React, { useState } from 'react';
export default function Contact() {
    const [textareaValue, setTextareaValue] = useState('');

  const handleTextareaChange = (e) => {
    setTextareaValue(e.target.value);
    e.target.style.height = 'auto';
    e.target.style.height = e.target.scrollHeight + 'px';}
  return (
    <><div className='flex justify-center '>
        <div className='text-center p-4 m-4'>
            <p className='text-2xl'>Contact</p>
            <p className='text-md'>Contact us if you have any question or comment</p>
        </div>

    </div>
    <div className='flex justify-center'>
    <div className='grid grid-cols-1 sm:grid-cols-2  '>
    <div className=' w-[500px] h-[450px] bg-gray-200 py-4 px-6'><p className='text-2xl p-2'>Contact Information</p>
    <p className='text-md'>Say something , tell us your ideas </p>
    <div className='grid sm:grid-rows-3 gap-8 mt-16'>
    <p className='text-md'>Say something , tell us your ideas </p>
    <p className='text-md'>Say something , tell us your ideas </p>
    <p className='text-md'>Say something , tell us your ideas </p>
    </div>
        
    </div>
    <div className='w-[500px] h-[450px] '><div className='grid grid-cols-2 gap-6 mt-8 p-8'>
  <div>
    <label className='block text-md'>First Name</label>
    <input
      type='text'
      className='w-full  border-b border-gray-300 focus:outline-none '
      placeholder="Search here" 
    />
  </div>
  <div>
    <label className='block text-md'>Last Name</label>
    <input
      type='text'
      className='w-full  border-b border-gray-300 focus:outline-none '
      placeholder="Search here" 
    />
  </div>
  <div>
    <label className='block text-md'>Email</label>
    <input
      type='email'
      className='w-full   border-b border-gray-300 focus:outline-none '
      placeholder="Search here" 
    />
  </div>
  <div>
    <label className='block text-md'>Phone Number</label>
    <input
      type='tel'
      className='w-full  border-b border-gray-300 focus:outline-none '
      placeholder="Search here" 
    />
  </div>
  <div className='col-span-2'>
    <label className='block text-md'>Message</label>
    <textarea
      className='w-full h-10 resize-none placeholder-gray-400 border-b border-gray-300 
      focus:outline-none hover:border-gray-400 py-2 
      px-4 text-gray-700 hover:leading-tight '
      rows='1'
      placeholder='Search here'
      value={textareaValue}
      onChange={handleTextareaChange}
    ></textarea>
   <div className='flex justify-end my-8'>
                  <Button className=''>Submit message</Button>
                </div>
  </div>
</div></div>
    </div>
    </div></>
  )
}
