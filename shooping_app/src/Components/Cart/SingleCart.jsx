import React from 'react'
import { useContext } from "react"
import './SingleCart.css'
import { Divider } from '@chakra-ui/react'
import { useToast } from '@chakra-ui/react'

const SingleCart = ({ id, image, title, price, brand, handleCartData, quantity, handleAdd, handleMinus }) => {
    const toast = useToast()
    const handleProduct = () => {
        handleCartData(id)
        toast({
            position: 'top',
            title: 'Product removed Successfully',
            status: 'warning',
            duration: 9000,
            isClosable: true,
          })
    }
    return (
        <>
        <div className='cart_single_flex'>
            <div className='cart_single_image' >
                <img src={image} alt={title} />
            </div>
            <div className='cart_difficult'>
                <div className='cart_single_flex_title'>
                    <div>
                        <h1>{title}</h1>
                    </div>
                    <p>₹{price}</p>
                </div>
                <div className='cart_single_flex_title'>
                    <div className='cart_single_flex_title_btn'>
                        <button disabled={quantity === 1} onClick={() => handleMinus(id)}>-</button>
                        <p>{quantity}</p>
                        <button disabled={quantity === 10} onClick={() => handleAdd(id)}>+</button>
                    </div>
                    <div onClick={handleProduct}>
                        <h2 className='remove'>remove</h2>
                    </div>
                </div>
            </div>
        </div>
        <Divider />
        </>
    )
}

export default SingleCart