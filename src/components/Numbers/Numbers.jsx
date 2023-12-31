import React from 'react'
import styles from './Numbers.module.css'

export default function Numbers() {
  return (
    <div className={styles.contain}>
        <div className="row ">
            <div className="col-md-3"> <h2>1287+</h2> <h6>SAVINGS</h6></div>
            <div className="col-md-3"><h2>5897+</h2> <h6>PHOTOS</h6></div>
            <div className="col-md-3"><h2>7787+</h2> <h6>GLOBES</h6></div>
            <div className="col-md-3"><h2>1787+</h2> <h6>ROCKETS</h6></div>
        </div>
    </div>
  )
}
