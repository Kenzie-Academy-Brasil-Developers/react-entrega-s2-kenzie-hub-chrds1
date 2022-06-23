import { Input } from "../Input"
import { Container, StyleModalTec } from "./style"
import { useForm } from "react-hook-form";
import * as yup from 'yup';
import {yupResolver} from '@hookform/resolvers/yup'
import { toast } from 'react-toastify'
import { Button } from "../Button";
import { api } from "../../services/api";

export const ModalTec = ({type, setDisplayModal, techs, setTechs, atualization, setAtualization}) =>{

    const schema = yup.object().shape({
        title: yup
            .string()
            .required("Digite uma tecnologia!"),
        status: yup
            .string()
            .required("Campo obrigatório!"),
    })

    const {register, handleSubmit, formState: {errors}} = useForm({
        resolver: yupResolver(schema)
    });

    const onSubmitCadastro = ({ title, status })=>{
        const newTech = {title, status}
        const token = JSON.parse(localStorage.getItem("@kenziehub:token"))

        if(token){
            api
            .post("/users/techs", newTech,{
                headers: {Authorization: `Bearer ${token}`},
            })
            .then(res=>{
                toast.success("Tecnologia criada com sucesso!")
                setAtualization(true)
            })
            .catch(err => {
                console.log(err)
                toast.error("Tecnologia já cadastrada")
            })
        }
    }

    const closeModal =()=>{
        setDisplayModal(false)
    }

    if(type === "cadastro"){
    return(
        <Container>
            <StyleModalTec >
                <div className="header-modal">
                    <span>Tecnologias detalhadas</span>
                    <button onClick={closeModal}>X</button>
                </div>
                <form onSubmit={handleSubmit(onSubmitCadastro)}>
                    <Input 
                        label="Nome" 
                        type="text"
                        placeholder="Digite a tecnologia" 
                        register={register} 
                        name="title" 
                        error= {errors.title?.message}
                    />
                    <select {...register("status")}>
                        <option>Iniciante</option>
                        <option>Intermediário</option>
                        <option>Avançado</option>
                    </select>
                    <Button background={"primary"}>Cadastrar tecnologia</Button>
                </form>
            </StyleModalTec>
        </Container>
        )
    }
}