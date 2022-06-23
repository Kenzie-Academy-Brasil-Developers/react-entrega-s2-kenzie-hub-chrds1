import { Container } from "./style"

export const Button = ({children, background, ...rest})=>{
    
    return(
        <Container type="submit" background={background}  {...rest}>
            {children}
        </Container>
    )
}