import '@broca-wernicke/styles/globals.css';
import type { AppProps } from 'next/app';
import { Geist_Mono } from 'next/font/google';
import Head from 'next/head';

const mono = Geist_Mono({
  weight: ['400', '700'],
  style: ['normal'],
  subsets: ['latin'],
  display: 'swap',
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Broca</title>
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
      </Head>
      <div className={mono.className}>
        <Component {...pageProps} />
      </div>
    </>
  );
}
