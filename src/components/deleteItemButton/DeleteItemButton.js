import React from 'react'
import styles from './DeleteItemButton.module.scss'
import del from '../../assets/delete.svg'
import { useDispatch } from 'react-redux'  
import { deleteItem } from '../../store/store'


export default function DeleteItemButton(props) {

  const dispatch = useDispatch()

  const { id, pizzaDough, pizzaSize } = props


  function deleteItemInCart(id){
    const info = {
      id: id,
      pizzaDough: pizzaDough,
      pizzaSize: pizzaSize
    }

    dispatch(deleteItem({ info }))
  }

  return (
    <button onClick={() => deleteItemInCart(id)}><img src={del} alt="" /></button>
  )
}
