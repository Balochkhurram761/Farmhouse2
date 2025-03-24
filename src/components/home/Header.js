import React from 'react'
import styles from "../../styles/home/Header.module.css"
const Header = () => {
  return (
  <div className={styles.background}>
    <div className="section">
    <div className={styles.header}>
      <p> <span> Welcome to Our Website!</span> Thank you for visiting our website! We are excited to share our new and improved online presence with you. <span>You can also explore our company profile.</span></p>
      <p><a href=""><img src="/AssestImage/Header/btn.png" alt="" /></a></p>
    </div>
    </div>
    </div>
  )
}

export default Header