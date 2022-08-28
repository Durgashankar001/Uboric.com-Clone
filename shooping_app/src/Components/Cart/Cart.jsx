import { Divider } from '@chakra-ui/react'
import React, { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../../Context/AuthContext'
import './Cart.css'
import SingleCart from './SingleCart'
import { useToast } from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom'

const Cart = () => {
  const {cartData,setCartData,setAlltotal} = useContext(AuthContext)
  const toast = useToast()
  const [data,setData] = useState([])
  const [total,setTotal] = useState(0)
  const [co,setCo] = useState("")
  const navigate = useNavigate()
  useEffect(()=>{
      let sum = 0;
      for(let i = 0;i<cartData.length;i++)
      {
          sum+=Number(cartData[i].price)
      }
      setTotal(sum)
      setAlltotal(sum)
  },[cartData.length])

  useEffect(()=>{
     const newData = cartData.filter((el)=>{
          el.quantity=1
          return el
     }) 
     setData(newData)
  },[cartData.length])
  console.log(data)
  const handleCartData =(id)=>{
      let arr2 = cartData.filter((el)=>{
          return (el.id!==id)
      })
      setCartData(arr2)
  }

  const handleAdd = (id) => {
      const filterData = data.map((el) => {
        if (el.id === id) {
          el.quantity = el.quantity + 1;
        }
        return el;
      });
      setData(filterData);
      TotalSum();
    };
    const handleMinus = (id) => {
      const filterData = data.map((el) => {
        if (el.id === id) {
          el.quantity = el.quantity - 1;
        }
        return el;
      });
      setData(filterData);
      TotalSum();
    };
    const TotalSum = () => {
      let sum2 = 0;
      // let sum4 = 0;
      for (let i = 0; i < data.length; i++) {
        sum2 += data[i].quantity * data[i].price;
      //   sum4 += data[i].quantity;
      }
      setTotal(sum2)
      setAlltotal(sum2);
    };
const coApply = () => {
  if(co=="masai30"){
    setTotal(total*0.30)
    setAlltotal(total*0.30)
    toast({
      position: 'top',
      title: 'Code applied Successfully',
      status: 'success',
      duration: 9000,
      isClosable: true,
    })
  }else{
    toast({
      position: 'top',
      title: 'code is not valid or expired',
      status: 'warning',
      duration: 9000,
      isClosable: true,
    })
  }
}

const goShop = () => {
  navigate("/shop")
}
const goCheckout = () => {
  navigate("/checkout")
}

  console.log(cartData)
  return (
    <div>
      <div className='cart_first'>
        <h1>Cart</h1>
      </div>
      <p className='d'>{cartData.length==0 ? "Your Cart Is Empty !" : ""}</p>
      <div className='cart_second'>
        <div className='cart_product'>
        {
                data.map((el)=><SingleCart key={el.id} id={el.id} title={el.title} image={el.image} price={el.price} brand ={el.brand} handleCartData={handleCartData} quantity={el.quantity} handleAdd={handleAdd}
                handleMinus={handleMinus}
                />)
            }

            <div className='copun'>
              <p>Apply CopunCode</p>
              <div className='card_input'>
                <input type="text" placeholder='Enter CoupunCode' name='name' onChange={(e)=>setCo(e.target.value)} />
                <button onClick={coApply}>Apply</button>
              </div>
            </div>
        </div>

        <div className='cart_details'>
          <div className='card_cart'>
            <div className='details_flex'>
              <p>Subtotal</p>
              <p>₹ {(total).toFixed(2)}</p>
            </div>
            <Divider />
            <div className='details_flex'>
              <p>Total</p>
              <p>₹ {(total).toFixed(2)}</p>
            </div>
            <Divider />
            <div className='simple_flex'>
              <p>Or 3 interest free payments of ₹{(total*0.50).toFixed(2)} with</p>
              <img width="60px" src="https://www.uboric.com/wp-content/plugins/simpl-pay-in-3-for-woocommerce/public/images/brand.svg" alt="" />
            </div>
          </div>
          <div className='checkout_btn'>
            <button onClick={goCheckout}>Procceed to Checkout</button>
          </div> 
          <p className='shooping_cart' onClick={goShop}>Continue Shooping</p> 
        </div>
        
      </div>
    </div>
  )
}

export default Cart