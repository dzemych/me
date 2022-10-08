import { FC } from 'react'
import classes from './ProjectsList.module.sass'
import ProjectCard from '@components/ProjectCard/ProjectCard'
import { IProjectCard } from '../../types/ProjectCard'
import some from '@images/some.jpg'


const ProjectsList: FC = () => {
   const projects: IProjectCard[] = [
      {
         slug: 'project-1',
         startDate: new Date(),
         endDate: new Date(),
         bgImg: some.src,
         title: 'Some test super cool my main project'
      },
      {
         slug: 'project-1',
         startDate: new Date(),
         endDate: new Date(),
         bgImg: some.src,
         title: 'Some test super cool my main project'
      },
      {
         slug: 'project-1',
         startDate: new Date(),
         endDate: new Date(),
         bgImg: some.src,
         title: 'Some test super cool my main project'
      }
   ]

   return (
      <div className={classes.container}>
         {projects.map((el, i) => (
            <ProjectCard
               key={i}
               bgImg={el.bgImg}
               slug={el.slug}
               startDate={el.startDate}
               endDate={el.endDate}
               title={el.title}
            />
         ))}
      </div>
   )
}

export default ProjectsList