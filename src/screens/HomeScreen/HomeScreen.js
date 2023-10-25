import React from 'react'
import Header from '../../components/header/Header'
import Section1 from '../../components/section1/Section1'

export default function HomeScreen(props) {

  const { cartButton } = props

  


  return (
    <>
        <Header cartButton={cartButton}/>
        <Section1 />
    </>
  )
}
