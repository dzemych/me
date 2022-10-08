import type {AppProps} from 'next/app'
import MainLayout from '../layouts/MainLayout'
import 'src/styles/globals.sass'
import 'src/styles/fonts.sass'
import 'src/styles/colors.sass'


function MyApp({Component, pageProps}: AppProps) {

   return (
      <MainLayout>
         <Component {...pageProps} />
      </MainLayout>
   )
}

export default MyApp
