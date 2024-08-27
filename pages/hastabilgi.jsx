import React from 'react';
import hastabilgi from '../public/assets/projects/hastabilgi.png';
import hastabilgi1 from '../public/assets/hastabilgi1.png';
import hastabilgi2 from '../public/assets/hastabilgi2.png';

import Image from 'next/image';
import { RiRadioButtonFill } from 'react-icons/ri';

const Givingly = () => {
    return (
        <div className='w-full pl-[5rem]'>
            <div className='w-screen h-[50vh] relative'>
                <div className='absolute top-0 left-0 w-full h-[50vh] bg-black/70 z-10 rounded-b-lg' />
                <Image
                    className='absolute z-1 rounded-b-lg'
                    layout='fill'
                    objectFit='cover'
                    src={hastabilgi}
                    alt='/'
                />
                <div className='absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2'>
                    <h2 className='py-2'>Patient Information System</h2>
                    <h3>Python/ SQL Express</h3>
                </div>
            </div>
            <div className='max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8'>
                <div className='col-span-4'>
                    <p>Project</p>
                    <h2 className='my-4'>Overview</h2>
                    <p>
                        I developed a patient information management program where I designed and implemented a user interface using Python and Tkinter. This interface allows users to input and store patient information efficiently. I integrated file scanning and storage functionalities, enabling the scanning of patient files with automated storage of file paths in a database for easy retrieval. Additionally, I implemented advanced search functionality, creating an interface for querying and displaying patient data, which significantly enhanced the speed and accuracy of data retrieval. The technologies used in this project include Python, Tkinter, and SQLite.
                    </p>
                </div>
                <div className='col-span-4 w-fit md:col-span-1 shadow-xl shadow-gray-400 rounded-xl p-4'>
                    <div className='p-2'>
                        <p className='text-center font-bold pb-2'>Technologies</p>
                        <div className='grid grid-cols-2 md:grid-cols-1'>
                            <p className='text-gray-600 py-2 flex items-center'><RiRadioButtonFill className='pr-1' />Python</p>
                            <p className='text-gray-600 py-2 flex items-center'><RiRadioButtonFill className='pr-1' />C</p>
                            <p className='text-gray-600 py-2 flex items-center'><RiRadioButtonFill className='pr-1' />SQL Express</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='max-w-full h-75 mx-auto p-5'>
                <div className='grid grid-cols-1 md:grid-cols-3 xl:grid-cols-2 gap-4'>
                    <div className='relative w-full h-48'>
                        <Image
                            src={hastabilgi}
                            layout='fill'
                            objectFit='cover'
                            className='rounded-lg'
                            alt='Patient Info Image 1'
                        />
                    </div>
                    <div className='relative w-full h-48'>
                        <Image
                            src={hastabilgi1}
                            layout='fill'
                            objectFit='cover'
                            className='rounded-lg'
                            alt='Patient Info Image 2'
                        />
                    </div>
                    <div className='relative w-full h-48'>
                        <Image
                            src={hastabilgi2}
                            layout='fill'
                            objectFit='cover'
                            className='rounded-lg'
                            alt='Patient Info Image 3'
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Givingly;
