import React from 'react'
import styles from './ClearCart.module.scss'
import emoji from '../../assets/emoji.svg'
import clearCart from './../../assets/clearCart.jpg'
import { Link } from 'react-router-dom'

export default function ClearCart() {
  return (
    <div className={styles.wrapper}>
        <div className={styles.clearCart}>
            <h1>Корзина пустая</h1>
            <img src={emoji} alt="" />
        </div>
        <span>Вероятней всего, вы не заказывали ещё пиццу. <br/> Для того, чтобы заказать пиццу, перейди на главную страницу.</span>
        <div className={styles.imgCart}>
            <img src={clearCart} alt="" />
        </div>
        <button><Link to='/'>Вернуться назад</Link></button>
    </div>
  )
}
