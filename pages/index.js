import { Main } from '@/components/Main'
import About from '@/components/About'
import Skills from '@/components/Skills'
import Projects from '@/components/Projects'
import Contact from '@/components/Contact'
import Head from 'next/head'

export default function Home() {
  return (
    <div className='pt-16'>
      <Head>
        <title>ABDULRAHMAN MUDHER</title>
      </Head>
      <Main />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </div>
  )
}
