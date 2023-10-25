import React from 'react'
import styles from './Header.module.scss'
import logo from '../../assets/logo.svg'
import cart from '../../assets/cart.svg'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

export default function Header(props) {

    const { cartButton } = props

    const cartitems = useSelector((state) => state.cart.itemsInCart)

    let cartLength = useSelector((state) => state.cart.itemsInCart)
    cartLength = cartLength.reduce((a, b) => {
        return a + b.count
    }, 0)
    const totalPrice = cartitems.reduce((a, b) => {
        return a + (b.price * b.count)
    }, 0)


  return (
    <div className={styles.header}> 
        <div className='container'>
            <div className={styles.head}>
                <Link to='/'>
                    <div className={styles.logo}>
                        <img src={logo} alt="" />
                        <div>
                            <h3>REACT PIZZA</h3>
                            <span>самая вкусная пицца во вселенной</span>
                        </div>
                    </div>
                </Link>
                {cartButton ? (
                    <Link to='/cart'>
                        <div className={styles.cart}>
                            <div>{totalPrice}<span>₽</span></div>
                            <div><img src={cart} alt="" /><span>{cartLength}</span></div>
                        </div>
                    </Link>
                ) : (<div></div>)}
            </div>
        </div>
    </div>
  )
}
