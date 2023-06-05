import React from 'react'
import classes from './styles.module.scss'
import {IoIosArrowDroprightCircle} from 'react-icons/io'
import { FaLocationArrow, FaPhone } from 'react-icons/fa'

import {
  BsGithub,
  BsInstagram,
  BsLinkedin,
  BsTelegram,
  BsTwitter,
  BsYoutube,
} from "react-icons/bs";
import { MdMessage } from 'react-icons/md'
import { IoLocationSharp } from 'react-icons/io5'
import { Link } from 'react-router-dom';
function Footer() {
  return (
   <>
    <div className={classes.footer}>
      <div>
        <h2>Ikboljon's Portfolio</h2>
        <p>Thank you for visiting my personal portfolio website. Connect with me over socials.</p>
        <p>Keep Rising 🚀. Connect with me over live chat!</p>
      </div>
      <div>
        <h2>Quick Links</h2>
        <ul className={classes.sections}>
        <li><IoIosArrowDroprightCircle size={22} className={classes.iconFooter}/> Home</li>
        <li><IoIosArrowDroprightCircle size={22} className={classes.iconFooter}/> About</li>
        <li><IoIosArrowDroprightCircle size={22} className={classes.iconFooter}/> Skills</li>
        <li><IoIosArrowDroprightCircle size={22} className={classes.iconFooter}/> Education</li>
        <li><IoIosArrowDroprightCircle size={22} className={classes.iconFooter}/> Work</li>
        <li><IoIosArrowDroprightCircle size={22} className={classes.iconFooter}/> Experience</li>

        </ul>
      </div>
      <div>
        <h2>Contact Info</h2>
        <ul>
          <li><FaPhone className={classes.sendIcons} size={22}/>+91 XXX-XXX-XXXX</li>
          <li><MdMessage className={classes.sendIcons} size={22}/>ikboljon2003@gmail.com</li>
          <li><IoLocationSharp className={classes.sendIcons} size={22}/> Pune, India-412206</li>
        </ul>
        <section className={classes.socialIcons}>
          <Link className={classes.socialIcon} to={'/'}><BsGithub className={classes.social} size={18}/></Link>
          <Link className={classes.socialIcon} to={'/'}><BsInstagram className={classes.social} size={18}/></Link>
          <Link className={classes.socialIcon} to={'/'}><BsLinkedin className={classes.social} size={18}/></Link>
          <Link className={classes.socialIcon} to={'/'}><BsTwitter className={classes.social} size={18}/></Link>
          <Link className={classes.socialIcon} to={'/'}><BsYoutube className={classes.social} size={18}/></Link>
        </section>
      </div>
    </div>
      <hr className={classes.hr} />
      <div className={classes.linkedin}>
        <h4>Designed With ❤️ By <Link to={'/'}>Jigar Sable</Link></h4>
      </div>
   </>
  )
}

export default Footer
