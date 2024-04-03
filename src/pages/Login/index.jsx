import { useState, useEffect } from 'react';
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
  const {
    register, reset, handleSubmit, formState: { errors },
  } = useForm({
    mode: 'onSubmit',
    defaultValues: {
      email: '',
      senha: '',
      checkbox: false,
    },
  });
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true); // Estado para controlar o carregamento

  useEffect(() => {
    // Simula um processo assíncrono de verificação de autenticação
    setTimeout(() => {
      // Suponha que a verificação de autenticação tenha sido bem-sucedida após 2 segundos
      setLoading(false); // Defina loading como falso para indicar que a verificação foi concluída
    }, 3000);
  }, []);

  const formHandler = (data) => {
    console.log('Form data:', data);
    reset();
  };

  let content;
  if (loading) {
    // Se loading for verdadeiro, renderize o componente Loading
    content = <Loading />;
  } else {
    // Se loading for falso, renderize o conteúdo da tela de login
    content = (
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
            onSubmit={handleSubmit(formHandler)}
          >
            <Input
              placeholder="Digite seu Email"
              type="email"
              width="100%"
              height="40px"
              image={email}
              register={register('email', {
                required: 'O campo Email é obrigatorio',
                pattern: {
                  value: /^[\w-.]+@([\w-]+\.)+(com|br)$/gi,
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
              onclick={inputTypeHandler}
              conditionalImage={imageState ? eye : eyeClosed}
              register={register('senha', {
                required: 'O campo Password é obrigatorio',
                validate: (value) => (value.includes(' ')) ? 'A senha não pode conter espaços vazia.' : true,
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
              onclick={navigate}
              path="/home"
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

  return content;
}

export default Login;
