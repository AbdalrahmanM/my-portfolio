import React from 'react'
import abdo1 from '../public/assets/abdo1.jpg'
import Image from 'next/image';
import Link from 'next/link';

const About = () => {
    return (
        <div id='about' className='w-full md:h-auto p-2 flex items-center py-16 section-slide-in'>
            <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8'>
                <div className='col-span-2'>
                    <p className=' uppercase text-xl tracking-widest text-[#5651e5]'>About</p>
                    <h2 className='py-4'>Who I Am</h2>
                    <p className='py-2 text-gray-600 underline'>I am not a normal developer </p>
                    <p className='py-2 text-gray-600'>
                        I&apos;m a passionate creator in the realm of web development.
                        My journey began during my time as a Computer Engineering student at Mosul University,
                        where I embarked on a transformative exploration of coding and design. This quest continued at
                        Sakarya University, and since 2012, I&apos;ve been on an exciting path of crafting visually captivating
                        and functionally robust websites.
                    </p>
                    <p className='py-2 text-gray-600'>
                        My expertise lies in the meticulous crafting of mobile-responsive front-end UI applications that seamlessly
                        interact with APIs and backend frameworks. I&apos;m driven by an insatiable hunger for continuous learning, firmly
                        believing that there are countless pathways to achieving excellence. While I excel in constructing front-end
                        applications using HTML, CSS, JavaScript, and React, my adaptability allows me to swiftly embrace novel technology stacks as demanded by each project.
                    </p>
                    <Link href='https://github.com/AbdalrahmanM?tab=repositories'>
                        <p className='py-2 text-gray-600 underline cursor-pointer'>
                            Check out some of my latest projects.
                        </p>
                    </Link>
                </div>
                <div className='w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300'>
                    <Image src={abdo1} className='rounded-xl' alt='/' />
                </div>
            </div>
        </div>
    )
}

export default About