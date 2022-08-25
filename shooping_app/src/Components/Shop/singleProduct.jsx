import { Box } from '@chakra-ui/react'
import React from 'react'
import { AiOutlineEye } from 'react-icons/ai'
import { BsBag } from 'react-icons/bs'
import { FcLike } from 'react-icons/fc'
import './singleProduct.css'

const SingleProduct = ({image,title,price,brand,product,handleCartData}) => {
  return (
    <Box>
    <div className='main_content2' style={{ maxHeight: "22rem" }}>
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
  </Box>
  )
}

export default SingleProduct