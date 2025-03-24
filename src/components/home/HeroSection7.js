import React from 'react'
import styles from "../../styles/home/HeroSection7.module.css"
import { CiPhone } from "react-icons/ci";
import { FaWhatsapp } from "react-icons/fa";


const HeroSection7 = () => {
  return (
    
  <div className={styles.background}>  
  <div className="section1">
    <div className={styles.herosection}>
    <div className={styles.body}>
     <div className={styles.logo}>
     <img src="/AssestImage/Herosection7/houses (2).png" alt="" />
     <img src="/AssestImage/Herosection7/commercial.png" alt="" />
     <img src="/AssestImage/Herosection7/residential (1).png" alt="" />
     <img src="/AssestImage/Herosection7/agriculture.png" alt="" />
     </div>
     <p>Consult with top investment advisers</p>
     </div>
     <h3>How do we <span> help </span> you :</h3>
     <hr />
     <div className={styles.sectionwrapper}>
      <div className={styles.leftsection}>
        <div className={styles.number}>
        <div className={styles.wrap}>
           <div className={styles.one}>
            <h1>1</h1>
           </div>
           <p>We set your investment goals</p>
           </div>
           <div className={styles.wrap}>
           <div className={styles.one}>
            <h1>2</h1>
           </div>
           <p>Select the best property options accordingly</p>
           </div>
           <div className={styles.wrap}>
           <div className={styles.one}>
            <h1>3</h1>
           </div>
           <p>Calculate the returns and plan the investment </p>
           </div>
           </div>
           <div className={styles.btn}>
            <button><CiPhone /><span className={styles.text} >+92 315 6664441</span> </button>
            <button><FaWhatsapp /><span className={styles.text} >+92 315 6664441</span></button>
           </div>
      </div>
      <div className={styles.rightsection}>
    <div className={styles.img}>
      <img src="/AssestImage/Herosection7/adviser.jpg" alt="" />
    </div>
      </div>
     </div>
  </div>
  </div>
  </div>

  )
}

export default HeroSection7