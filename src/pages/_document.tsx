import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html data-theme="dark">
      <Head>
        <meta name="theme-color" content="#2a303b" />
        <meta name="google-site-verification" content="QIm65N3SfzHeImTWBERp3r5TglWWEQ8X1I9Or6rfHvU" />
        <meta name="author" content="Vinicius Gazolla Boneto" />

        <link rel="shortcut icon" href="/favicon.ico" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
