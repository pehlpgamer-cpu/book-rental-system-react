import { Head } from '@inertiajs/react';

export default function Welcome() {
    return (
        <>
            <Head title="Welcome">
                <link rel="preconnect" href="https://fonts.bunny.net" />
                <link href="https://fonts.bunny.net/css?family=instrument-sans:400,500,600" rel="stylesheet" />
            </Head>
            <section className='flex justify-center items-center w-screen h-screen'>
                <h1 className='text-6xl'>console.log('HELLO WORLD');</h1>
            </section>
        </>
    );
}
