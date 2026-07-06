import { Navbar } from '@/components/Navbar'
import AnimatedBackground from '@/components/AnimatedBackground'
import ScrollProgress from '@/components/ScrollProgress'
import '@/styles/globals.css'

export default function App({ Component, pageProps }) {
  return (
  <>
  <AnimatedBackground/>
  <ScrollProgress/>
  <Navbar/>
  <Component {...pageProps} />
  </>)
}
