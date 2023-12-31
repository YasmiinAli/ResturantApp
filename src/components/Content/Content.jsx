import React from 'react'
import image from '../../assets/1.png'
import styles from './Content.module.css'
import { Button } from 'react-bootstrap'

export default function Content() {
  return (
    <div className='container mt-5 mb-5'>
        <div className="row">
            <div className="col-md-6">
                <img src={image} style={{'width':'100%','borderRadius':'5px'}} alt="" />
            </div>
            <div className="col-md-6">
                <h2 style={{'color':'#43121d'}}>Good food choices are good investments.</h2>
       <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et purus a odio finibus bibendum amet leo.</p>
        <Button className={`${styles.more} col-md-4 me-2 `}>Learn More </Button>
    </div>
    </div>
    </div>
  )
}
