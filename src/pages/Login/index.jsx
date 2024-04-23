import React, { useState, useEffect, useRef } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate, Link } from 'react-router-dom';
import Loading from '../../components/Loading'; // Importe o componente Loading
import {
  email, lock, eye, eyeClosed,
} from '../../images/icons';
import logo from '../../images/logo/logo_redonda.png';
import Input from '../../components/Input';
import usePasswordInputToggle from '../../Hooks/usePasswordInputToggle';
import Button from '../../components/Button';
import {
  container,
  containerImage,
  image,
  containerForm,
  titleStyle,
  formStyle,
  errorStyle,
  wrapperInputLink,
  labelStyle,
  buttonStyle,
  linkStyle,
  spanStyle,
} from './style';

function Login() {
  const { type, imageState, inputTypeHandler } = usePasswordInputToggle();
  const { register, handleSubmit, formState: { errors } } = useForm({
    mode: 'onSubmit',
    defaultValues: {
      email: '',
      senha: '',
      checkbox: false,
    },
  });
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  const formRef = useRef(null);

  const formHandler = async (data) => {
    console.log('Form data:', data);
    // Verificar se não há erros de validação
    if (Object.keys(errors).length === 0) {
      navigate('/home');
    } else {
      console.log('Existem erros de validação:', errors);
    }
  };

  if (loading) {
    return <Loading />;
  }

  return (
    <article className={container}>
      <div className={containerImage}>
        <img
          className={image}
          src={logo}
          alt="logo"
        />
      </div>
      <div className={containerForm}>
        <h1 className={titleStyle}>
          Login
        </h1>
        <form
          className={formStyle}
          ref={formRef}
          onSubmit={handleSubmit((data) => formHandler(data))}
        >
          <Input
            placeholder="Digite seu Email"
            type="email"
            width="100%"
            height="40px"
            image={email}
            onClick={inputTypeHandler}
            register={register('email', {
              required: 'O campo Email é obrigatório',
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: 'E-mail inválido',
              },
            })}
          />
          {errors?.email && <span className={errorStyle}>{errors?.email?.message}</span>}

          <Input
            placeholder="Digite sua Senha"
            type={type}
            width="100%"
            height="40px"
            image={lock}
            onClick={inputTypeHandler}
            conditionalImage={imageState ? eye : eyeClosed}
            register={register('senha', {
              required: 'O campo Senha é obrigatório',
              validate: (value) => !value.includes(' ') || 'A senha não pode conter espaços vazios.',
            })}
          />
          {errors?.senha && <span className={errorStyle}>{errors?.senha?.message}</span>}

          <div className={wrapperInputLink}>
            <label
              htmlFor="checkbox"
              className={labelStyle}
            >
              <input
                type="checkbox"
                id="checkbox"
                className="mr-2"
                {...register('checkbox')}
              />
              Lembrar Senha
            </label>
            <Link
              to="/forgotPassword"
              className={linkStyle}
            >
              Esqueceu a Senha?
            </Link>
          </div>

          <Button
            classname={buttonStyle}
            type="submit"
          >
            <span>
              Entrar
            </span>
          </Button>
          <span
            href="www.reflorbrasil.com.br"
            className={spanStyle}
          >
            Não tem uma conta? |
            {' '}
            <Link to="/signUp">Criar</Link>
          </span>
        </form>
      </div>
    </article>
  );
}

export default Login;
