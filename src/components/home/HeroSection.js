import React from 'react'
import styles from "../../styles/home/HeroSection.module.css"
const HeroSection = () => {
  return (
   <div className={styles.herosection}>
    <div className={styles.image}>
      <img className={styles.firstimage} src="/AssestImage/Slider/nb1.jpg" alt="" />
     <img className={styles.secondimage} src="/AssestImage/Slider/nmb1.jpg" alt="" />
    </div>
    <div className={styles.overlay}>
    <div className={styles.herobody}>
      <div className={styles.imge}>
        <img src="/AssestImage/Slider/houses (1).png" alt="" />
        <img src="/AssestImage/Slider/commercial.png" alt="" />
        <img src="/AssestImage/Slider/farm-houses.png" alt="" />
        <img src="/AssestImage/Slider/agriculture.png" alt="" />
      </div>
      <div className={styles.body}>
        <h1>Investing <br /><span>In real Estate</span></h1>
        <p>A secure and profitable Venture . Trust your investment journey to <br /> our professional team,where your success is our commitment</p>
         <button><a href="">Get a Free Consultion</a></button>
      </div>
    </div>
   </div>
   </div>
  )
}

export default HeroSection