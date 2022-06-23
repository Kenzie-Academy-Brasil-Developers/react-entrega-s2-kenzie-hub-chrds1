import { useEffect, useState } from "react"
import { Routes, Route } from "react-router-dom"
import {Home} from './pages/Home'
import {Login} from "./pages/Login"
import {Register} from "./pages/Register"

export const MainRoutes = ()=>{
    const [authenticated, setAuthenticated] = useState(false)

    useEffect(()=>{
        const token = localStorage.getItem("@kenziehub:token")

        if(token){
            setAuthenticated(true)
        }
    },[authenticated] )
    return(
    <Routes>
        <Route path="/" element={<Home authenticated={authenticated} setAuthenticated={setAuthenticated}/>}/>
        <Route path="/Login" element={<Login authenticated={authenticated} setAuthenticated={setAuthenticated}/>}/>
        <Route path="/Cadastro" element={<Register authenticated={authenticated}/>}/>
    </Routes>
    )
}