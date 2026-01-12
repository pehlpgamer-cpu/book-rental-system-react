import '../css/register.css'
import { useState } from 'react'


// ICONS
import { 
  FaCircleCheck, 
  FaCircleXmark 
} from "react-icons/fa6";

export default function register() {
  const [passwordVisibility, setPasswordVisibility] = useState<string>('password');
  const [confirmPasswordVisibility, setConfirmPasswordVisibility] = useState<string>('password'); 

  
  
  
  // TODO input validation: low priority




  function handleSubmit(e: React.FormEvent)
  {
    e.preventDefault();
    

  }

  return (
    <>
      <div className='w-screen h-screen flex flex-col justify-center items-center'>
        <h1>Register</h1>
        <form className='p-4 border rounded-xl flex flex-col justify-center'>
          <label className=''>Username</label>
          <input type='text' className='inputTxtbox'/>
          <label className='text-red-500'>{}</label>

          <label className=''>Email</label>
          <input type='text' className='inputTxtbox'/>
          <label className='text-red-500'>{}</label>

          <label className=''>Password</label>
          <span className='flex'>
            <input type={passwordVisibility} className='inputTxtbox grow'/>
            <button type='button' className='p-1.5 border'>view</button>
            <button type='button' className='p-1.5 border'>random</button>
          </span>

          <section className='mt-1 border rounded-lg p-1.5'>
            <span className='flex flex-col'>
              <label className='text-green-500'>Minimum password characters is 8</label>
              <label className='text-green-500'>Maximum password characters is 8</label>
            </span>
          </section>
          

          <label className=''>Confirm password</label>
          <span className='flex'>
            <input type={confirmPasswordVisibility} className='inputTxtbox grow'/>
            <button type='button' className='p-1.5 border'>view</button>
          </span>
          <label className='text-red-500'>{}</label>
          
          <span className='flex gap-1 mt-2.5'>
            <input type='checkbox' className=''/>
            <label className=''>Do you agree with the terms and conditions?</label>
          </span>
          
          <button className='border p-4 mt-6 rounded-4xl 
          hover:font-extrabold hover:rounded-xl hover:scale-y-120 
          duration-600 ease-in-out'>Register</button>
          <button className='mt-2 self-center underline hover:font-semibold'>Login with an existing account?</button>          
        </form>
      </div>
    </>
   
  )
}
