import { FC, useRef, useState } from 'react'
import classes from './Home.module.sass'
import Link from 'next/link'
import ProjectsList from '@components/ProjectsList/ProjectsList'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import example from '@images/example.png'


const Home: FC = () => {
   return (
      <div className={classes.container}>
         <div className={classes.wrapper}>
            <div className={classes.bg_img}>
               <img src={example.src} alt='' />
            </div>

            <h5
               className={classes.name}
               data-animate={'animation-1'}
            >
               Dzemych Ivan
            </h5>

            <h1
               className={classes.title}
               data-animate={'animation-2'}
            >
               Backend and Frontend JavaScript Developer
            </h1>

            <p
               className={classes.text}
               data-animate={'animation-3'}
            >
               Over the past 9 years, as an art director
               and designer, I’ve worked with big companies
               and up-and-coming startups to successfully help
               them reach their full potential and attract new customers.
            </p>

            <div
               className={classes.link_section}
               data-animate={'animation-4'}
            >
               <Link href="/">View projects</Link>

               &nbsp;&nbsp;&nbsp;&nbsp;or&nbsp;&nbsp;&nbsp;&nbsp;

               <Link href="/">Read About Me</Link>
            </div>

            <div className={classes.projects_list}>
               <div
                  data-animate={'animate--me'}
                  className={classes.title_container}
               >
                  <h5>Work experience</h5>
                  <h1>Latest projects</h1>
               </div>

               <ProjectsList/>
            </div>

            <div className={classes.projects_list}>
               <div
                  data-animate={'animate--me'}
                  className={classes.title_container}
               >
                  <h5>Written on javascript</h5>
                  <h1>Personal projects</h1>
               </div>

               <ProjectsList/>
            </div>

            <div className={classes.projects_list}>
               <div
                  data-animate={'animate--me'}
                  className={classes.title_container}
               >
                  <h5>need web developer ?</h5>
                  <h1>
                     Let’s work together
                     &nbsp;<FontAwesomeIcon icon={faArrowRight}/>
                  </h1>
               </div>
            </div>
         </div>
      </div>
   )
}

export default Home