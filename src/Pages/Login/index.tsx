import React from 'react'
import { Input } from "../../components/Input";
import { Logo } from "../../components/Logo";
import { Container, CreateAnAccount, Main, RememberPassword } from "./styles";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { FieldProps, LoginProps } from "../../types";
import { useAuthContext } from "../../hooks/UseAuth";
import { useNavigate } from 'react-router-dom';


const schema = yup
  .object()
  .shape({
    email: yup
      .string()
      .required("O campo é obrigatório.")
      .email("E-mail inválido, verifique novamente."),
    password: yup.string().required("O campo é obrigatório.").max(5),
  })
  .required();

export const Login = () => {

  const navigation = useNavigate()
  const auth = useAuthContext()
  const {authenticate, loading, token} = auth
  
  
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });



  const loginStart = (data:LoginProps) => {
    authenticate(data.email,data.password)
  };


  React.useEffect(()=>{
    if(token){
      navigation('home')
    }
  },[token,navigation])

  return (
    <Container>
      <Main>
        <section>
          <Logo />
          <form onSubmit={handleSubmit(loginStart)}>
            <div className="wrapper-title">
              <h1>Bem-vindo à AutoLuby</h1>
              <p>Faça o login para acessar sua conta.</p>
            </div>

            <Controller
              control={control}
              render={({ field: { value, onChange, onBlur } }: FieldProps) => (
                <Input
                  type="text"
                  value={value}
                  onChange={onChange}
                  onBlur={onBlur}
                  placeholder="@mail.com"
                  label="Endereço de email"
                  errors={errors}
                />
              )}
              name="email"
              defaultValue=""
            />
            <p>{errors.email?.message}</p>

            <Controller
              control={control}
              render={({ field: { value, onChange, onBlur } }: FieldProps) => (
                <Input
                  type="password"
                  value={value}
                  onChange={onChange}
                  onBlur={onBlur}
                  placeholder="senha"
                  label="Senha"
                  errors={errors}
                />
              )}
              name="password"
              defaultValue=""
            />
            <p>{errors.password?.message}</p>
            <RememberPassword>
              <a href="$">aaaa</a>
              <a href="*">Esqueceu a senha?</a>
            </RememberPassword>
            
            {loading
            ?<button disabled type="submit">Carregar...</button>
            :<button type="submit">Entrar</button>
            }

            <CreateAnAccount>
              <p>Ainda não tem uma conta? <a href="*">Criar Conta</a>
              </p>
            </CreateAnAccount>
          </form>
        </section>
      </Main>
      <div className="bg-car"></div>
    </Container>
  );
};
