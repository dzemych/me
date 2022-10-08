import { FC } from 'react'
import classes from './ProjectCard.module.sass'
import { useRouter } from 'next/router'


interface IProps {
   title: string
   startDate: Date
   endDate: Date
   bgImg: string
   slug: string
}

const ProjectCard: FC<IProps> = (
   {
      title,
      endDate,
      startDate,
      bgImg,
      slug
   }) => {

   const router = useRouter()

   const getFormedDate = () => {
      const start = `${startDate.getMonth() + 1}/${startDate.getFullYear()}`
      const end = `${endDate.getMonth() + 1}/${endDate.getFullYear()}`

      return `${start} - ${end}`
   }

   return (
      <div
         className={classes.container}
         style={{background: `url("${bgImg}")`}}
         onClick={() => router.push('/project/ ' + slug)}
      >
         <div className={classes.data}>
            {getFormedDate()}
         </div>

         <h1 className={classes.title}>
            {title}
         </h1>
      </div>
   )
}

export default ProjectCard