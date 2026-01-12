import React from 'react'

import {
  BookMarked,
  Trash2,
  SquarePen
} from 'lucide-react'
interface bookCardProps{
    id: number;
    title: string;
    genre: string;
    author: string;
}

export default function bookCards({id, title, genre, author} : bookCardProps) {
  return (
    <div className='border rounded-r-xl flex justify-center hover:scale-102 duration-150'>
      <img hidden className='w-55 border-r-1 bg-gray-100' alt='img.png'/>
      
      {/* TEMPORARY */}<BookMarked className='w-55 border-r h-full self-center bg-black text-white'/>
      
      <section className='flex flex-col p-3'>
        <h1 className='font-bold text-lg'>{title}</h1>
        <label>ID: {id}</label>
        <label>Genre: {genre}</label>
        {/* {<label><b>Author:</b> {author}</label>} */}
        <div className='grow'/>
        <div className='flex gap-1'>
          <button 
            className='flex-1 flex justify-center mt-2 p-1 border rounded-md duration-75 hover:rounded-xl hover:bg-black hover:text-white'>
            <Trash2/>
          </button>
          <button 
            className='flex-1 flex justify-center mt-2 p-1 border rounded-md duration-75 hover:rounded-xl hover:bg-black hover:text-white'>
            <SquarePen/>
          </button>
        </div>
      </section>
    </div>
  )
}
