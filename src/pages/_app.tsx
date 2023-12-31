import Footer from '@/components/Footer'
import Header from '@/components/Header'
import Globalstyle from '@/styles/globals'
import { RecoilRoot } from 'recoil'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <RecoilRoot>
      <Globalstyle />
      <Component {...pageProps} />
    </RecoilRoot>
  )
}
