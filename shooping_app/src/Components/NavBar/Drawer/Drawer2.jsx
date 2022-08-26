import React, { useContext, useEffect, useState } from 'react'
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
import { useToast } from '@chakra-ui/react'
import './Drawe.css'
import { Link, Navigate, NavLink } from "react-router-dom"
import { checkData, checkDataSignup } from '../../../Utilis/Utilis'
import { AuthContext } from '../../../Context/AuthContext'


const intialFormData = {
  name: "",
  email: "",
  password: ""
}
let arr = []

const intialFormData2 = {
  email: "",
  password: ""
}
let arr2 = [];




const Drawer2 = ({ isOpen, setDrawerOpen }) => {
  const toast = useToast()

  const [data, setData] = useState(intialFormData)
  const [formData, setFormData] = useState([])
  const [data2, setData2] = useState(intialFormData2)

  const { isAuth, user, toggleAuth, saveUser } = useContext(AuthContext)
  useEffect(() => {
    arr = JSON.parse(localStorage.getItem("user")) || []
  }, [])
  useEffect(() => {
    arr2 = JSON.parse(localStorage.getItem("user"))
  }, [])

  const handleChange = (e) => {
    const { name: key, value } = e.target
    setData({
      ...data,
      [key]: value
    })
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    if (data.password.length <= 5) {
      toast({
        position: 'top',
        title: 'Password must be six character long',
        status: 'warning',
        duration: 9000,
        isClosable: true,
      })
      setData(intialFormData)
    }
    else {
      if (checkDataSignup(arr, data) == false) {
        setFormData([...formData, data])
        arr.push(data)
        localStorage.setItem("user", JSON.stringify(arr))
        setData(intialFormData)
        setDrawerOpen(false)
        toast({
          position: 'top',
          title: 'Account created.',
          description: "We've created your account for you.",
          status: 'success',
          duration: 9000,
          isClosable: true,
        })
      }
      else {
        toast({
          position: 'top',
          title: 'Account Already Exists',
          status: 'error',
          duration: 9000,
          isClosable: true,
        })
        setData(intialFormData)
      }
    }


  }
  const handleChange2 = (e) => {
    const { name: key, value } = e.target
    setData2({
      ...data2,
      [key]: value
    })
  }
  const handleSubmit2 = (e) => {
    e.preventDefault()
    if (checkData(arr2, data2) === true) {
      toggleAuth()
      saveUser(data2.email)
      setData2(intialFormData2)
      setDrawerOpen(false)
      toast({
        position: 'top',
        title: 'Login successfull',
        status: 'success',
        duration: 9000,
        isClosable: true,
      })
    } else {
      toast({
        position: 'top',
        title: 'Account Already Exists',
        status: 'error',
        duration: 9000,
        isClosable: true,
      })
      setData2(intialFormData2)
    }
  }



  const onClose = () => {
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
              <form onSubmit={handleSubmit} action="">
                <input type="text" name="name" value={data.name} onChange={handleChange} placeholder='Enter Your Name' required />
                <input type="email" name="email" value={data.email} onChange={handleChange} placeholder='Enter Your Email' required />
                <input type="password" name="password" value={data.password} onChange={handleChange} placeholder='Enter Your Password' required />
                <input className='login_btn' type="submit" value="SIGNUP" />
              </form>
            </div>
            <h2 className='head2'>Log In</h2>
            <div className='login_input'>
              <form onSubmit={handleSubmit2} action="">
                <input type="email" name="email" value={data2.email} onChange={handleChange2} placeholder='Enter Your Email' required />
                <input type="password" name="password" value={data2.password} onChange={handleChange2} placeholder='Enter Your Password' required />
                <input className='login_btn' type="submit" value="LOGIN" />
              </form>
            </div>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  )
}

export default Drawer2