import { FC, useContext, useEffect, useState } from 'react'
import classes from './Curtain.module.sass'
import { CSSTransition } from 'react-transition-group'
import Loading from '@components/Navigation/Curtain/Loading'
import NavMenu from '@components/Navigation/Curtain/NavMenu'
import { PageContext } from '../../../pages/_app'


interface IProps {
   isOpen: boolean,
   close: () => void,
}

const Curtain: FC<IProps> = ({ isOpen , close }) => {
   const { setIsCurtain } = useContext(PageContext)

   const [newPage, setNewPage] = useState(false)

   const changePageCurtainAnimation = () => {
      setNewPage(true)
   }

   let cls = [classes.wrapper]

   if (newPage) {
      cls.push(classes.pageAnimation)
      setTimeout(() => {
         close()
      }, 1350)
   }

   useEffect(() => {
      if (!isOpen) {
         setNewPage(false)
      }
   }, [isOpen])

   useEffect(() => {
      if (!isOpen)
         setTimeout(() => {
            setIsCurtain(false)
         }, 400)

      if (isOpen)
         setIsCurtain(true)
   }, [isOpen])

   let animationCls = {
    enter: classes.enterMove,
    enterActive: classes.enterActiveMove,
    enterDone: classes.enterDoneMove,
    exit: classes.exitMove,
    exitActive: classes.exitActiveMove,
    exitDone: classes.exitDoneMove
   }

   return (
      <CSSTransition
         in={isOpen}
         timeout={500}
         classNames={animationCls}
      >
         <div className={classes.container}>
            <div className={cls.join(' ')}>
               <Loading/>
               <NavMenu changePageCurtainAnimation={changePageCurtainAnimation}/>
            </div>
         </div>
      </CSSTransition>
   )
}

export default Curtain