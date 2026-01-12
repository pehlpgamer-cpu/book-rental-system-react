import { useState, useEffect } from 'react'
import axios from 'axios';
import { router, useForm } from '@inertiajs/react'
import PrimaryLayout from '@/layouts/primaryLayout'

// ICONS
import { ArrowLeft, ArrowRight } from 'lucide-react' 


// COMPONENTS
import BookCards from '@/components/bookCards'
import SideNavBar from '@/components/sideNavBar'
import AddEditBookModal from '@/components/addBookModal'

export default function ManageLibrary() 
{
    const [books, setBooks] = useState();

    useEffect(() => {
    axios.get('http://localhost:8000/book/index')
        .then(response => setBooks(response.data))
        .catch(error => console.error(error));
    }, []);

    const [openAddEditModal, setOpenAddEditModal] = useState<boolean>(false);
    
    //const [data, setData, error] = useForm();

    function handleSearch(e: React.FormEvent)
    {
        e.preventDefault();
    }

    return (
    <PrimaryLayout 
    SideNavBar={<SideNavBar highlightBtn='manageLibrary'/>}
    
    Page={
        <div className='flex flex-col h-full'>
            <AddEditBookModal modalOpened={openAddEditModal} exitBtn={() => {setOpenAddEditModal(false)}}/>
            
            
            <header className='p-2'>
                <form onSubmit={handleSearch} className='grid grid-cols-5 gap-2'>
                    <span className='flex flex-col'>
                        <label>Title</label>
                        <input type='text' onChange={null} className='border rounded-md p-1.5'/>
                    </span>
                    <span className='flex flex-col'>
                        <label>Id</label>
                        <input type='number' onChange={null} className='border rounded-md p-1.5'/>
                    </span>
                    <span className='flex flex-col'>
                        <label>Genre</label>
                        <input type='text' onChange={null} className='border rounded-md p-1.5'/>
                    </span>
                    <span className='flex flex-col'>
                        <label>Author</label>
                        <input type='text' onChange={null} className='border rounded-md p-1.5'/>
                    </span>

                    <div className='flex gap-2'>
                        <button type='button'
                            className='grow border rounded-md p-1.5   duration-100 hover:scale-105 hover:bg-black hover:text-white hover:rounded-3xl'>Search</button>
                        <button type='button'
                            className='grow border rounded-md p-1.5   duration-100 hover:scale-105 hover:bg-black hover:text-white hover:rounded-3xl'>Clear</button>
                        <button type='button' onClick={() => {setOpenAddEditModal(true)}}
                            className='grow border rounded-md p-1.5   duration-100 hover:scale-105 hover:bg-black hover:text-white hover:rounded-3xl'>Add</button>
                    </div>
                </form>
                    
            </header>

            <main className='h-full'>
                <section className='grid grid-cols-4 grid-rows-4 gap-3 border-t p-3 mt-3'>
                    {books?.map((book: any) => (
                        <BookCards key={book.id} id={book.id} title={book.title} genre={book.genre}/> 
                    ))}
                </section>
                
            </main>
            <div className=''/>
            <footer className='border-t p-3 flex gap-2'>
                <button className='p-1.5 border rounded-lg flex
                    hover:text-white hover:border-black hover:bg-black hover:rounded-2xl duration-100 ease-in-out'>
                        <ArrowLeft/>
                        <label>Prev</label>
                </button>
                <button className='p-1.5 border rounded-lg flex
                    hover:text-white hover:border-black hover:bg-black hover:rounded-2xl duration-100 ease-in-out'>
                        <label>Next</label>
                        <ArrowRight/>
                </button>
                <span>
                    <input className='w-24 p-1.5 border rounded-l-lg border-r-0' type='number'/>
                    <button 
                    className='p-1.5 border rounded-r-lg hover:border-black hover:text-white hover:bg-black hover:rounded-r-2xl duration-100 ease-in-out'>View page</button>

                </span>
                <label className='p-1.5'>1/99</label>
            </footer>
        </div>
    } />
    )
}
