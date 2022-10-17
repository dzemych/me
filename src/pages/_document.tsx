import { Html, Head, Main, NextScript } from 'next/document'
import Script from 'next/script'
import { showPreloader } from 'src/containers/Preload/preload'


export default function Document() {
   return (
      <Html>

         <Head>
            <meta name='description' content='Web developer on JavaScript. I can develop fully
            adaptive and responsible SPA and backend for it with easily scaled database.' />
            <meta name='language' content='en' />
         </Head>

         <body>
            <Main />

            <NextScript />
            {/*<Script*/}
            {/*   id={'some-id'}*/}
            {/*   strategy="beforeInteractive"*/}
            {/*>*/}
            {/*   {`*/}
            {/*// /!*      window.addEventListener('load', ${showPreloader})*!/*/}
            {/*// /!*   `}*!/*/}
            {/*</Script>*/}
         </body>
      </Html>
   )
}
