import { Box } from '@chakra-ui/react'
import { Link, Navigate } from 'react-router-dom'
import React, { useContext } from 'react'
import { AiOutlineEye } from 'react-icons/ai'
import { BsBag } from 'react-icons/bs'
import { FcLike } from 'react-icons/fc'
import './singleProduct.css'
import { AuthContext } from '../../Context/AuthContext'

const SingleProduct = ({image,title,price,brand,product,handleCartData,id}) => {

  const {isAuth,cartData,setCartData} = useContext(AuthContext)
  const handleChange = () => {
    return <Navigate to='/shop/productlist'/>
  }
  return (
    <Box>
      <Link to={`/shop/productlist/${id}`}>
    <div onClick={handleChange} className='main_content2' style={{ maxHeight: "22rem" }}>
      <div className='hide_btn'><AiOutlineEye className='eye' size={25} />Show More</div>
      <div className='sale'>SALE</div>
      <div className='icon_hide'>
        <FcLike className='ic' size={22} />
        <BsBag className='ic' size={22} />
      </div>
      <div className='image2'>
        <img className='img1' src={image} alt="logo" />
      </div>
      <div className='text'>
        <p className='p_text'>{title}</p>
        <p className='p_price'><s>₹ 1199.00</s> <span>₹ {price}</span></p>

      </div>
    </div>
    </Link>
  </Box>
  )
}

export default SingleProduct