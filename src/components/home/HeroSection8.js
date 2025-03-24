import React from 'react'
import styles from "../../styles/home/HeroSection8.module.css"
const HeroSection8 = () => {
  return (
    <div className="section1">
   <div className={styles.herosection}>
    <div className={styles.heading}>
   <h5>FROM OUR BLOG</h5>
  <p>News & Articles</p>
  </div>
   <div className={styles.cards}>
    <div className={styles.card}>
      <div className={styles.img}>
        <img src="/AssestImage/Herosection8/article1.webp" alt="" />
      </div>
      <div className={styles.body}>
        <p>projects</p>
        <h2>Real Estate Investment Strategies for Retirement Planning</h2>
        <span>By <strong>  Admin </strong>, 23 June, 2022</span>
      </div>
    </div>
    <div className={styles.card}>
      <div className={styles.img}>
        <img src="/AssestImage/Herosection8/article2.webp" alt="" />
      </div>
      <div className={styles.body}>
        <p>projects</p>
        <h2>What are the 2024 Forecasts According to 2023 Real Estate Investment Analysis?</h2>
        <span>By <strong>  Admin </strong>, 15 November, 2023</span>
      </div>
    </div>
    <div className={styles.card}>
      <div className={styles.img}>
        <img src="/AssestImage/Herosection8/article3.jpeg" alt="" />
      </div>
      <div className={styles.body}>
        <p>projects</p>
        <h2>Long-Term Returns of Real Estate Investment</h2>
        <span>By <strong>  Admin </strong>, 01 Jan, 2024</span>
      </div>
    </div>
   </div>
   </div>
   </div>
  )
}

export default HeroSection8