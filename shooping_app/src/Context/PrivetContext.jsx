import { useContext } from "react"
import { Navigate } from "react-router-dom"
import { AuthContext } from "../Context/AuthContext"

export default function PrivetRoute({children})
{
    const {isAuth} = useContext(AuthContext)

    if(!isAuth){
        return <Navigate to="/"/>
    }
    return children
}