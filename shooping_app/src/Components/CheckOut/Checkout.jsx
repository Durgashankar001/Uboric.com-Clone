import React from 'react'
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  RadioGroup,
  HStack,
  Radio,
  Divider,
  useToast,
} from '@chakra-ui/react'
import './Checkout.css'
import { useContext } from 'react'
import { AuthContext } from '../../Context/AuthContext'
import { useNavigate } from 'react-router-dom'

const Checkout = () => {
  const toast = useToast()
  const navigate = useNavigate()

  const {alltotal} = useContext(AuthContext)

  const OrderPlace = () => {
    toast({
      position: 'top',
      title: 'order Placed Successfully',
      description: 'You will recive a confirmation mail shortly',
      status: 'success',
      duration: 9000,
      isClosable: true,
    })
    navigate("/")
  }

  const goShop = () => {
    navigate("/shop")
  }
  return (
    <div>
      <div className='cart_first'>
        <h1>Checkout</h1>
      </div>
      <div className='cart_second'>
        <div className='input_form'>
          <h1>Billing Details</h1>
          <form action="">
            <div className='input_flex'>
              <div>
                <label htmlFor="">First Name</label>
                <input type="text" placeholder='Enter Your First Name' required />
              </div>
              <div>
                <label htmlFor="">Last Name</label>
                <input type="text" placeholder='Enter Your last Name' required/>
              </div>
            </div>
            <label htmlFor="">Company Name(optional)</label>
            <input type="text" placeholder='Enter Your Company' />
            <label htmlFor="">Country / Region</label>
            <select name="" id="" required>
              <option value="ind">India</option>
            </select>
            <label htmlFor="">Street Address</label>
            <input type="text" placeholder='House No , Street name' required/>
            <input type="text" placeholder='Appartmanet unit etc' />
            <label htmlFor="">Town / City</label>
            <input type="text" placeholder='Enter Your Town' required/>

            <label htmlFor="">state</label>
            <select name="" id="" required>
              <option value="odi">Odisha</option>
              <option value="gu">Gujurat</option>
              <option value="jhs">jharakhand</option>
            </select>

            <label htmlFor="">Mobile / Phone</label>
            <input type="text" placeholder='Enter Mobile no' required/>
            <label htmlFor="">Email Address</label>
            <input type="text" placeholder='Enter Your Email' required/>

            <h1>Additional Information</h1>
            <label htmlFor="">order notes(optional)</label>
            <textarea name="" id="" cols="60" rows="8"></textarea>
          </form>
        </div>
        <div>

        </div>
        <div className="bil_methode">
        <FormControl as='fieldset'>
          <h1 className='payment_head'>Select Payment Method</h1>
          <div className='radio'>
          <RadioGroup defaultValue='Sasuke'>
              <div>
              <Radio value='Sasuke' className='gr'>Cash On Deilvery</Radio>
              <h1>Pay With Cash Upon delivery</h1>
              </div>
              <div>
              <Radio value='Nagato' className='gr'>Paytm </Radio> 
              <h1>The best payment gateway provider in India for e-payment through credit card, debit card,UPI & netbanking. </h1>
              </div>
              <div>
              <Radio value='Itachi' className='gr'>Razorpay</Radio>
              <h1>EMI Available. Pay securely by Credit or Debit card,UPI or Internet Banking through Razorpay.</h1>
              </div>
              <div>
              <Radio value='Sage of the six Paths' className='gr'>Simpl</Radio>
              <h1>Interest Free. Always.</h1>
              </div>
          </RadioGroup>
          </div>
        </FormControl>
        <div className='cart_details my_cart'>
        <h1 className='payment_head2'>Your Order Value</h1>
          <div className='card_cart'>
            <div className='details_flex'>
              <p>Subtotal</p>
              <p>₹ {(alltotal).toFixed(2)}</p>
            </div>
            <Divider />
            <div className='details_flex'>
              <p>Total</p>
              <p>₹ {(alltotal).toFixed(2)}</p>
            </div>
            <Divider />
            <div className='simple_flex'>
              <p>Or 3 interest free payments of ₹{(alltotal*0.50).toFixed(2)} with</p>
              <img width="60px" src="https://www.uboric.com/wp-content/plugins/simpl-pay-in-3-for-woocommerce/public/images/brand.svg" alt="" />
            </div>
          </div>
          <div className='checkout_btn'>
            <button onClick={OrderPlace} >Place Order</button>
          </div> 
          <p className='shooping_cart' onClick={goShop} >Back to Shooping</p> 
        </div>
      </div>
      </div>
    </div>
  )
}

export default Checkout