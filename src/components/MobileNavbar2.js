import React from 'react'
import Navbar from './Navbar'
import styles from "../styles/MobileNavbar2.module.css"
import { CiMenuFries } from "react-icons/ci";
import { FaPhoneAlt } from "react-icons/fa";
import { IoMdArrowDropdown } from "react-icons/io";
import { useState } from 'react';
import MobileNavbar from './MobileNavbar';
const MobileNavbar2 = () => {
  const [clicked,setclicked]=useState(false);
  const [dropclicked ,setdropclicked]=useState('EN');
  const[colorselect,setcolorselect]=useState('Home');
  const [menubar ,setmenubar]=useState(false);
  const handlemenu=()=>{
    setmenubar(!menubar);
  }
  const handledrop=(item)=>{
    setdropclicked(item);
    setclicked(false);
  }
  const handleclick=()=>{
    setclicked(!clicked);
  }
  const handlecolorselect=(item)=>{
    setcolorselect(item);
  }
  return (
    <div className={styles.mobilenavbar}>
      <div className={styles.img}>
      <img src="/AssestImage/Navbarmobile2/WhatsApp Image 2024-10-30 at 9.12.51 PM.jpeg" alt="" />
      </div>
      <div className={styles.wrapper}>
      <div className={styles.navbar}>
        <div className={styles.menu} onClick={handlemenu}>
      {menubar ?  <MobileNavbar/> :   <CiMenuFries />}
        </div>
        <div className={styles.third}>
      <div className={styles.phone}>
      <FaPhoneAlt  />
      
      </div>
      <div className={styles.language}>
    
        <p onClick={handleclick} >{dropclicked} <IoMdArrowDropdown /> </p>
        { clicked && (
        <div className={styles.droplanguage}>
        

        
          <p onClick={()=>handledrop('UR')} >Ur</p>
          <p onClick={()=>handledrop('EN')} >Eng</p>
       
        </div>
         )}
        </div>
      </div>
      </div>
      </div>
    </div>
  )
}

export default MobileNavbar2 ;