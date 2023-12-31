import React from 'react'
import styles from './ExploreFoods.module.css'
import FoodCard from '../FoodCard/FoodCard'
import image1 from '../../assets/01.jpg'
import image2 from '../../assets/02.jpg'
import image3 from '../../assets/03.jpg'

export default function ExploreFoods() {
  return (
    <div className={`${styles.contain} container`}>
        <h2 className={styles.headLine}>Explore Our Foods</h2>
        <p >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et purus a odio finibus bibendum in sit amet leo. Mauris feugiat erat tellus. Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove.</p>
    <div className="row mt-5">
        <div className="col-md-4">
            <FoodCard image={image1} title='Rainbow Vegetable Sandwich' time='Time: 10 - 15 Minutes | Serves: 2' priceBefore='11.70' priceAfter='10.50' />
        </div>
        <div className="col-md-4">
            <FoodCard image={image2} title='Vegetarian Burger' time='Time: 30 - 45 Minutes | Serves: 1' priceBefore='30.70' priceAfter='20.50'/>
                </div>
        <div className="col-md-4">
            <FoodCard image={image3} title='Raspberry Stuffed French Toast' time='Time: 15 - 20 Minutes | Serves: 4' priceBefore='100.70' priceAfter='88.50'/>
        </div>
    </div>
    </div>
  )
}
