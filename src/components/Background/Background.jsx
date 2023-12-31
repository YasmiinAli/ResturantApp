import React from 'react'
import background from '../../assets/10.jpg'
import styles from './Background.module.css'

export default function Background() {
  return (
    <div className={styles.contain}>
        <img src={background} alt='background' style={{width:'100%', height:'80vh'}} />
        <div className={styles.textContainer}>
            <h2 >When a man's stomach is full it makes no
difference whether he is rich or poor.</h2>
<p >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et purus a odio
finibus bibendum in sit amet leo. Mauris feugiat erat tellus.</p>
        </div>
    </div>
  )
}
