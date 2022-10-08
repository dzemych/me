import { FC, useEffect, useState } from 'react'
import classes from './Header.module.sass'
import Logo from '@images/logo.svg'
import TitleSvg from '@images/title.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import Curtain from '@components/Curtain/Curtain'


interface IProps {
   headerHeight: number,
}

const Header: FC<IProps> = ({ headerHeight}) => {
   const cls = [classes.container]

   const [curtain, setCurtain] = useState(false)
   const [menuButton, setMenuButton] = useState('Menu')

   if (curtain)
      cls.push(classes.curtain)

   useEffect(() => {
      const timeout = curtain ? 410 : 400

      setTimeout(() => {
         setMenuButton(curtain ? 'Close' : 'Menu')
      }, timeout)
   }, [curtain])

   useEffect(() => {
      if (curtain)
         document.body.style.overflow = 'hidden'

      if (!curtain)
         document.body.style.overflow = 'auto'
   }, [curtain])

   return (
      <header
         className={cls.join(' ')}
         style={{height: headerHeight}}
      >
         <Curtain isOpen={curtain}/>

         <div className={classes.left}>
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