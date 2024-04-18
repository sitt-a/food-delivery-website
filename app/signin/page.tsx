// 
"use client"
import React from 'react'
import { FaFacebookF,FaLinkedinIn,FaGoogle,FaEnvelope,FaRegEnvelope } from
 'react-icons/fa';
 import {MdLockOutline} from
 'react-icons/md';
export default function Login() {
  return (
    <main className='mt-24 mb-10 flex flex-col items-center justify-center 
    flex-1 px-20 text-center '>
      <div className='bg-white rounded-2xl 
      shadow-2xl flex w-2/3 max-w-4xl'>
<div className=' w-3/5 p-5'>
  <div className='text-left font-bold'><span 
  className='text-gray-800'>company</span>name</div>
<div className='py-10'>
  <h2 className='text-gray-700 text-3xl font-bold mb-2 '>sign in to Accont</h2>
  <div className='border-2 w-10 border-gray-700 inline-block mb-2'></div>
  <div className='flex justify-center my-2 '>
    <a href='#' className='border-2 border-gray-200 rounded-full
     p-3 mx-1'><FaGoogle className='text-sm'></FaGoogle></a>
   <a href='#' className='border-2 border-gray-200 rounded-full
     p-3 mx-1'><FaFacebookF className='text-sm'></FaFacebookF></a>
  </div>
<p className='text-gray-500 my-3'>or use Your username</p>
<div className='flex flex-col items-center '>

  <div className='bg-gray-100 w-64 p-2 flex items-center mb-3 '><FaRegEnvelope 
  className='text-gray-400 m-2'></FaRegEnvelope>
  <input type='email' name='email' placeholder='Email'
  className='bg-gray-100 outline-none text-sm flex-1 '></input>
  </div>

  <div className='bg-gray-100 w-64 p-2 flex items-center '><MdLockOutline
  className='text-gray-400 m-2'></MdLockOutline>
  <input type='password' name='password' placeholder='password'
  className='bg-gray-100 outline-none text-sm flex-1 '></input>
  </div>
  <div className='flex w-64 mb-5 mt-2 justify-between'>
    <label className='flex items-center text-xs'><input 
    type='checkbox' name='remember' className='mr-1 '></input>Remember me</label>
  <a href='#' className='text-xs'>Forgot Password</a>
  </div>
  <a href='# ' className='border-2 text-white bg-gray-600 rounded-full
  px-12 py-2 inline-block font-semibold hover:bg-white hover:text-gray-700 hover: border-gray-700'>Sign in</a>
 
</div>

</div>
</div>

<div  className='signup w-2/5 text-white p-5 bg-gray-700 rounded-r-2xl py-36 px-12 '>
 <h2 className='text-3xl font-bold mb-2'>Hello, Friend!</h2>
 <div className='border-2 w-10 border-white inline-block mb-2'></div>
 <p className='mb-10'>Fill up personal information and start journey with us</p>
 <a href='/signup ' className='border-2 border-white rounded-full
  px-12 py-2 inline-block font-semibold hover:bg-white hover:text-gray-700'>Sign up</a>
 </div>
       </div>
    </main>
  )
}
