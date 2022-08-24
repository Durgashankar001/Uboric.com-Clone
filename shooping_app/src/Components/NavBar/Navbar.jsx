import React from 'react'
import { NavLink } from 'react-router-dom'
import { BiSearch } from 'react-icons/bi'
import { CgProfile } from 'react-icons/cg'
import { BsBag } from 'react-icons/bs'
import { FcLike } from 'react-icons/fc'
import './Navbar.css'
import { useState } from 'react'
import DrawerComponent from './Drawer/Drawer'

const links = [
    {
        path: "/",
        title: "Home"
    },
    {
        path: "/aboutus",
        title: "About Us"
    },
    {
        path: "/shop",
        title: "Shop"
    },
    {
        path: "/category",
        title: "Category"
    },
    {
        path: "/contactus",
        title: "Contact Us"
    },
]

const Navbar = () => {
    const [isOpen,setIsOpen] = useState(false)
    const Drawer = () => {
            setIsOpen(true)
            console.log("Durga")
    }
    return (
        <>
         
            <div className='f_bar'>
                <p className='f_text'>FOR ONLINE PAYMENT EXTRA ₹10% DISCOUNT ON ORDERS ABOVE ₹500</p>
            </div>
            <div className="sticky">
                <div>
                    <div className='nav'>
                        <div className="left">
                            <div className='logoImg'>
                                <img src="https://outstripinfotech.com/wpword/razi/wp-content/uploads/2022/08/200x80black.png" alt="logo" />
                            </div>
                        </div>
                        <div className="mid">
                            {
                                links.map((el) => (
                                    <NavLink
                                        className={({ isActive }) => (isActive ? "activeStyle" : "defaultStyle")}
                                        key={el.path} to={el.path}>{el.title}</NavLink>
                                ))
                            }
                        </div>
                        <div className="right">
                            <div className='icon'>
                                <BiSearch className='ic' size={25} onClick={Drawer} />
                                <DrawerComponent isOpen={isOpen} setIsOpen={setIsOpen} className='drawer'/>
                                <CgProfile className='ic' size={25} />
                                <FcLike className='ic' size={25} />
                                <BsBag className='ic' size={25} />
                            </div>
                           
                        </div>
                        
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar