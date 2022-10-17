import { FC, useEffect, useState } from 'react'
import classes from './Header.module.sass'
import Logo from '@images/logo.svg'
import TitleSvg from '@images/title.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import Curtain from '@components/Navigation/Curtain/Curtain'
import { useRouter } from 'next/router'
import NavMenu from '@components/Navigation/Curtain/NavMenu'


interface IProps {
   headerHeight: number,
}

const Header: FC<IProps> = ({ headerHeight}) => {
   const router = useRouter()

   const cls = [classes.container]

   const [curtain, setCurtain] = useState(false)
   const [menuButton, setMenuButton] = useState('Menu')

   if (curtain)
      cls.push(classes.curtain)

   // Change menu text on close and open curtain
   useEffect(() => {
      const timeout = curtain ? 410 : 400

      setTimeout(() => {
         setMenuButton(curtain ? 'Close' : 'Menu')
      }, timeout)
   }, [curtain])

   // Lock body scroll if curtain is open
   useEffect(() => {
      if (curtain)
         document.body.style.overflow = 'hidden'

      if (!curtain)
         setTimeout(() => {
            document.body.style.overflow = 'auto'
         }, 400)
   }, [curtain])

   return (
      <header
         className={cls.join(' ')}
         style={{height: headerHeight}}
      >
         <Curtain isOpen={curtain} close={() => setCurtain(false)}>
            <NavMenu close={() => setCurtain(false)}/>
         </Curtain>

         <div className={classes.left} onClick={() => router.push('/')}>
            <Logo className={classes.logo}/>
            <TitleSvg className={classes.titleSvg}/>
         </div>

         <div
            className={classes.right}
            onClick={() => setCurtain(prev => !prev)}
         >
            <span>
               {menuButton}
            </span>

            <FontAwesomeIcon icon={faBars} className={classes.menu_icon}/>
         </div>
      </header>
   )
}

export default Header