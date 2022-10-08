import { FC, ReactElement } from 'react'
import Head from 'next/head'
import Header from '@components/Navigation/Header/Header'
import Footer from '@components/Navigation/Footer/Footer'
import classes from './MainLayout.module.sass'


interface IProps {
   children: ReactElement
}

const MainLayout: FC<IProps> = ({children}) => {
   const headerHeight = 85

   return (
      <div className={classes.container}>
         <Head>
            <title>Portfolio | Dzemych Ivan - Web developer</title>
            <meta name="viewport" content="width=device-width, initial-scale=1" />
         </Head>

         <Header headerHeight={headerHeight}/>

         <div
            style={{marginTop: headerHeight}}
            className={classes.wrapper}
         >
            {children}
         </div>

         <Footer/>
      </div>
   )
}

export default MainLayout