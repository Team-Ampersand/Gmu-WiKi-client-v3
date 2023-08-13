import Footer from '@/components/Footer'
import Header from '@/components/Header'
import Globalstyle from '@/styles/globals'
import '@/styles/globals.tsx'
import type { AppProps } from 'next/app'
import { RecoilRoot } from 'recoil'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <RecoilRoot>
      <Header />
      <Globalstyle />
      <Component {...pageProps} />
      <Footer />
    </RecoilRoot>
  )
}
