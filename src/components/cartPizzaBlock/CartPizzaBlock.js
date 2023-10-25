import React from 'react'
import styles from './CartPizzaBlock.module.scss'
import pizza from '../../assets/pizza1.jpg'
import PizzaCount from '../pizzaCount/PizzaCount'
import DeleteItemButton from '../deleteItemButton/DeleteItemButton'

export default function CartPizzaBlock(props) {

  const { title, price, count, pizzaDough, pizzaSize, id, img } = props


  return (
    <>
      <div className={styles.pizzaBlock}>
        <div className={styles.hiddenButton}><DeleteItemButton id={id} pizzaDough={pizzaDough} pizzaSize={pizzaSize}/></div>
        <div className={styles.pizzaImgInfo}>
            <img src={img} alt="" />
            <div>
                <h3>{title}</h3>
                <p>{pizzaDough} тесто, {pizzaSize}</p>
            </div>
        </div>
        <div className={styles.pizzaPriceInfo}>
            <PizzaCount id={id} count={count} pizzaDough={pizzaDough} pizzaSize={pizzaSize}/>
            <h3>{price * count} ₽</h3>
            <DeleteItemButton id={id} pizzaDough={pizzaDough} pizzaSize={pizzaSize}/>
        </div>
    </div>
    </>
  )
}

