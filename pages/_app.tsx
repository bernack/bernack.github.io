import "@/styles/globals.css"
import type { AppProps } from "next/app"
import { Inter } from "@next/font/google"
import Head from "next/head"

const inter = Inter({ subsets: ["latin"] })

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Bernack</title>
        <meta name="description" content="Personal site of Timo and Jan Christoph Bernack and Sina Hosbach" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="https://bernack.de" />
        {/*<link rel="icon" href="/favicon.ico" />*/}
      </Head>
      <main className={inter.className}>
        <Component {...pageProps} />
      </main>
    </>
  )
}
