import { Container, InputContainer } from "./style"

export const Input = ({label, type, register, name, error, ...rest})=>{
    return(
        <Container>
            <div className="label">{label} {!!error && <span> - {error}</span>}</div>
            <InputContainer>
                <input type={type} {...register(name)} {...rest}/>
            </InputContainer>
        </Container>
    )
}