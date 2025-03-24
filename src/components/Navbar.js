import React, { useState } from 'react'
import styles from "../styles/Navbar.module.css"
import { FaPhoneAlt } from "react-icons/fa";
import { IoMdArrowDropdown } from "react-icons/io";
import { CiMenuFries } from "react-icons/ci";
import { MdOutlineRestaurantMenu } from "react-icons/md";
import MobileNavbar from './MobileNavbar';
import { Link } from 'react-router-dom';



const Navbar = () => {
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
    <div className={styles.navbar}> 
     
    <div className={styles.menu} onClick={handlemenu}>
    {menubar ?  <CiMenuFries /> : <CiMenuFries />
    }
 
    </div>
      <div className={styles.logo}>
        <Link to="/">  <img src="/AssestImage/Navbar/newLogo.png" alt="" />
          <img src="/AssestImage/Navbar/textLogo1.png" alt="" /></Link>
      </div>
      {menubar ? (<MobileNavbar handlemenu={handlemenu}  />    ): (

    
      <div className={styles.navlink}>
        <ul>
          <li><Link to="/" className={colorselect==='Home' ? styles.active :''}  onClick={()=>handleclick('Home')} >Home</Link></li>
          <li><Link to="/about_us"className={colorselect==='About Us' ? styles.active :''}  onClick={()=>handleclick('About us')} >About Us</Link></li>
          <li><Link to="/ourservice"className={colorselect==='Our Services' ? styles.active :''} onClick={()=>handleclick('Our Services')} >Our Services</Link></li>
          <li><a href=""className={colorselect==='Properties' ? styles.active :''} onClick={()=>handleclick('Properties')} >Properties</a></li>
          <li><a href="https://wa.me/03054372019"className={colorselect==='Contact Us' ? styles.active :''} onClick={()=>handleclick('Contact Us')} >Contact Us</a></li>
        </ul>
      </div>
        )}
      <div className={styles.third}>
      <div className={styles.phone}>
      <a href="https://wa.me/03054372019"><FaPhoneAlt  />
        <p>+92 315 666 4441</p></a>
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
  )
}

export default Navbar