import React from 'react'
import styles from './AnotherContent.module.css'
import img from '../../assets/2.png'
import { Button } from 'react-bootstrap'

export default function AnotherContent() {
  return (
    <div className='container mt-5'>
        <div className="row">
            <div className="col-md-6">
<h2 className={styles.headline}>We make everything by hand with the best possible ingredients.
</h2>
       <p style={{color:'#555555'}}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et purus a odio finibus bibendum in sit amet leo. Mauris feugiat erat tellus.Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.
       </p>
       <div><i  className={`${styles.icon} fa-solid fa-check fa-lg`}></i> Etiam sed dolor ac diam volutpat.</div>
       <div><i  className={`${styles.icon} fa-solid fa-check fa-lg`}></i> Erat volutpat aliquet imperdiet.</div>
       <div><i  className={`${styles.icon} fa-solid fa-check fa-lg`}></i> purus a odio finibus bibendum.</div>
        <Button className={`${styles.more} col-md-4  mt-5`}>Learn More </Button>
            </div>
            <div className="col-md-6">
              <img src={img} alt="" className={styles.image} />
            </div>
        </div>
    </div>
  )
}
