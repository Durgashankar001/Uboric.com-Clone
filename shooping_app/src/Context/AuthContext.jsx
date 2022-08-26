import React, { useState } from 'react';
const AuthContext = React.createContext()

const AuthContextContainer=({children}) =>{
    const [isAuth,setIsAuth] = useState(false)
    const [user,setUser] = useState("")
    const [cartData,setCartData] = useState([])
    const toggleAuth = () =>{
        setIsAuth(true)
    }
    const saveUser = (name) =>{
        const arr = JSON.parse(localStorage.getItem("user"))
        arr.filter((el)=>{
            if(name==el.email){
                setUser(el.name)
            }
        })
        
    }
    return (
        <AuthContext.Provider value={{isAuth,user,toggleAuth,saveUser,cartData,setCartData}}>
            {children}
        </AuthContext.Provider>
    )
}
export {AuthContext,AuthContextContainer}