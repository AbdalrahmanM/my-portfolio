import { Main } from '@/components/Main'
import About from '@/components/About'
import Skills from '@/components/Skills'
import Projects from '@/components/Projects'
import Contact from '@/components/Contact'
import MotionDivider from '@/components/MotionDivider'
import Head from 'next/head'

export default function Home() {
  return (
    <div className='pt-16'>
      <Head>
        <title>ABDULRAHMAN MUDHER</title>
      </Head>
      <Main />
      <MotionDivider words={["Design", "Motion", "Intelligence", "Frontend"]} />
      <About />
      <MotionDivider reverse words={["Research", "Systems", "Clarity", "Craft"]} />
      <Skills />
      <MotionDivider words={["React", "Next.js", "AI", "Interfaces"]} />
      <Projects />
      <MotionDivider reverse words={["Build", "Test", "Refine", "Launch"]} />
      <Contact />
    </div>
  )
}
