import React from 'react'
import styles from './Footer.module.css'

export default function Footer() {
  return (
    <div className={`${styles.contain} mt-5 `}>
    <div className="d-flex justify-content-center mb-4">
      <i className="fa-brands fa-linkedin-in me-2 fa-lg cursor-pointer"></i>
      <i className="fa-brands fa-github me-2 fa-lg cursor-pointer"></i>
      <i className="fa-brands fa-twitter me-2 fa-lg cursor-pointer"></i>
      <i class="fa-brands fa-youtube fa-lg cursor-pointer"></i>

    </div>
    <p style={{color:'white', fontSize:'16px'}}>© 2023. Foodera. All rights reserved.</p>
    </div>
  )
}
