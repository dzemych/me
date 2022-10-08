import { FC, ReactNode, useEffect, useRef, useState } from 'react'
import classes from './Curtain.module.sass'
import { CSSTransition } from 'react-transition-group'
import Link from 'next/link'


interface IProps {
   isOpen: boolean
}

interface ILink {
   text: string,
   to: string,
   blank?: boolean
}

const Curtain: FC<IProps> = ({ isOpen}) => {

   const nodeRef = useRef(null)
   const cls = [classes.wrapper]
   // const [bottom, setBottom] = useState('-110vh')
   // const [containerStyles, setContainerStyles] = useState({
   //    alignItems: 'flex-end',
   //    top: '-100vh'
   // })

   // const containerStyles = {
   //
   // }

   if (isOpen)
      cls.push(classes.on)

   if (!isOpen)
      cls.push(classes.off)

   const links: ILink[] = [
      { text: 'Project', to: '/' },
      { text: 'About me', to: '/about' },
      { text: 'Contact', to: '/contact' },
      { text: 'Linkedin', to: 'https://www.linkedin.com/in/dzemych/', blank: true },
   ]

   const renderLink = (el: ILink, idx: number): ReactNode => {
      const style = {
         transition:
            `all .4s cubic-bezier(.3,0,.5,1) ${300 + 50 * idx}ms !important`
      }

      if (el.blank)
         return (
            <li
               key={el.to}
               style={style}
            >
               <a href={el.to} target={'_blank'} rel="noreferrer">
                  { el.text }
               </a>
            </li>
         )

      return (
         <li
            key={el.to}
            style={style}
         >
            <Link href={el.to}>
               { el.text }
            </Link>
         </li>
      )
   }

   // useEffect(() => {
   //    if (!isOpen)
   //       setContainerStyles({
   //          alignItems: 'flex-start',
   //          top: '-100vh'
   //       })
   //
   //    if (isOpen)
   //       setContainerStyles({
   //          alignItems: 'flex-end',
   //          top: '0'
   //       })
   // }, [isOpen])

   return (
      // <div
      //    className={classes.container}
         // style={containerStyles}
      // >
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
            <div className={classes.wrapper}>
               <div className={classes.middle_container}>
                  <h5 className={classes.title}>
                     Menu
                  </h5>

                  <ul
                     className={classes.list}
                     data-on={isOpen}
                  >
                     {links.map((el, i) => renderLink(el, i))}
                  </ul>
               </div>

               <footer className={classes.footer}>
                  © {new Date().getFullYear()} Dzemych Ivan
               </footer>
            </div>
         </CSSTransition>
      // </div>
   )
}

export default Curtain