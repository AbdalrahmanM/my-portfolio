import React from 'react'
import Movies from '../public/assets/projects/Movies.jpg';
import Image from 'next/image';
import { RiRadioButtonFill } from 'react-icons/ri'
import Link from 'next/link';

const movies = () => {
    return (
        <div className='w-full pl-[5rem]'>
            <div className='w-screen h-[50vh] relative'>
                <div className='absolute top-0 left-0 w-full h-[50vh] bg-black/70 z-10' />
                <Image
                    className='absolute z-1'
                    layout='fill'
                    objectFit='cover'
                    src={Movies}
                    alt='/'
                />
                <div className='absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2'>
                    <h2 className='py-2'>movies Finders</h2>
                    <h3>HTML / CSS / JAVASCRIPT</h3>
                </div>
            </div>
            <div className='max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8'>
                <div className='col-span-4'>
                    <p>Project</p>
                    <h2>Overview</h2>
                    <p>Welcome to the world of movies! This project presents a comprehensive movie database web application
                        that offers users a platform to explore, discover, and learn about their favorite films. Powered by
                        The Movie DB API, this application delivers a seamless and visually appealing experience for movie
                        enthusiasts.
                    </p>
                    <Link href='https://202303-prm-tr-few.github.io/movie-project-room-7-hunc-ebla-abdulrahman/index.html'>
                        <button className='px-8 py-2 mt-4 mr-8'>Demo</button>
                    </Link>
                    <Link href='https://github.com/AbdalrahmanM/MoviesSite'>
                        <button className='px-8 py-2 mt-4'>Code</button>
                    </Link>
                </div>
                <div className='col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl p-4'>
                    <div className='p-2'>
                        <p className='text-center font-bold pb-2'>Technologies</p>
                        <div className='grid grid-cols-3 md:grid-cols-1'>
                            <p className='text-gray-600 py-2 flex items-center'><RiRadioButtonFill className='pr-1' />HTML</p>
                            <p className='text-gray-600 py-2 flex items-center'><RiRadioButtonFill className='pr-1' />CSS</p>
                            <p className='text-gray-600 py-2 flex items-center'><RiRadioButtonFill className='pr-1' />TAILWIND</p>
                            <p className='text-gray-600 py-2 flex items-center'><RiRadioButtonFill className='pr-1' />JAVASCRIPT</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default movies