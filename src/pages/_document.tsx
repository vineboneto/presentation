import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html data-theme="dark">
      <Head>
        <meta name="theme-color" content="#2a303b" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
