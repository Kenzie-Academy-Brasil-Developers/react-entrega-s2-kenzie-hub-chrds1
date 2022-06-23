import { Link, Navigate, useNavigate } from 'react-router-dom'
import {Button} from '../../components/Button'
import { Header } from '../../components/Header'
import { Input } from '../../components/Input'
import { StyleFormLogin, StyleLogin } from "./style"
import { useForm } from 'react-hook-form'
import * as yup from 'yup';
import {yupResolver} from '@hookform/resolvers/yup'
import axios from 'axios'
import { toast } from 'react-toastify'
import { api } from '../../services/api'



export const Login = ({authenticated, setAuthenticated})=>{

    const schema = yup.object().shape({
        email: yup
            .string()
            .email("Digite um email válido!")
            .required("Campo obrigatório!"),
        password: yup
            .string()
            .min(8, "Mínimo 8 caracteres")
            .matches(/^(?=.*[a-z])/, "letra minúscula")
            .matches(/^(?=.*[A-Z])/, "letra maiúscula")
            .matches(/^(?=.*[[^'£$%^&*()}{@:'#~?><>,;@|\-=-_+-¬`])/, "caracter especial $*&@#")
            .required("Campo obrigatório!"),
    })

    const {register, handleSubmit, formState: {errors}} = useForm({
        resolver: yupResolver(schema)
    });

    const navigate = useNavigate()

    const onSubmitFunction = ({email, password})=>{
        const user = {email, password}

        api
        .post("/sessions", user)
        .then(res => {
            const {token, user} = res.data
            
            localStorage.setItem("@kenziehub:token", JSON.stringify(token))
            localStorage.setItem("@kenziehub:user", JSON.stringify(user))

            setAuthenticated(true)

            toast.success("Login realizado com sucesso!")
            navigate('/')
        })
        .catch(err => {
            toast.error("Email ou senha inválidos")
        })
    }

    if(authenticated){
        return <Navigate to="/" replace/>
    }
    return(
        <StyleLogin>
            <Header page="Login"/>
            <StyleFormLogin>
                <h1>Login</h1>
                <form onSubmit={handleSubmit(onSubmitFunction)}>
                    <Input 
                        type="email" 
                        label="Email" 
                        placeholder="Digite seu email" 
                        register={register} 
                        name="email"
                        error= {errors.email?.message}
                    />
                    <Input 
                        type="password" 
                        label="Senha" 
                        placeholder="Digite aqui sua senha" 
                        register={register} 
                        name="password"
                        error= {errors.password?.message}
                    />
                    <Button background={"primary"}>Entrar</Button>
                    <span>Ainda não possui uma conta?</span>
                    <Link className='link' to="/Cadastro">
                        <Button>Cadastre-se</Button>
                    </Link>
                </form>
            </StyleFormLogin>
        </StyleLogin>
    )
}