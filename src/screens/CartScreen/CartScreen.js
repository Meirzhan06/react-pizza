import React from 'react'
import Header from '../../components/header/Header'
import CartSection from '../../components/cartSection/CartSection'

export default function CartScreen(props) {

  

    const { cartButton } = props

  return (
    <>
        <Header cart={cartButton}/>
        <CartSection />
    </>
  )
}
