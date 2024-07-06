import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
       <Head>
        <link rel="icon" href="/meek.png" />
      </Head>
      <body className='text-black bg-white'>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
