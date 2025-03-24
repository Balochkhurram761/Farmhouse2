import React from 'react'
import styles from '../../styles/home/HeroSection3.module.css'
import { FaArrowRight } from 'react-icons/fa'

const HeroSection3 = () => {
  return (
    <div className='section1'>
      <div className={styles.herosection}>
        <div className={styles.heading}>
          <h1>
            Invest <br /> with <span>Al-Nafey Group</span>
          </h1>
          <p>
            {' '}
            <span> Al-Nafey Group’s </span> unique approach to real estate
            investment is about easing the entire procedure for every client.
          </p>
          <button>
            more details<FaArrowRight />
          </button>
        </div>
        <hr />
        <div className={styles.cards}>
          <div className={styles.card}>
            <div className={styles.img}>
              <img src='	https://www.alnafeygroup.com/images/one.svg' alt='' />
            </div>
            <div className={styles.cardbody}>
              <h6>step 1</h6>
              <h3>
                Global <br /> <span>Mindset</span>
              </h3>
            </div>
            <div className={styles.para}>
              <p>
                Please feel free to visit our offices or contact us by phone.
                Either option ensures prompt and convenient communication.
              </p>
            </div>
          </div>
          <div className={styles.card}>
            <div className={styles.img}>
              <img src='https://www.alnafeygroup.com/images/two.svg' alt='' />
            </div>
            <div className={styles.cardbody}>
              <h6>step 2</h6>
              <h3>
                Corporate Service <br /> <span>Provider</span>
              </h3>
            </div>
            <div className={styles.para}>
              <p>
                Work with secure & official <span> Al-Nafey Group </span>{' '}
                branches with a portfolio of branded property projects.
              </p>
            </div>
          </div>
          <div className={styles.card}>
            <div className={styles.img}>
              <img src='https://www.alnafeygroup.com/images/three.svg' alt='' />
            </div>
            <div className={styles.cardbody}>
              <h6>step 3</h6>
              <h3>
                Trend <br /> <span>Focused</span>
              </h3>
            </div>
            <div className={styles.para}>
              <p>
                Follow and experience the trends in the real estate investment
                sector. Be one of the first ones to take advantage of the latest
                developments.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeroSection3
