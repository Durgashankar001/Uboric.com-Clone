import React from 'react'
import {Route,Routes} from 'react-router-dom'
import About from '../Components/Aboutus/About'
import Cart from '../Components/Cart/Cart'
import Category from '../Components/Category/Category'
import Checkout from '../Components/CheckOut/Checkout'
import Contactus from '../Components/Contactus/Contactus'
import Home from '../Components/Home/Home'
import Shop from '../Components/Shop/Shop'

const AllRouter = () => {
  return (
    <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/shop" element={<Shop/>}/>
        <Route path="/cart" element={<Cart/>}/>
        <Route path="/contactus" element={<Contactus/>}/>
        <Route path="/checkout" element={<Checkout/>}/>
        <Route path="/aboutus" element={<About/>}/>
        <Route path="/category" element={<Category/>}/>
    </Routes>
  )
}

export default AllRouter