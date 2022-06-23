import { Header } from "../../components/Header"
import { Navigate } from "react-router-dom"
import { useState } from "react"
import { ModalTec } from "../../components/ModalTec"
import { Tecnologies } from "../../components/Tecnologies"
import { StyleHome } from "./style"

export const Home = ({authenticated, setAuthenticated})=>{
    const [techs, setTechs] = useState([])
    const [displayModal, setDisplayModal] = useState(false)
    const [type, setType] = useState("")
    const [atualization, setAtualization] = useState(true)
    const user = JSON.parse(localStorage.getItem("@kenziehub:user"))
    
    const handleAddTec = ()=>{
        setType("cadastro")
        setDisplayModal(true)
    }

    if(!authenticated){
        return <Navigate to="/Login" replace/>
    }else{
    return(
        <StyleHome>
            <Header page='Home' authenticated={authenticated} setAuthenticated={setAuthenticated}/>
            <main>
                <section className="header">
                    <div className="apresentation">
                        <h2>Olá, {user?.name}</h2>
                        <span>{user?.course_module}</span>
                    </div>
                    <div className="tecnologies">
                        <h3>Tecnologias</h3>
                        <button onClick={handleAddTec}>+</button>
                    </div>
                </section>
                {displayModal &&<ModalTec 
                    type={type} 
                    setDisplayModal={setDisplayModal} 
                    techs={techs} 
                    setTechs={setTechs}
                    atualization={atualization}
                    setAtualization={setAtualization}
                    />
                }
                <div>
                    <Tecnologies
                        techs={techs} 
                        setTechs={setTechs}
                        atualization={atualization}
                        setAtualization={setAtualization}    
                    />
                </div>
            </main>
        </StyleHome>
    )
    }
}