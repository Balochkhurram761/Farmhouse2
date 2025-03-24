import React from 'react'
import styles from "../../styles/services/HeroSection3.module.css"
const HeroSection3 = () => {
  return (
   <div className={styles.herosection}>
    <div className={styles.section}>
    <div className={styles.cards}>
      <div className={styles.card}>
        <h3>point 1</h3>
        <p>We take you to all the properties you are interested in Pakistan.</p>
      </div>
      <div className={styles.card}>
        <h3>point 2</h3>
        <p>Let the Al-Nafey Group Team pick you up from the airport or hotel.</p>
      </div>
      <div className={styles.card}>
        <h3>point 3</h3>
        <p>Our expert team ease the stress of securing residence permits. Let us handle the paperwork and negotiations for you to get the job done fast.</p>
      </div>
      <div className={styles.card}>
        <h3>point 4</h3>
        <p>We still stay connected with you after your investment. Every business requires maintenance. Take advantage of our after-sales commitment, which includes servicing all issues related to your investment.</p>
      </div>
    </div>
   </div>
   </div>
  )
}

export default HeroSection3