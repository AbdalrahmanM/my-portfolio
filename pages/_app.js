import { Navbar } from '@/components/Navbar'
import AnimatedBackground from '@/components/AnimatedBackground'
import ScrollProgress from '@/components/ScrollProgress'
import { MotionConfig } from 'framer-motion'
import '@/styles/globals.css'

export default function App({ Component, pageProps }) {
  return (
  <MotionConfig reducedMotion="user" transition={{ ease: [0.16, 1, 0.3, 1] }}>
    <AnimatedBackground/>
    <ScrollProgress/>
    <Navbar/>
    <Component {...pageProps} />
  </MotionConfig>)
}
