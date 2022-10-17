import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
// import classes from './Loading.module.sass'
import Curtain from '@components/Navigation/Curtain/Curtain'
import NavMenu from '@components/Navigation/Curtain/NavMenu'


const Loading = () => {
   const [loading, setLoading] = useState(false)
   const router = useRouter()

   useEffect(() => {
      const startHandler = (url: string) => {
         url !== router.asPath && setLoading(true)
      }

      const completeHandler = (url: string) => {
         if (url === router.asPath)
            setTimeout(() => {
               setLoading(false)
            }, 500)
      }

      console.log('here')
      router.events.on('routeChangeStart', startHandler)
      router.events.on('routeChangeComplete', completeHandler)
      router.events.on('routeChangeError', completeHandler)

      return () => {
         router.events.off('routeChangeStart', startHandler)
         router.events.off('routeChangeComplete', completeHandler)
         router.events.off('routeChangeError', completeHandler)
      }
   })

   return <Curtain
      isOpen={loading}
      close={() => setLoading(false)}
   >
      <NavMenu close={() => setLoading(false)}/>
   </Curtain>

   // if (!loading)
   //    return null
   //
   // return (
   //    <div className={classes.container}>
   //       <div className={classes.wrapper}>
   //          <div className={classes.pulse_container}>
   //             <div className={classes.pulse_circle}>
   //
   //             </div>
   //          </div>
   //       </div>
   //    </div>
   // )
}


export default Loading