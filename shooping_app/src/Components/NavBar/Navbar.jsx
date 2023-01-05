import React, { useContext } from 'react'
import { Navigate, NavLink, useNavigate } from 'react-router-dom'
import { BiSearch } from 'react-icons/bi'
import { CgProfile } from 'react-icons/cg'
import { BsBag } from 'react-icons/bs'
import { FcLike } from 'react-icons/fc'
import { MdMenu } from 'react-icons/md'
import './Navbar.css'
import { useState } from 'react'
import DrawerComponent from './Drawer/Drawer'
import Drawer2 from './Drawer/Drawer2'
import { AuthContext } from '../../Context/AuthContext'
import { useToast } from '@chakra-ui/react'
import DrawerMenuComponent from './Drawer/Drawer3'
import  logo  from "../../assetes/uboric.logo.png"

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
    const toast = useToast()
    const navigate = useNavigate()
    const { isAuth, user, toggleAuth, saveUser } = useContext(AuthContext)
    const [isOpen, setIsOpen] = useState(false)
    const [drawerOpen, setDrawerOpen] = useState(false)
    const [menu, setMenu] = useState(false)
    const Drawer = () => {
        setIsOpen(true)
    }
    const DrawerMenu = () => {
        setMenu(true)
    }
    const DrawerisOpen = () => {
        setDrawerOpen(true)
    }

    const goCart = () => {
        if (!isAuth) {
            toast({
                position: 'top',
                title: 'Please Login First',
                status: 'error',
                duration: 9000,
                isClosable: true,
            })
        }
        else {
            navigate("/cart")
        }
    }
    return (
        <>

            <div className='f_bar'>
                <p className='f_text'>FOR ONLINE PAYMENT EXTRA ₹10% DISCOUNT ON ORDERS ABOVE ₹500</p>
            </div>
            <div className="sticky">
                <div>
                    <div className='nav'>
                        <div className="left menu_left">
                            <div className='logoImg'>
                                <MdMenu className='menu_side' size={30} onClick={DrawerMenu} />
                                <DrawerMenuComponent isOpen={menu} setMenu={setMenu} />
                            </div>
                        </div>
                        <div className="left">
                            <div className='logoImg'>
                                <img src={logo} alt="logo" />
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
                                <DrawerComponent isOpen={isOpen} setIsOpen={setIsOpen} className='drawer' />
                                <CgProfile className='ic' size={25} onClick={DrawerisOpen} />
                                <Drawer2 isOpen={drawerOpen} setDrawerOpen={setDrawerOpen} />
                                <FcLike className='ic' size={25} />
                                <BsBag className='ic' size={25} onClick={goCart} />
                            </div>

                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar