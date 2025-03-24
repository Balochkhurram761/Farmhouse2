import React, { useState } from 'react';
import styles from "../../styles/home/HeroSection5.module.css";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import card from '../data/Hero6data';

const HeroSection5 = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextCard = () => {
    if (currentIndex < card.length - 1) {
      setCurrentIndex((prevIndex) => prevIndex + 1);
    }
  };

  const prevCard = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prevIndex) => prevIndex - 1);
    }
  };

  return (
    <div className={styles.herosection}>
      <div className={styles.leftside}>
        <img src="/AssestImage/Herosection5/keyImg.jpg" alt="" />
      </div>
      <div className={styles.rightside}>
        <div className={styles.cardbody}>
          <div className={styles.icon}>
            <h1>{card[currentIndex].title}</h1> 
          </div>
          <p>{card[currentIndex].para}</p>
          <div className={styles.btn}>
            <IoIosArrowBack 
              onClick={prevCard} 
              className={currentIndex=== 0 ? styles.disabled : ''} 
            />
        <IoIosArrowForward 
          onClick={nextCard} 
          className={currentIndex ===card.length - 1 ? styles.disabled : ''} 
         />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection5;
