import React from 'react'
import Givingly from '../public/assets/projects/Givingly.jpg';
import Image from 'next/image';
import Link from 'next/link';
import { RiRadioButtonFill } from 'react-icons/ri'
const givingly = () => {
    return (
        <div className='w-full pl-[5rem]'>
            <div className='w-screen h-[50vh] relative'>
                <div className='absolute top-0 left-0 w-full h-[50vh] bg-black/70 z-10' />
                <Image
                    className='absolute z-1'
                    layout='fill'
                    objectFit='cover'
                    src={Givingly}
                    alt='/'
                />
                <div className='absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2'>
                    <h2 className='py-2'>Givingly</h2>
                    <h3>NEXT JS / Tailwind / Firebase /Redux</h3>
                </div>
            </div>
            <div className='max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8'>
                <div className='col-span-4'>
                    <p>Project</p>
                    <h2>Overview</h2>
                    <p>As part of the Re:Coded graduation project, a dynamic crowdfunding 
                        platform has been developed using modern technologies to provide an 
                        engaging and user-friendly experience. This platform is designed to 
                        facilitate the creation and management of crowdfunding campaigns, enabling 
                        users to support a variety of projects across different categories.
                    </p>
                    <Link href='https://capstone-team-3-final.vercel.app/en%20SON%20L%C4%B0NK'>
                        <button className='px-8 py-2 mt-4 mr-8'>Demo</button>
                    </Link>
                    <Link href='https://github.com/202303-PRM-TR-FEW/capstone-template-team-3'>
                        <button className='px-8 py-2 mt-4'>Code</button>
                    </Link>
                </div>
                <div className='col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl p-4'>
                    <div className='p-2'>
                        <p className='text-center font-bold pb-2'>Technologies</p>
                        <div className='grid grid-cols-3 md:grid-cols-1'>
                            <p className='text-gray-600 py-2 flex items-center'><RiRadioButtonFill className='pr-1' />HTML</p>
                            <p className='text-gray-600 py-2 flex items-center'><RiRadioButtonFill className='pr-1' />TAILWIND</p>
                            <p className='text-gray-600 py-2 flex items-center'><RiRadioButtonFill className='pr-1' />FIREBASE</p>
                            <p className='text-gray-600 py-2 flex items-center'><RiRadioButtonFill className='pr-1' />React</p>
                            <p className='text-gray-600 py-2 flex items-center'><RiRadioButtonFill className='pr-1' />REDUX</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default givingly