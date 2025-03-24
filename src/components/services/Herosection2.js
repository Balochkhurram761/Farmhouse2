import React from 'react'
import styles from "../../styles/services/HeroSection2.module.css"
const Herosection2 = () => {
  return (
    <div className={styles.herosection}>
      <h4><span>our </span><br /> services</h4>
      
      <div className={styles.cards}>
        <div className={styles.card}>
         <h2>Residential <br />Solutions</h2>
         <p>Secure and comfortable living options.</p>
         <hr />
         <p>Diverse range of residences for individuals and families.</p>
         <hr />
         <p>Tailored solutions for both local and international clients.</p>
        <div className={styles.img}>
          <img src="/AssestImage/Services/herosection2/01.png" alt="" />
        </div>
        </div>
        <div className={styles.card}>
         <h2>Residential <br />Solutions</h2>
         <p>Secure and comfortable living options.</p>
         <hr />
         <p>Diverse range of residences for individuals and families.</p>
         <hr />
         <p>Tailored solutions for both local and international clients.</p>
        </div>
        <div className={styles.card}>
         <h2>Residential <br />Solutions</h2>
         <p>Secure and comfortable living options.</p>
         <hr />
         <p>Diverse range of residences for individuals and families.</p>
         <hr />
         <p>Tailored solutions for both local and international clients.</p>
        </div>
      </div>
    </div>
  )
}

export default Herosection2