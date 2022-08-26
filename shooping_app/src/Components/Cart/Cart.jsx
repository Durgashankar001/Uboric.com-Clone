import React, { useContext } from 'react'
import { AuthContext } from '../../Context/AuthContext'
import './Cart.css'

const Cart = () => {
  const { isAuth, cartData, setCartData } = useContext(AuthContext)
  console.log(cartData)
  return (
    <div>Cart</div>
  )
}

export default Cart