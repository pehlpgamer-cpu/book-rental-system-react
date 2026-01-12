import React from 'react'
import axios from 'axios';
import {X} from 'lucide-react'
import { useForm } from '@inertiajs/react';

interface addEditBookModalProps {
    modalOpened: boolean;
    exitBtn: any;
}

export default function addEditBookModal({modalOpened, exitBtn} : addEditBookModalProps) {
    
    const { data, setData, post, processing, errors } = useForm({
        title: '',
        genre: '',
    });
    
    function handleSubmit(e: React.FormEvent)
    {
        e.preventDefault();
        axios.post('http://localhost:5000/api/book/store', {
            title: 'test',
            genre: 'joe'
        })
            .then(function (response){
            console.log(response);
            // Add the new task to the list
        }).catch((error) => console.error(error));

    }
    if (!modalOpened) return null;

    return (
        <div className='z-10 bg-black/50 w-screen h-screen flex justify-center items-center absolute'>
            <section className='z-20 bg-white border flex flex-col rounded-2xl'>
                <button onClick={exitBtn} className='p-2 self-end hover:text-red-600 hover:scale-105'><X/></button>
                <form onSubmit={handleSubmit} className='flex flex-col mr-3 ml-3 mb-3 justify-center gap-1.5'>
                    <label>Title</label>
                    <input type='text' className='border rounded-md p-1.5'/>
                    <label>Genre</label>
                    <input type='text' className='border rounded-md p-1.5'/>
                    <label>Author</label>
                    <input type='text' className='border rounded-md p-1.5'/>
                    <button type='submit' className='mt-4 p-2 rounded-lg border'>Submit</button>
                </form>
            </section>
        </div>
    )
}
