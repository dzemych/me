import { FC, useRef } from 'react'
import classes from './Curtain.module.sass'
import { CSSTransition } from 'react-transition-group'


interface IProps {
   isOpen: boolean,
   close: () => void,
   children: React.ReactNode
}

const Curtain: FC<IProps> = ({ isOpen, children}) => {

   const nodeRef = useRef(null)
   const cls = [classes.wrapper]

   if (isOpen)
      cls.push(classes.on)

   if (!isOpen)
      cls.push(classes.off)

   return (
      <CSSTransition
         in={isOpen}
         ref={nodeRef}
         timeout={500}
         classNames={{
            enter: classes.enter,
            enterActive: classes.enterActive,
            enterDone: classes.enterDone,
            exit: classes.exit,
            exitActive: classes.exitActive,
            exitDone: classes.exitDone
         }}
         className={cls.join(' ')}
      >
         {children}
      </CSSTransition>
   )
}

export default Curtain