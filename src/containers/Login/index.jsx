import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { useNavigate, Link } from "react-router-dom";
import * as yup from "yup";
import { api } from "../../services/api";
import { toast } from "react-toastify";
import { useUser } from "../../hooks/UserContext";


import { Container, 
    LeftContainer, 
    RightContainer,
     Title, 
     Form, 
     InputContainer,
     
 } from "./styles"
import Logo from "../../assets/Logo.png"

import { Button } from "../../components/button"



export function Login() {
  const navigate = useNavigate();
  const {putUserData} = useUser();

    const schema = yup
  .object({
    email: yup.string().email('Digite seu e-mail!').required('o mail é necessario!'),
    password: yup.string().min(6, 'sua senha precisa ter ao menos 6 caracteres!').required(),
  })
  .required()

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  })
  const onSubmit = async(data)=>{
     const {
      data: userData} = await toast.promise(
      api.post('/session',{
      email:data.email,
      password:data.password,
  }),
    { pending: "verificando!",
      success: {       
      render() {
        setTimeout(()=>{
           navigate('/')
          }, 2000);
        return  "Bem vindo(a)!👌";
    },
  },
  error: 'Email ou Senha Incorretos!',

    },
  );

putUserData(userData);
};

    return (
        <Container>
        <LeftContainer>
            <img src={Logo} alt="logo-devburger"/>
        </LeftContainer>
        <RightContainer>
            <Title>
            Olá, seja bem vindo ao <span> Dev Burguer!</span>
            <br />
            Acesse com seu <span> Login e senha.</span>
            </Title>
        
        <Form onSubmit={handleSubmit(onSubmit)}>
            <InputContainer>

            <label>mail</label>
            <input type=  "email"{...register("email")}/>
            <p>{errors?.email?.message}</p>

            </InputContainer>

            <InputContainer>

            <label>senha</label>
            <input type= "password" {...register("password")}/>
            <p>{errors?.password?.message}</p>

            </InputContainer>

            <Button type="submit">Entrar</Button>
        </Form>

        <p>Não possui conta?<Link to="/Cadastro">Clique aqui.</Link> </p>
        </RightContainer>
        </Container>
       
    )
}