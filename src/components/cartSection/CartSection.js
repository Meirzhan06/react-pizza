import React from 'react'
import styles from './CartSection.module.scss'
import blackCart from '../../assets/blackCart.svg'
import bin from '../../assets/bin.svg'
import CartPizzaBlock from '../cartPizzaBlock/CartPizzaBlock'
import { useSelector, useDispatch } from 'react-redux'
import { deleteAllItems, setPizzaPrice } from '../../store/store'
import ClearCart from './ClearCart'
import arrowleft from '../../assets/arrowleft.svg'
import { Link } from 'react-router-dom'


export default function CartSection() {

    const dispatch = useDispatch()
    const cartitems = useSelector((state) => state.cart.itemsInCart)

    let cartLength = useSelector((state) => state.cart.itemsInCart)
    cartLength = cartLength.reduce((a, b) => {
        return a + b.count
    }, 0)
    const totalPrice = cartitems.reduce((a, b) => {
        return a + (b.price * b.count)
    }, 0)


    dispatch(setPizzaPrice(totalPrice))


  function clearCart(){
    dispatch(deleteAllItems())
  }





  return (
    <div className={styles.cartSection}>
        <div className='container'>
            <div className={styles.cart}>
                {cartLength === 0 ? (
                    <ClearCart />
                ) : (
                    <div className={styles.cartBlock}>
                        <div className={styles.title}>
                            <div>
                                <img src={blackCart} alt="" />
                                <h2>Корзина</h2>
                            </div>
                            <div className={styles.clearCart}>
                                <img src={bin} alt="" />
                                <span onClick={clearCart}>Очистить корзину</span>
                            </div>
                        </div>
                        <div className={styles.pizzaBlocks}>
                            {cartitems.map(item => (
                                <CartPizzaBlock key={item.id} id={item.id} title={item.title} price={item.price} pizzaSize={item.sizes} pizzaDough={item.doughs} count={item.count} img={item.img}/>
                            ))}
                        </div>
                        <div className={styles.cartInfo}>
                            <div>
                                <span>Всего пицц: <b>{cartLength} шт.</b></span>
                                <button><img src={arrowleft} alt="" /><Link to='/'>Вернуться назад</Link></button>
                            </div>
                            <div>
                                <span>Сумма заказа: <b>{totalPrice} ₽</b></span>
                                <button>Оплатить сейчас</button>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    </div>
  )
}


