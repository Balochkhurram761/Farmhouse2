import React, { useState } from 'react'
import styles from "../../styles/home/HeroSection6.module.css"
import { MdOutlineArrowDropDown } from "react-icons/md";
import hero5data from '../data/Hero5data';

const HeroSection6 = () => {
  const [dropdown,setdropdown]=useState(null);
  const handledropdown=(index)=>{
    setdropdown(dropdown===index ? null : index);
  }
  return (
    <div className="section1">
   <div className={styles.herosection}>
    <h1>Answers to frequently <br />asked questions <span> Al-Nafey Group.</span></h1>
    <div className={styles.wrapper}>    
      <div className={styles.leftsection}>
        {hero5data.map((item,index)=>{
          return(

       
        <div key={index} className={`${styles.body} ${dropdown===index ? styles.active : ''}` }>
      <h3  onClick={()=>handledropdown(index)}  className={dropdown===index ? styles.heading : ''}  >{item.heading} <MdOutlineArrowDropDown />
      </h3>
      {dropdown===index  &&(
      <p>{item.para}</p>
    )}
      </div>
       )
      })}
    </div>
    <div className={styles.rightsection}>
      <div className={styles.img}>
        <img src="/AssestImage/Herosection6/mark2.webp" alt="" />

      </div>
      <h3>Ask your question ?</h3>
      <button>Ask Now !</button>
    </div>
    </div>

   </div>
   </div>
  )
}

export default HeroSection6