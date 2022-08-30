import React from 'react'
import {
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    Input,
    Button
  } from '@chakra-ui/react'
  import { Divider } from '@chakra-ui/react'
  import './Drawe.css'
import { NavLink, useNavigate } from 'react-router-dom'

const DrawerMenuComponent = ({isOpen,setMenu}) => {
const navigate = useNavigate()

const Home = () => {
  navigate("/")
  onClose()
}
const AboutUs = () => {
  navigate("/aboutus")
  onClose()
}
const Shop = () => {
  navigate("/shop")
  onClose()
}
const Category = () => {
  navigate("/category")
  onClose()
}
const ContactUs = () => {
  navigate("/contactus")
  onClose()
}

    const onClose= () => {
        setMenu(false)
    }
  
    return (
      <>
        <Drawer
          isOpen={isOpen}
          placement='left'
          onClose={onClose}
          size='xs'
          className='drawer'
        >
          <DrawerOverlay />
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerBody>
              <div className='menu_list_side'>
                <h1 onClick={Home}>Home</h1>
                <Divider />
                <h1 onClick={AboutUs}>About Us</h1>
                <Divider />
                <h1 onClick={Shop}>Shop</h1>
                <Divider />
                <h1 onClick={Category}>Category</h1>
                <Divider />
                <h1 onClick={ContactUs}>Contact Us</h1>
                <Divider />
              </div>
            </DrawerBody>
          </DrawerContent>
        </Drawer>
      </>
    )
}

export default DrawerMenuComponent