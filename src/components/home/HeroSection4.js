import React from 'react'
import  styles from "../../styles/home/HeroSection4.module.css"
const HeroSection4 = () => {
  return (
    <div className="section1">
    <div className={styles.herosection}>
      <div className={styles.main}>
      <div className={styles.heading}>
        <p>Features projects</p>
        <h1>Where happiness lives</h1>
      </div>
      <div className={styles.view}>
        <p><a href=""> View More</a></p>
      </div>
      </div>
      <div className={`${styles.cards} ${styles.scroll_container}`}>
        <div className={styles.card}>
          
         <div className={styles.img}>
          <img src="/AssestImage/Herosection4/farm2.jpg" alt="" />
         </div>
         <div className={styles.overlay}>
         <div className={styles.cardbody}>
          <h1>Swiss Haven <br /> Farmhouses Islamabad</h1>
          <h1>01</h1>

         </div>
         </div>
        </div>
        <div className={styles.card}>
          
         <div className={styles.img}>
          <img src="/AssestImage/Herosection4/muridke2.jpg" alt="" />
         </div>
         <div className={styles.overlay}>
         <div className={styles.cardbody}>
          <h1>Gulberg Avenue<br /> Muridke Project</h1>
          <h1>02</h1>

         </div>
         </div>
        </div>
        <div className={styles.card}>
          
         <div className={styles.img}>
          <img src="/AssestImage/Herosection4/bahawalnagar.jpg" alt="" />
         </div>
         <div className={styles.overlay}>
         <div className={styles.cardbody}>
          <h1>Gulberg Avenue <br />Bahawalnager Project</h1>
          <h1>03</h1>

         </div>
         </div>
        </div>
        <div className={styles.card}>
          
          <div className={styles.img}>
           <img src="/AssestImage/Herosection4/perl.jpg" alt="" />
          </div>
          <div className={styles.overlay}>
          <div className={styles.cardbody}>
           <h1>The Pearl Heights<br /> Lahore Project</h1>
           <h1>04</h1>
 
          </div>
          </div>
         </div>
         <div className={styles.card}>
          
          <div className={styles.img}>
           <img src="/AssestImage/Herosection4/4.jpg" alt="" />
          </div>
          <div className={styles.overlay}>
          <div className={styles.cardbody}>
           <h1>Chunian Homes<br /> Kasur Project</h1>
           <h1>05</h1>
 
          </div>
          </div>
         </div>
      </div>
    </div>
    </div>
  )
}

export default HeroSection4