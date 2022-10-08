import { FC } from 'react'
import classes from './Footer.module.sass'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons'
import { faTelegram, faLinkedin } from '@fortawesome/free-brands-svg-icons'


const Footer: FC = () => {
   return (
      <div className={classes.container}>
         <div className={classes.wrapper}>
            <div className={classes.main_column}>

               <div className={classes.row}>
                  <div className={classes.title}>
                     Contact information --
                  </div>

                  <p className={classes.text}>
                     Feel free to reach out to me any time. I prefer talk over the phone or in
                     messengers. Of course you can contact me over email if it
                     is more convenient to you
                  </p>

                  <a
                     href="mailto:dzemichivan@gmail.com"
                     className={classes.contact_row}
                  >
                     <div className={classes.contact_icon_container}>
                        <FontAwesomeIcon icon={faEnvelope}/>
                     </div>

                     <span>dzemichivan@gmail.com</span>
                  </a>

                  <a
                     href="tel:+48-515-285-228"
                     className={classes.contact_row}
                  >
                     <div className={classes.contact_icon_container}>
                        <FontAwesomeIcon icon={faPhone}/>
                     </div>

                     <span>+48 515 285 228</span>
                  </a>

                  <a
                     href="https://t.me/dzemych"
                     target="_blank"
                     rel="noreferrer"
                     className={classes.contact_row}
                  >
                     <div className={classes.contact_icon_container}>
                        <FontAwesomeIcon icon={faTelegram}/>
                     </div>

                     <span>@dzemych</span>
                  </a>

                  <a
                     href="https://www.linkedin.com/in/dzemych/"
                     target="_blank"
                     rel="noreferrer"
                     className={classes.contact_row}
                  >
                     <div className={classes.contact_icon_container}>
                        <FontAwesomeIcon icon={faLinkedin}/>
                     </div>

                     <span>dzemych</span>
                  </a>
               </div>

               <div className={classes.row}>
                  <div className={classes.title}>
                     Current availability --
                  </div>

                  <p className={classes.text}>
                     Can start work immediately, both full time and part time.
                     {/* eslint-disable-next-line react/no-unescaped-entities */}
                     I'll be happy to discuss new opportunities
                  </p>

               </div>

            </div>
         </div>
      </div>
   )
}

export default Footer