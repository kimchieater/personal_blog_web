import { Montserrat } from 'next/font/google'
import {Jersey_20} from 'next/font/google'
import {AppProps} from 'next/app'


const mont = Montserrat({
  weight: ['100','300','500'],
  subsets: ['latin'],
})

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <main className={`${mont.className}`}>
      <Component {...pageProps} />
    </main>
  )
}