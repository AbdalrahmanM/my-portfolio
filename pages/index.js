import { Main } from '@/components/Main'
import About from '@/components/About'
import Skills from '@/components/Skills'
import Projects from '@/components/Projects'
import Contact from '@/components/Contact'
import Head from 'next/head'

export default function Home() {
  return (
    <div className='ml-14 pl-[1.5rem] pr-[0.5rem] '>
      <Head>
        <title>A MUDHER</title>
      </Head>
      <Main />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </div>
  )
}
