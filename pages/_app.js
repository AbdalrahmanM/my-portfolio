import { useState } from 'react'
import dynamic from 'next/dynamic'
import { useRouter } from 'next/router'
import { Navbar } from '@/components/Navbar'
import AnimatedBackground from '@/components/AnimatedBackground'
import ScrollProgress from '@/components/ScrollProgress'
import { MotionConfig } from 'framer-motion'
import '@/styles/globals.css'

const Intro3D = dynamic(() => import('@/components/Intro3D'), { ssr: false })

export default function App({ Component, pageProps }) {
  const router = useRouter()
  const [showIntro, setShowIntro] = useState(true)
  const introVisible = router.pathname === '/' && showIntro

  return (
  <MotionConfig reducedMotion="user" transition={{ ease: [0.16, 1, 0.3, 1] }}>
    <AnimatedBackground/>
    <ScrollProgress/>
    <Navbar/>
    <Component {...pageProps} />
    {introVisible && <Intro3D onComplete={() => setShowIntro(false)} />}
  </MotionConfig>)
}
