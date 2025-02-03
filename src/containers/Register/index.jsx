import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { api } from "../../services/api";
import { toast } from "react-toastify";
import { Container, LeftContainer, RightContainer, Title, Form, InputContainer, Link } from "./styles";
import Logo from "../../assets/Logo.png";
import { Button } from "../../components/button";
import { useNavigate } from "react-router-dom";

export function Register() {
  const navigate = useNavigate();
  const schema = yup
    .object({
      name: yup.string().required('Seu nome completo'),
      email: yup.string().email('Digite seu e-mail!').required('O mail é necessario!'),
      password: yup.string().min(6, 'Sua senha precisa ter ao menos 6 caracteres!').required(),
      confirmPassword: yup.string().oneOf([yup.ref('password')], 'As senhas devem ser iguais!')
        .required('Confirme sua senha!')
    })
    .required()
  const { register, handleSubmit, formState: { errors }} =
   useForm({ resolver: yupResolver(schema)})
  const onSubmit = async (data) => { try {
        const { status } = await api.post('/users',
        {
          name: data.name,
          email: data.email,
          password: data.password,
        },
        { validateStatus: () => true },);
      if (status === 200 || status === 201) {
        setTimeout(() => {
          navigate('/Login');
        },2000);
        toast.success('Conta criada com sucesso!');
      } else if (status === 400) {
        toast.error('Email ja cadastrado, faça o login para continuar!');
      } else {
        throw new Error();
      }
    } catch (error)  {
      console.error(error);
      toast.error('😢 Tente novamente!');
    }
  };
  return (
    <Container>
      <LeftContainer>
        <img src={Logo} alt="logo-devburger" />
      </LeftContainer>
      <RightContainer>
        <Title>
          Criar conta!
        </Title>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <InputContainer>

            <label>nome</label>
            <input type="text"{...register("name")} />
            <p>{errors?.name?.message}</p>

          </InputContainer>
          <InputContainer>

            <label>mail</label>
            <input type="email"{...register("email")} />
            <p>{errors?.email?.message}</p>
          </InputContainer>
          <InputContainer>

            <label>senha</label>
            <input type="password" {...register("password")} />
            <p>{errors?.password?.message}</p>

          </InputContainer>
          <InputContainer>

            <label>confirmar senha</label>
            <input type="password" {...register("confirmPassword")} />
            <p>{errors?.confirmPassword?.message}</p>

          </InputContainer>
          <Button type="submit">Criar conta</Button>
        </Form>
        <p>Ja possui conta?<Link go="/Login">Clique aqui.</Link> </p>
      </RightContainer>
    </Container>
  )
}