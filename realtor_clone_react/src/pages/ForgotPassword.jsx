import React from 'react'
import { useState } from 'react';
import { getAuth, sendPasswordResetEmail } from "firebase/auth";
import { Link } from 'react-router-dom';
import OAuth from '../components/OAuth';
import { toast } from "react-toastify";


function ForgotPassword() {
  
  const [email, setEmail] = useState(""
   
  )

  
  function onChange(e) {
      setEmail(e.target.value) 
  }
  async function onSubmit(e) {
    e.preventDefault();
    try {
      const auth = getAuth();
      await sendPasswordResetEmail(auth, email);
      toast.success("Email was sent");
    } catch (error) {
      toast.error("Could not send reset password");
    }
  }
  return (
    <section>
      <h1 className='text-3xl text-center mt-6 font-bold'>Forgot Password</h1>
      <div className='flex justify-center flex-wrap items-center px-6 py-12 max-w-6xl mx-auto'>
        <div className='md:w-[67%] lg:w-[50%] mb-12 md:mb-6'>
          <img className='w-full rounded-2xl'
          src="https://images.unsplash.com/flagged/photo-1564767609342-620cb19b2357?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1073&q=80" alt="key" />
        </div>
        <div className='w-full md:w-[67%] lg:w-[40%] lg:ml-20'>
          <form  onSubmit={onSubmit}>
            <input placeholder='Email address'
            className='mb-6 w-full px-4 py-2 text-xl text-gray-700 bg-white border-gray-300
            rounded transition ease-in-out' 
            type="email" id='email' value={email} onChange = {onChange}/>
           
           <div className='flex justify-between whitespace-nowrap text-sm sm:text-lg'>
           <p className='-mb-60'>Don't have a account?
            <Link className='text-red-600 hover:red-700 transition duration-200 ease-in-out ml-1' to="/sign-up">Register</Link>
            </p>
            <p>
            <Link className='text-blue-600 hover:blue-700 transition duration-200 ease-in-out ml-1'
             to="/sign-in">Sign in instead</Link>
            </p>
           </div>
           <button className='w-full bg-blue-600 text-white px-7 py-3 
          text-sm font-medium uppercase rounded shadow-md hover:bg-blue-700 transition 
          duration-150 ease-in-out hover:shadow-lg active:bg-blue-800' type='submit'>
          Send reset password</button>
          <div className='my-4 before:border-t flex before:flex-1 items-center before:border-gray-300
          after:border-t  after:flex-1 after:border-gray-300'>
            <p className='text-center font-semibold mx-4'>OR</p>
          </div>
          <OAuth/>
          </form>
          
        </div>

      </div>
    </section>
  )
}

export default ForgotPassword