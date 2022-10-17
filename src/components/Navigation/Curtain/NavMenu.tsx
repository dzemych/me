import { FC, ReactNode } from 'react'
import { useRouter } from 'next/router'
import classes from '@components/Navigation/Curtain/Curtain.module.sass'


interface ILink {
   text: string,
   to: string,
   blank?: boolean
}

interface IProps {
   close: () => void
}

const NavMenu: FC<IProps> = ({close}) => {

   const links: ILink[] = [
      { text: 'Project', to: '/' },
      { text: 'About me', to: '/about' },
      { text: 'Contact', to: '/contact' },
      { text: 'Linkedin', to: 'https://www.linkedin.com/in/dzemych/', blank: true },
   ]

   const router = useRouter()

   const linkClick = (e: React.MouseEvent<Element, MouseEvent>, href: string) => {
      e.preventDefault()

      router.push(href)
      close()
   }

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
            <a onClick={e => linkClick(e, el.to)}>
               { el.text }
            </a>
         </li>
      )
   }

   return (
      <div className={classes.wrapper}>
         <div className={classes.middle_container}>
            <h5 className={classes.title}>
               Menu
            </h5>

            <ul className={classes.list}>
               {links.map((el, i) => renderLink(el, i))}
            </ul>
         </div>

         <footer className={classes.footer}>
            © {new Date().getFullYear()} Dzemych Ivan
         </footer>
      </div>
   )
}

export default NavMenu