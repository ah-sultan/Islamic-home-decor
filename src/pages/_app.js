import { Poppins, Noto_Serif } from 'next/font/google'
import '@/styles/globals.css'
import Layout from '@/components/Layout'

const poppins = Poppins({
  subsets: ['latin'],
  variable: '--font-poppins',
  weight: ['300', '400', '500', '600', '700']
})

export default function App({ Component, pageProps }) {
  return (
    <div className={`${poppins.variable} font-sans`}>
      <Layout>

        <Component {...pageProps} />
      </Layout>
    </div>
  )
}
