import "../styles/globals.css";
import Head from "next/head";
import { AppProps } from "next/app";
import { SessionProvider } from "next-auth/react";

export default function App({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  return (
    <SessionProvider session={session}>
      <main>
        <Head>
          <title>Rhinamic Landscape Design | San Antonio, TX</title>
          <meta
            name="description"
            content="Transform your outdoor space with Rhinamic, San Antonio's premier landscaping service. Professional landscape design, maintenance, and installation."
          />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/favicon.ico" />

        </Head>
        <Component {...pageProps} />
      </main>
    </SessionProvider>
  );
}
