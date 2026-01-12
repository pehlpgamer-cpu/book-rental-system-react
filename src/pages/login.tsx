//  git add .  && git commit -m "" && git push

import {useEffect, use, useRef, useState, useActionState} from 'react'
import axios from 'axios';
import {Head, Link, useForm} from '@inertiajs/react';


//ICONS
import { FaEye, FaEyeSlash } from "react-icons/fa";

export default function login() {

  interface passVis{
    inputType: string;
    isViewPassword: boolean;
  }
  //toggle pass vis
  const [passwordVisibility, setPasswordVisibility] = useState<passVis>({inputType: 'password',isViewPassword: true});
  function togglePasswordVisibility ()
  {
    if (passwordVisibility.inputType == 'text') setPasswordVisibility({inputType: 'password', isViewPassword: true});
    else setPasswordVisibility({inputType: 'text', isViewPassword: false});
  }

  const { data, setData, post, processing, setError, errors } = useForm({
    email: '',
    password: '',
})

function handleSubmit (e: React.FormEvent) {
    e.preventDefault();

    let isAllInputValid = true as boolean;
    
    //PASSWORD
    if (data.password.trim() == '')
    {
      setError('password', 'field required');
      isAllInputValid = false;
    }
    else if (data.password.length < 3)
    {
      setError('password', 'minimum length is 3 chars');
      isAllInputValid = false;
    }

    //EMAIL
    if (data.email.trim() == '')
    {
      setError('email', 'field required');
      isAllInputValid = false;
    }
    

    if (isAllInputValid) post('/login');
}

  


  return (
    <>
        <section className='w-screen h-[80vh] flex flex-col items-center justify-center gap-1'>
            <h1 className='text-4xl'>Login</h1>
            <form onSubmit={handleSubmit} className='border p-4 rounded-2xl flex flex-col max-w-4xl'>
              
              <input type="hidden" name="_method" value="POST"/> {/* method spoofing protection */}
              <input type="hidden" name="_token" value="{{ csrf_token() }}"/> {/* CSRF protection */}

              <label>Email</label>
              <input onChange={(e) => setData('email', e.target.value)} type='text' className='border p-1.5' />
              <label className='text-red-600'>{errors?.email}</label>
              
              <label>Password</label>
              <span className='flex'>
                <input onChange={(e) => setData('password', e.target.value)} type={passwordVisibility.inputType} className='grow border p-1.5 border-r-0' />
                <button type='button' className='border border-l-0 p-1.5 h-full hover:bg-gray-100' onClick={togglePasswordVisibility}>
                  {passwordVisibility.isViewPassword ? <FaEye/> : <FaEyeSlash/>}</button>
              </span>
              <label className='text-red-600'>{errors.password}</label>
              
              <button disabled={processing} type='submit' className='text-xl font-bold rounded-4xl hover:scale-105 hover:rounded-lg duration-150 ease-in-out border mt-6 p-4'>Login</button>
              
              <Link href='/register' as='button' className='self-center underline mt-2 hover:font-bold'>create an account?</Link>
              <Link href='/' as='button' className='self-center underline mt-2 hover:font-bold'>continue as guest?</Link>
            </form>

            {/* temporary */}
            
        </section>
    </>
  )
}
