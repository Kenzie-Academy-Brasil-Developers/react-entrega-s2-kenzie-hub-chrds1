import { Link} from "react-router-dom"
import { Button } from "../Button"
import { StyleHeader } from "./style"
import { Navigate } from "react-router-dom"


export const Header = ({page, setAuthenticated})=>{
    
    function handleOut (){
        localStorage.removeItem("@kenziehub:token")
        localStorage.removeItem("@kenziehub:user")
        
        setAuthenticated(false)
        return <Navigate to="/Login" replace/>
    }
    
    return(
        <StyleHeader page={page}>
            <h1>Kenzie Hub</h1>
                {
                    page === 'Home'
                    ?
                    <div><Button onClick={handleOut} background="navi">Sair</Button></div>
                    :
                    page === 'Cadastro'?
                    <div><Link to="/Login"><Button background="navi">Voltar</Button></Link></div>
                    :
                    ""
                }
        </StyleHeader>
    )
}