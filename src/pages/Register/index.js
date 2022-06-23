import {Button} from '../../components/Button'
import { Input } from '../../components/Input'
import { StyleFormCadastro, StyleRegister } from "./style"
import {Header} from '../../components/Header'
import { useForm} from 'react-hook-form'
import {useNavigate} from 'react-router-dom'
import * as yup from 'yup';
import {yupResolver} from '@hookform/resolvers/yup'
import { api } from '../../services/api'
import { toast } from 'react-toastify'


export const Register = ()=>{
    const schema = yup.object().shape({
        
        name: yup
            .string()
            .min(3, 'Mínimo 3 caracteres')
            .required('Campo obrigatório!'),
        email: yup
            .string()
            .email("Digite um email válido")
            .required('Campo obrigatório'),
        password: yup
            .string()
            .min(8, "Mínimo 8 caracteres")
            .matches(/^(?=.*[a-z])/, "letra minúscula")
            .matches(/^(?=.*[A-Z])/, "letra maiúscula")
            .matches(/^(?=.*[[^'£$%^&*()}{@:'#~?><>,;@|\-=-_+-¬`])/, "caracter especial $*&@#")
            .required("Campo obrigatório!"),
        confirmPassword: yup
            .string()
            .oneOf([yup.ref("password")], "Senhas diferentes")
            .required("Campo obrigatório!"),
        bio: yup
            .string()
            .min(10, "Mínimo 10 caracteres")
            .required("Campo obrigatório"),
        contact: yup
            .string()
            .required("Campo obrigatório")
    })

    const { register, handleSubmit, formState: {errors}} = useForm({
        resolver: yupResolver(schema)
    });

    const navigate = useNavigate()

    const onSubmitFunction = ({name, email, password, confirmPassword, bio, contact, course_module}) => {
        const user = {email, password, name, bio, contact, course_module}
        
        api.post("/users", user)
        .then((response) => {
            console.log(response)
            toast.success("Sucesso ao criar a conta")
            navigate("/Login")
        })
        .catch((err)=> {
            console.log(err)
            toast.error("Erro ao criar conta, email já cadastrado!")
        })
    }
    
    return(
        <StyleRegister>
            <Header page="Cadastro" />
            <StyleFormCadastro>
                <h1>Crie sua conta</h1>
                <span>Rápido e grátis, vamos nessa!</span>
                <form onSubmit={handleSubmit(onSubmitFunction)}>
                    <Input type="text" 
                        label="Nome" 
                        placeholder="Digite seu nome" 
                        register={register} 
                        name="name"
                        error= {errors.name?.message}
                    />
                    <Input type="email" 
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
                    <Input 
                        type="password"
                        label="Confirmação de senha" 
                        placeholder="Digite novamente sua senha" 
                        register = {register}
                        name = "confirmPassword"
                        error= {errors.confirmPassword?.message}

                        />
                    <Input 
                        type="text" 
                        label="Bio" 
                        placeholder="Fale sobre você" 
                        register={register}
                        name= "bio"
                        error= {errors.bio?.message}

                    />
                    <Input 
                        type="contact" 
                        label="Contato" 
                        placeholder="Opção de contato" 
                        register={register}
                        name= "contact"
                        error= {errors.contact?.message}

                    />
                    <div>
                        <span >Selecionar módulo</span>
                        <select {...register("course_module")}>
                            <option>Primeiro módulo (Introdução ao Frontend)</option>
                            <option>Segundo módulo (Frontend Avançado)</option>
                            <option>Terceiro módulo (Introdução ao Backend)</option>
                            <option>Quarto módulo (Backend Avançado)</option>
                        </select>
                    </div>
                    <Button background={"negative"}>Cadastrar</Button>
                </form>
            </StyleFormCadastro>
        </StyleRegister>
    )
}