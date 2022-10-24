import { FC, useContext, useEffect, useState } from 'react'
import classes from './Header.module.sass'
import Logo from '@images/logo.svg'
import TitleSvg from '@images/title.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import Curtain from '@components/Navigation/Curtain/Curtain'
import { useRouter } from 'next/router'
import { PageContext } from '../../../pages/_app'


interface IProps {
   headerHeight: number,
}

const Header: FC<IProps> = ({ headerHeight}) => {
   const { headerType, setHeaderType, newPage } = useContext(PageContext)

   const router = useRouter()

   const cls = [classes.container]

   const [curtain, setCurtain] = useState(false)


   if (curtain || newPage)
      cls.push(classes.curtain)

   const logoClickHandler = () => {
      router.push('/')
   }

   const toggleCurtain = () => {
      setCurtain(prev => !prev)
   }

   // Change menu text on close and open curtain
   useEffect(() => {
      const timeout = (curtain || newPage) ? 410 : 400

      setTimeout(() => {
         setHeaderType((curtain || newPage) ? 'menu' : 'main')
      }, timeout)
   }, [curtain, newPage])

   // Lock body scroll if curtain is open
   useEffect(() => {
      if (curtain || newPage)
         document.body.style.overflow = 'hidden'

      if (!curtain && !newPage)
         setTimeout(() => {
            document.body.style.overflow = 'auto'
         }, 400)
   }, [curtain])

   return (
      <header
         className={cls.join(' ')}
         style={{height: headerHeight}}
      >
         <Curtain
            isOpen={curtain}
            close={() => setCurtain(false)}
         />

         <div className={classes.left} onClick={logoClickHandler}>
            <Logo className={classes.logo}/>
            <TitleSvg className={classes.titleSvg}/>
         </div>

         <div
            className={classes.right}
            onClick={toggleCurtain}
         >
            <span>
               {headerType === 'menu' ? 'Close' : 'Menu'}
            </span>

            <FontAwesomeIcon icon={faBars} className={classes.menu_icon}/>
         </div>
      </header>
   )
}

export default Header