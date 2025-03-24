import React from 'react'
import styles from "../../styles/home/heroSection2.module.css"
const HeroSection2 = () => {
  return (
   
    <div className={styles.herosection}>
      <div className={styles.image}>
        <img src="/AssestImage/Herosection2/lines.png" alt="" />
      </div>
      <div className={styles.sectioncontainer}>
              <div className="hersection2">
      <h1>Al-Nafey Group of Companies <br /> <span>Private Limited
      </span></h1>
      </div>
      </div>

      
      <div className={styles.colorwrapper}>
      <div className={styles.sectioncontainer}>
      <div className={styles.container}>
        
        <div className={styles.leftsection}>
          <img src="/AssestImage/Herosection2/logo4.png" alt="" />
        </div>
        
        <div className={styles.rightsection}>
          <h3>about us </h3>
          <p><span> Al-Nafey Group </span> of Companies Private Limited is a government-approved company based in Pakistan. We are registered with the Federal Board of Revenue and the Securities and Exchange Commission of Pakistan. Our group is actively involved in various business ventures, including property dealings.
          </p>
          <p>Our journey in the property business began in 2013, and for the past 10 years, <span> Al-Nafey Group </span> of Companies has been dedicatedly providing excellent services with full responsibility. We are grateful for the blessings of Allah Almighty.</p>
          <button>Explore more !</button>
        </div>
        {/* <div className={styles.rightimg}>
          <div>
          <img src="/AssestImage/Herosection2/right.webp" alt="" />
          </div>
        </div> */}
        </div>
       
      </div>
      </div>
      </div>
      
     
     
     
    
  )
}

export default HeroSection2