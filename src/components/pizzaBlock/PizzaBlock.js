import React, { useState } from 'react'
import styles from './PizzaBlock.module.scss'
import { useDispatch, useSelector } from 'react-redux'
import { setItemInCart } from '../../store/store'

export default function PizzaBlock(props) {


    const { title, doughs, sizes, id, price, img } = props
    
    const dispatch = useDispatch()
    
    
    const [pizzaSize, setPizzaSize] = useState("26 см.")
    const [pizzaDough, setPizzaDough] = useState("тонкое")
    const [pizzaCount, setPizzaCount] = useState(0)
    
    function selectPizzaSize(text) {
        setPizzaSize(text)
    }
    function selectPizzaDough(text) {
        setPizzaDough(text)
    }

    const addPizza = () => {
        const updatedPizzaCount = pizzaCount + 1;
        
        const items = {
            id: id,
            img: img,
            title: title,
            price: price,
            count: updatedPizzaCount,
            doughs: pizzaDough,
            sizes: pizzaSize
        }
        if(updatedPizzaCount < 100){
            setPizzaCount(updatedPizzaCount)
            dispatch(setItemInCart({ items }))
        }

    } 
      return (
          <div className={styles.pizzaBlock}>
        <img src={img} alt="" />
        <div className={styles.name}><b>{title}</b></div>
            <div className={styles.characteristic}>
                <div className={styles.dough}>
                    {doughs.map(dough => (
                        <div key={dough} onClick={(e) => selectPizzaDough(e.target.innerText)} className={`${styles.sizeblock} ${pizzaDough === dough ? styles.active : ''}`}>{dough}</div>
                        ))}
                </div>
                <div className={styles.size}>
                    {sizes.map(size => (
                        <div key={size} onClick={(e) => selectPizzaSize(e.target.innerText)} className={`${styles.sizeblock} ${pizzaSize === size ? styles.active : ''}`}>{size}</div>
                        ))}
                </div>
            </div>
        <div className={styles.priceBlock}>
            <h3>От {price} ₽</h3>
            <button onClick={addPizza}>
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z" fill="#EB5A1E"/></svg>
                Добавить
                {pizzaCount > 0 && <div className={styles.circle}>{pizzaCount}</div>}
            </button>
        </div>
    </div>
  )
}