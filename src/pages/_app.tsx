import Header from '@/components/Header'
import Globalstyle from '@/styles/globals'
import type { AppProps } from 'next/app'
import { RecoilRoot } from 'recoil'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <RecoilRoot>
      <Globalstyle />
      <Header />
      <Component {...pageProps} />
    </RecoilRoot>
  )
}
