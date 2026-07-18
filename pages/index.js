import { Main } from '@/components/Main'
import About from '@/components/About'
import Skills from '@/components/Skills'
import Projects from '@/components/Projects'
import Contact from '@/components/Contact'
import MotionDivider from '@/components/MotionDivider'
import SectionFlow from '@/components/SectionFlow'
import Head from 'next/head'

export default function Home() {
  return (
    <div className='pt-16'>
      <Head>
        <title>ABDULRAHMAN MUDHER</title>
      </Head>
      <Main />
      <MotionDivider from="00" to="01" words={["Design", "Motion", "Intelligence", "Frontend"]} />
      <SectionFlow index="01" direction={-1}><About /></SectionFlow>
      <MotionDivider from="01" to="02" reverse words={["Research", "Systems", "Clarity", "Craft"]} />
      <SectionFlow index="02" direction={1} accent="ice"><Skills /></SectionFlow>
      <MotionDivider from="02" to="03" words={["React", "Next.js", "AI", "Interfaces"]} />
      <SectionFlow index="03" direction={-1}><Projects /></SectionFlow>
      <MotionDivider from="03" to="04" reverse words={["Build", "Test", "Refine", "Launch"]} />
      <SectionFlow index="04" direction={1} accent="ice"><Contact /></SectionFlow>
    </div>
  )
}
