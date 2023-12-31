import React from 'react'
import styles from './Header.module.css'
import backgroundImg from '../../assets/backgroundImg.png'
import { Button } from 'react-bootstrap'

export default function Header() {
  return (
    <>
    <div className="container ">
<div className="row">
        <div className={`${styles.contain} col-md-5`}>
       <h2 style={{'color':'#43121d'}}>Good food choices are good investments.</h2>
       <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et purus a odio finibus bibendum amet leo.</p>
      <div className="row">
        <Button className={`${styles.order} col-md-4 me-2 `}>Order Now <i className="fa-solid fa-burger"></i> </Button>
      <Button className={`${styles.more} col-md-4`}>Learn More</Button>
      </div>
      </div>
      <div className='col-md-7'>
      <img src={backgroundImg} className={styles.background} alt="" />
      </div>
</div>

    </div>
    </>
  )
}
