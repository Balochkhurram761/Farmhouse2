import React from 'react'
import styles from "../styles/MobileNavbar.module.css"
import { RxCross2 } from "react-icons/rx";
import { useState } from 'react';

const MobileNavbar = ({handlemenu}) => {
  const [clicked,setclicked]=useState(false);
  const[colorselect,setcolorselect]=useState('Home');
  const handlecolorselect=(item)=>{
    setcolorselect(item);
  }
  const handleclick=()=>{
    setclicked(!clicked);
  }

  return (
   <div className={`${styles.mobilenavbar} ${styles.activenav}`}>
   <div className={styles.cross} onClick={handlemenu}>
    <RxCross2 />

    </div>
    <ul>
  <li>
    <div className={styles.menuItem}>
      <img src="/AssestImage/Navbarmobile/mobMenuBg.jpg" alt="" />
      <a href="" className={colorselect==='Home' ? styles.active :''} onClick={()=>handleclick('Home')} >Home</a>
    </div>
  </li>
  <li>
    <div className={styles.menuItem}>
      <img src="/AssestImage/Navbarmobile/mobMenuBg.jpg" alt="" />
      <a href="" className={colorselect==='About Us' ? styles.active :''} onClick={()=>handleclick('About Us')} >About Us</a>
    </div>
  </li>
  <li>
    <div className={styles.menuItem}>
      <img src="/AssestImage/Navbarmobile/mobMenuBg.jpg" alt="" />
      <a href="" className={colorselect==='Our Services' ? styles.active :''} onClick={()=>handleclick('Our Services')} >Our Services</a>
    </div>
  </li>
  <li>
    <div className={styles.menuItem}>
      <img src="/AssestImage/Navbarmobile/mobMenuBg.jpg" alt="" />
      <a href="" className={colorselect==='Properites' ? styles.active :''} onClick={()=>handleclick('Properties')} >Properties</a>
    </div>
  </li>
  <li>
    <div className={styles.menuItem}>
      <img src="/AssestImage/Navbarmobile/mobMenuBg.jpg" alt="" />
      <a href="" className={colorselect==='Contact Us' ? styles.active :''} onClick={()=>handleclick('Contact Us')} >Contact Us</a>
    </div>
  </li>
</ul>

   </div>
  )
}

export default MobileNavbar