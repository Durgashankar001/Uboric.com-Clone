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

const DrawerComponent = ({isOpen,setIsOpen}) => {
    const onClose= () => {
        setIsOpen(false)
    }
  
    return (
      <>
        <Drawer
          isOpen={isOpen}
          placement='right'
          onClose={onClose}
          size='sm'
          className='drawer'
        >
          <DrawerOverlay />
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader>Search Products</DrawerHeader>
  
            <DrawerBody>
              <Input placeholder='Search Product' />
            </DrawerBody>
  
            <DrawerFooter>
              <Button colorScheme='blue'>Search</Button>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
      </>
    )
}

export default DrawerComponent