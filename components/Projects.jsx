import React from 'react'
import ProjectItem from './ProjectItem';
import Givingly from '../public/assets/projects/Givingly.jpg';
import Movies from '../public/assets/projects/Movies.jpg';
import hangman from '../public/assets/projects/hangman.jpg';

const Projects = () => {
    return (
        <div id='project' className='max-w-[1240px] mx-auto px-2 py-16 section-slide-in'>
            <p className='text-xl tracking-widest uppercase text-[#5651e5]'>Projects</p>
            <h2 className='py-4'>What I've Built</h2>
            <div className='grid md:grid-cols-2 gap-8'>
                <ProjectItem backgroundImg={Givingly} projectUrl='/Givingly'/>
                <ProjectItem backgroundImg={Movies} projectUrl='/Movies'/>
                <ProjectItem backgroundImg={hangman} projectUrl='/hangman'/>
            </div>
        </div>
    )
}

export default Projects