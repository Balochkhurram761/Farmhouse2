import React from 'react'
import styles from "../styles/Footer.module.css"
import { IoIosArrowForward } from "react-icons/io";
import { CiPhone } from "react-icons/ci";
import { CiMail } from "react-icons/ci";
import { FaFacebookF } from "react-icons/fa";
import { CiInstagram } from "react-icons/ci";





const Footer = () => {
  return (
   
    <div className={styles.footer}>
      <div className={styles.footer_container}>
  <div className={styles.section3}>
    <div className={styles.footers}>
    <div className={styles.footer1}>
      <div className={styles.heading}>
        <h1>Newsletter Sign up</h1>
        <p>Get notified about updates and be the first to <br />
        get early access to plots.</p>
      </div>
      <div className={styles.btn}>
        <input type="email" placeholder='Enter Email'  name="" id="" />
        <button>subscribe</button>
      </div>
    </div>
    <hr />
    <div className={styles.footer2}>
      <div className={styles.img}>
        <img src="/AssestImage/Footer/logo4.png" alt="" />
      </div>
      <div className={styles.footer_link}>
        <h3>company info</h3>
        <ul>
        <li><a href=""><IoIosArrowForward />About us</a></li>
        <li><a href=""><IoIosArrowForward />Terms & Conditon</a></li>
        <li><a href=""><IoIosArrowForward />Investment Guide</a></li>
        <li><a href=""><IoIosArrowForward />Locations</a></li>
        <li><a href=""><IoIosArrowForward />Contact</a></li>
        </ul>
      </div>
      <div className={styles.footer_link}>
        <h3>useful links</h3>
        <ul>
        <li><a href=""><IoIosArrowForward />Home</a></li>
        <li><a href=""><IoIosArrowForward />Services</a></li>
        <li><a href=""><IoIosArrowForward />Properties</a></li>
        <li><a href=""><IoIosArrowForward />Blog</a></li>
        <li><a href=""><IoIosArrowForward />Contact</a></li>
        </ul>
      </div>
      <div className={styles.footerlink}>
        <h3>get in touch</h3>
        <p>Lahore Motorway City, Kot Abdul Malik <br /> Interchange, Lahore, Pakistan</p>
        <p><a href=""><CiPhone /> +92 315 6664441</a></p>
        <p><a href=""><CiMail /> alnafeygroup87@gmail.com</a></p>
        <div className={styles.social_link}>
          <p><a href=""><FaFacebookF /></a></p>
          <p><a href=""><CiInstagram /></a></p>

        </div>

      </div>

    </div>
    <hr />
    <div className={styles.footer3}>
    <p>© 2023-Al-Nafey Group of Companies Private Limited. All right reserved.</p>
    </div>
    </div>
  </div>
    </div>
    </div>
  
    
  )
}

export default Footer