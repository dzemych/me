import type {AppProps} from 'next/app'
import MainLayout from '../layouts/MainLayout'
import 'src/styles/globals.sass'
import 'src/styles/fonts.sass'
import 'src/styles/colors.sass'
import 'src/styles/animations.sass'
import { useEffect, useState } from 'react'
import Head from 'next/head'
import React from 'react'
import { useRouter } from 'next/router'
import PageLoading from '@components/Navigation/Curtain/PageLoading'


export const PageContext = React.createContext({
   newPage: false,
   isCurtain: false,
   headerType: 'main',
   setHeaderType: (arg: string) => {},
   setIsCurtain: (arg: boolean) => {}
})

function MyApp({Component, pageProps}: AppProps) {

   const router = useRouter()

   const [newPage, setNewPage] = useState(false)
   const [isCurtain, setIsCurtain] = useState(false)
   const [headerType, setHeaderType] = useState('main')

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

   // Set new page
   useEffect(() => {
      const startHandler = async () => {
         setNewPage(true)
         // setHeaderType('menu')
      }

      const completeHandler = (url: string) => {
         if (url === router.asPath)
            setTimeout(() => {
               setNewPage(false)
            }, 1500)
      }

      router.events.on('routeChangeStart', startHandler)
      router.events.on('routeChangeComplete', completeHandler)
      router.events.on('routeChangeError', completeHandler)

      return () => {
         router.events.off('routeChangeStart', startHandler)
         router.events.off('routeChangeComplete', completeHandler)
         router.events.off('routeChangeError', completeHandler)
      }
   })

   return (
      // @ts-ignore
      <PageContext.Provider value={{
         newPage,
         isCurtain,
         headerType,
         setIsCurtain,
         setHeaderType
      }}>
         <PageLoading isOpen={newPage && !isCurtain} />

         <Head>
            <meta name="viewport" content="width=device-width, initial-scale=1" />
         </Head>

         <MainLayout>
            <Component {...pageProps} />
         </MainLayout>
      </PageContext.Provider>
   )
}

export default MyApp
