import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import Loading from '../components/general/Loading'

export default function App({ Component, pageProps }: AppProps) {
  const [user, setUser] = useState(null)
  const router = useRouter()
  const path  = router.pathname;
  
  useEffect(()=>{
    if (path.startsWith('/manage') && !user) {
      router.push('/auth/login')
    }
    if (path.startsWith('/auth') && user) {
      router.push('/manage')
    }
  }, [])

  if (path.startsWith('/manage') && !user) {
    return <Loading/>
  }

  else if (path.startsWith('/auth') && user) {
    return <Loading/>
  }

  return <Component {...pageProps} />
}
