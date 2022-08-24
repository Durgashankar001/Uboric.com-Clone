import { Box, Divider, ListItem, SimpleGrid, UnorderedList } from '@chakra-ui/react'
import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <div className='main_box'>
      <div className='first_div'>
        <div className='heading'><h2>Want style Ideas and Treats?</h2></div>
        <div className='input'>
          <input type="email" placeholder='Enter Your Email *' required />
          <button colorScheme='blue' size='sm'>
            Subscribe
          </button>
        </div>
      </div>
      <Divider className='wh' />

      <div className='second_div'>
        <div className='img_box'>
          <img src="https://outstripinfotech.com/wpword/razi/wp-content/uploads/2022/08/uboric.png" alt="logo" />
        </div>
        <div className='list_box'>
          <SimpleGrid columns={[2, 1, 4, 4]} spacing='2rem'>
            <Box>
              <h2>SUPPORT</h2>
              <UnorderedList styleType='none' spacing='0.5rem' >
                <ListItem className='ListItam' >About Us</ListItem>
                <ListItem>Contact Us</ListItem>
              </UnorderedList>
            </Box>
            <Box>
            <h2>SHOP</h2>
            <UnorderedList styleType='none' spacing='0.5rem' >
                <ListItem >My Account</ListItem>
              </UnorderedList>
            </Box>
            <Box>
            <h2>COMPANY</h2>
            <UnorderedList styleType='none' spacing='0.5rem' >
                <ListItem >Shipping & Returns</ListItem>
                <ListItem>Privacy Policy</ListItem>
                <ListItem>Terms & Conditions</ListItem>
              </UnorderedList>

            </Box>
            <Box>
            <h2>CONTACT</h2>
            <UnorderedList styleType='none' spacing='0.5rem' >
                <ListItem >Customer Care</ListItem>
                <ListItem>Contact Support Available</ListItem>
                <ListItem>Mon To Sat : 10:00 Am to 6:00 Pm</ListItem>
                <ListItem>E-mail</ListItem>
                <ListItem>uboricllp@gmail.com</ListItem>
                <ListItem>Mobile</ListItem>
                <ListItem>+91 97243 82162</ListItem>
              </UnorderedList>

            </Box>
          </SimpleGrid>
        </div>
      </div>

      <Divider className='wh' />
      <div className='third'>
        <p>© 2019 – 2022 UBORIC. ALL RIGHTS RESERVED.</p>
      </div>
    </div>
  )
}

export default Footer