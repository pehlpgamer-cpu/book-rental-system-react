//  git add .  && git commit -m "" && git push

import { useState} from 'react'



// ICONS
import { FaEye, FaEyeSlash } from "react-icons/fa";

export default function login() {

  interface passVis{
    inputType: string;
    isViewPassword: boolean;
  }
  // toggle pass vis
  const [passwordVisibility, setPasswordVisibility] = useState<passVis>({inputType: 'password',isViewPassword: true});
  function togglePasswordVisibility ()
  {
    if (passwordVisibility.inputType == 'text') setPasswordVisibility({inputType: 'password', isViewPassword: true});
    else setPasswordVisibility({inputType: 'text', isViewPassword: false});
  }



function handleSubmit (e: React.FormEvent) {
    e.preventDefault();
  }
  return (
    <>
        <section className='w-screen h-[80vh] flex flex-col items-center justify-center gap-1'>
            <h1 className='text-4xl'>Login</h1>
            <form onSubmit={handleSubmit} className='border p-4 rounded-2xl flex flex-col max-w-4xl'>
              
              <input type="hidden" name="_method" value="POST"/> {/* method spoofing protection */}
              <input type="hidden" name="_token" value="{{ csrf_token() }}"/> {/* CSRF protection */}

              <label>Email</label>
              <input type='text' className='border p-1.5' />
              <label className='text-red-600'>{}</label>
              
              <label>Password</label>
              <span className='flex'>
                <input type={passwordVisibility.inputType} className='grow border p-1.5 border-r-0' />
                <button type='button' className='border border-l-0 p-1.5 h-full hover:bg-gray-100' onClick={togglePasswordVisibility}>
                  {passwordVisibility.isViewPassword ? <FaEye/> : <FaEyeSlash/>}</button>
              </span>
              <label className='text-red-600'>{}</label>
              
              <button type='submit' className='text-xl font-bold rounded-4xl hover:scale-105 hover:rounded-lg duration-150 ease-in-out border mt-6 p-4'>Login</button>
              
              <button className='self-center underline mt-2 hover:font-bold'>create an account?</button>
              <button className='self-center underline mt-2 hover:font-bold'>continue as guest?</button>
            </form>

            {/* temporary */}
            
        </section>
    </>
  )
}
