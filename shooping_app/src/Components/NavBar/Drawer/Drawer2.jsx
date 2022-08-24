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
  import './Drawe.css'

const Drawer2 = ({isOpen,setDrawerOpen}) => {
    const onClose= () => {
        setDrawerOpen(false)
    }
  
    return (
      <>
        <Drawer
          isOpen={isOpen}
          placement='right'
          onClose={onClose}
          size='md'
          className='drawer'
        >
          <DrawerOverlay />
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader><h2 className='head2'>Create Your Account</h2></DrawerHeader>
  
            <DrawerBody>
                <h2 className='head2'>Sign Up</h2>
                <div className='login_input'>
                    <input type="text" placeholder='Enter Your Name'/>
                    <input type="email" placeholder='Enter Your Email'/>
                    <input type="password" placeholder='Enter Your Password'/>
                    <button className='login_btn'>SIGN UP</button>
                </div>
                <h2 className='head2'>Log In</h2>
                <div className='login_input'>
                    <input type="email" placeholder='Enter Your Email'/>
                    <input type="password" placeholder='Enter Your Password'/>
                    <button className='login_btn'>LOG IN</button>
                </div>
            </DrawerBody>
          </DrawerContent>
        </Drawer>
      </>
    )
}

export default Drawer2