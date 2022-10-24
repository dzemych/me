import { FC, useRef } from 'react'
import classes from '@components/Navigation/Curtain/Curtain.module.sass'
import { CSSTransition } from 'react-transition-group'
import Loading from '@components/Navigation/Curtain/Loading'
import loadingBack from '@images/loading_back.jpg'


interface IProps {
   isOpen: boolean
}

const PageLoading: FC<IProps> = ({ isOpen }) => {

   const cls = [classes.wrapper]

   if (isOpen)
      cls.push(classes.pageAnimation)

   return (
      <CSSTransition
         in={isOpen}
         timeout={500}
         classNames={{
            enter: classes.enterMove,
            enterActive: classes.enterActiveMove,
            enterDone: classes.enterDoneMove,
            exit: classes.exitMove,
            exitActive: classes.exitActiveMove,
            exitDone: classes.exitDoneMove
         }}
      >
         <div className={classes.container}>
            <div className={cls.join(' ')}>
               <div className={classes.pageLoading_sep}>
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
            </div>
         </div>
      </CSSTransition>
   )
}

export default PageLoading