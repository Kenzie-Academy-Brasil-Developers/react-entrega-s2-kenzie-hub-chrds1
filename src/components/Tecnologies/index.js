import { useEffect } from "react"
import { api } from "../../services/api"
import { StyleTecnologies } from "./style"

export const Tecnologies = ({ techs, setTechs, atualization, setAtualization})=>{
    const id = JSON.parse(localStorage.getItem("@kenziehub:user")).id

    const userDefault = [
        {
            title: "Exemplo",
            status: "Exemplo"  
        },
        {
            title: "Exemplo",
            status: "Exemplo"  
        }
    ]

    useEffect(()=>{
        if(atualization){
            api
            .get(`/users/${id}`)
            .then(res=>{
                console.log(res)
                setTechs(res.data.techs)} 
            )
            .catch(err=>{
                console.log(err)
                setTechs(userDefault)
            })
        }
        setAtualization(false)
    },[atualization])

    if(techs)
    return(
        <StyleTecnologies>
            {techs?.map((el, index)=> 
                <div key={index} id={id} className="card">
                    <span>{el.title}</span>
                    <span>{el.status}</span>
                </div>
            )}
        </StyleTecnologies>
    )
}