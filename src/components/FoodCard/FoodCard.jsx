import React from 'react'
import { Button, Card } from 'react-bootstrap'
import styles from './FoodCard.module.css'

export default function FoodCard({image, title, time, priceAfter, priceBefore}) {
  return (
    <>
    <Card >
      <Card.Img variant="top" src={image} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <p>
          {time}
        </p>
        <span className={`${styles.after} me-3`}>
          ${priceAfter}
        </span>
<span className={styles.before}>
${priceBefore}
</span>

      </Card.Body>
    </Card>
              <Button className={`${styles.order} mt-2 w-100` }>Order Now  </Button>

    </>
  )
}
