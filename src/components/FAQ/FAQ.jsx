import React from 'react'
import styles from './FAQ.module.css'

export default function FAQ() {
  return (
    <div className='container'>
        <h2 className={`${styles.headLine} mt-5 mb-5`}>Frequently Asked Questions</h2>
        <div className="row">
            <div className="col-md-6">
                <h5> Is Foodera Bread really baked fresh each day?</h5>
                <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language.</p>
            </div>
            <div className="col-md-6">
                <h5> Do you bake breads containing animal fats or products?</h5>
                <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language.</p>
            </div>
        </div>
        <div className="row">
            <div className="col-md-6">
                <h5>Can I order your products online?</h5>
                <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language.</p>
            </div>
            <div className="col-md-6">
                <h5> When are you opening a shop near me?</h5>
                <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language.</p>
            </div>
        </div>
    </div>
  )
}
