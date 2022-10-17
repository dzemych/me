import type {AppProps} from 'next/app'
import MainLayout from '../layouts/MainLayout'
import 'src/styles/globals.sass'
import 'src/styles/fonts.sass'
import 'src/styles/colors.sass'
import 'src/styles/animations.sass'
import { useEffect } from 'react'
import Head from 'next/head'
import Loading from '../containers/Preload/Loading'


function MyApp({Component, pageProps}: AppProps) {

   const checkElements = (elements: any[]) => {
      elements.forEach((el, i) => {
         const rect = el.getBoundingClientRect()

         if (rect.top <= window.innerHeight - 35) {
            // @ts-ignore
            el.dataset.animate = 'animate--init'
            elements.splice(i, 1)
         }
      })
   }

   // Add animation on element appearance
   useEffect(() => {
      // 1) Get all elements that we should animate on first appearance in viewport
      const nodes = document.querySelectorAll('[data-animate="animate--me"]')
      let elements = Array.from(nodes)

      // 2) Animate elements on first appearance
      checkElements(elements)

      // * Scroll change handler
      const handler = () => {
         if (elements.length > 0)
            checkElements(elements)
      }

      // 3) If scroll changes check if any elements appeared
      window.addEventListener('DOMContentLoaded', handler, false)
      window.addEventListener('load', handler, false)
      window.addEventListener('scroll', handler, false)
      window.addEventListener('resize', handler, false)

   })

   // Delete preloader
   // useEffect(() => {
      // console.log('')
      // document.querySelector('#preloader')?.remove()
   // }, [])

   return (
      <>
         <Loading/>

         <Head>
            <meta name="viewport" content="width=device-width, initial-scale=1" />
         </Head>

         <MainLayout>
            <Component {...pageProps} />
         </MainLayout>
      </>
   )
}

export default MyApp
