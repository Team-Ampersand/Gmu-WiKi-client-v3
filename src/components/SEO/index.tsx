import { SEOPropsType } from '@/types/components/SEOPropsType'
import Head from 'next/head'

export default function SEO({ title }: SEOPropsType) {
  return (
    <Head>
      <title>{title}</title>
    </Head>
  )
}
