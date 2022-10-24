import { FC } from 'react'
import classes from '@components/Navigation/Curtain/Curtain.module.sass'
import loadingBack from 'public/images/loading_back.jpg'


const NavMenu: FC = () => {
   return (
      <div className={classes.pageLoading}>
         <div className={classes.pageLoading_back}>
            <img src={loadingBack.src} alt='' />
         </div>

         <div className={classes.middle_container}>
            <div className={classes.pulse_container}>
               <div className={classes.pulse_circle}>

               </div>
            </div>
         </div>

         <div className={classes.wait_container}>
            <h5>Welcome</h5>
            <h1>Wait a bit</h1>
         </div>
      </div>
   )
}

export default NavMenu