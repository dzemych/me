import { useContext, useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import Curtain from '@components/Navigation/Curtain/Curtain'
import { PageContext } from '../../pages/_app'


const Preload = () => {
   const { newPage, setNewPage } = useContext(PageContext)

   return <Curtain
      isOpen={newPage}
      close={() => setNewPage(false)}
   />
}


export default Preload