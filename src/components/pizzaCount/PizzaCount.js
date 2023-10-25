import React, { useState, useEffect } from 'react'
import styles from './PizzaCount.module.scss'
import plus from '../../assets/plus.svg'
import minus from '../../assets/minus.svg'
import darkminus from '../../assets/darkminus.svg'
import { useDispatch } from 'react-redux'
import { incrementPizzaCount, setPizzaPrice, decrementPizzaCount } from '../../store/store'

export default function PizzaCount(props) {

  const dispatch = useDispatch()

  
  const { id, count, pizzaSize, pizzaDough } = props

  const [checkCount, setCheckCount] = useState(false)


  useEffect(() => {
    if (count === 1) {
      setCheckCount(true);
    }
    else {
      setCheckCount(false);
    }
  }, [count]);


  console.log(checkCount)

  function handleIncrement(id){
    const info = {
      id: id,
      count: count,
      pizzaDough: pizzaDough,
      pizzaSize: pizzaSize
    }

    if(count < 100){
      dispatch(incrementPizzaCount({ info }))
      dispatch(setPizzaPrice({ info }))
    }

  }
  function handleDecrement(id){
    const info = {
      id: id,
      count: count,
      pizzaDough: pizzaDough,
      pizzaSize: pizzaSize
    }

    dispatch(decrementPizzaCount({ info }))
  }



  return (
    <div className={styles.PizzaCount}>
        <button className={`${styles.decrementButton} ${checkCount ? styles.active : ''}`} onClick={() => handleDecrement(id)}>{checkCount ? (<img src={darkminus} alt="" />) : (<img src={minus} alt="" />)}</button>
        <div className={styles.value}>{count}</div>
        <button onClick={() => handleIncrement(id)}><img src={plus} alt="" /></button>
    </div>
  )
}
