import React from 'react'
import { Link } from 'react-router-dom'

function SignUp() {
  return (
    <div className='max-w-lg p-3 my-10 mx-auto border shadow-lg'>
      <h1 className='text-3xl text-center font-semibold my-7'>Sign Up</h1>
      <form className='flex flex-col gap-4'>
        <input type='text' placeholder='username' id='username' className='border p-3 rounded-lg'/>
        <input type='email' placeholder='email' id='email' className='border p-3 rounded-lg'/>
        <input type='password' placeholder='password' id='password' className='border p-3 rounded-lg'/>
        <button className='bg-slate-700 text-white p-3 rounded-lg uppercase hover:opacity-90 disabled:opacity-75'>Sign Up</button>
      </form>
      <div className='flex gap-2 mt-5'>
        <p>Have an account?</p>
        <Link to={"/signin"}>
          <span>Sign in</span>
        </Link>
      </div>
    </div>
  )
}

export default SignUp