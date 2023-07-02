import { useForm } from 'react-hook-form';
import { useNavigate, Link } from 'react-router-dom';
import {
  email, lock, eye, eyeClosed,
} from '../../images/icons';
import logo from '../../images/logo/logo_redonda.png';
import Input from '../../components/Input';
import usePasswordInputToggle from '../../Hooks/usePasswordInputToggle';
import Button from '../../components/Button';

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

  const formHandler = (data) => {
    console.log('Form data:', data);
    reset();
  };
  return (
    <article className="
      flex
      flex-col
      items-center
      w-full
      h-screen
      space-y-4
      md:flex-row
      md:h-screen
      md:space-y-0
    "
    >
      <div className="
        bg-secundary-bg
        w-full
        h-64
        flex
        justify-center
        items-center
        rounded-bl-[70px]
        rounded-br-[70px]
        md:rounded-none
        md:h-full
        md:w-[50%]
      "
      >
        <img
          className="
          w-48
          h-48
          md:h-[200px]
          md:w-[200px]
          "
          src={logo}
          alt="logo"
        />
      </div>
      <div className="
        flex
        text-start
        flex-col
        w-[80%]
        h-[350px]
        space-y-4
        md:items-center
        md:w-[50%]
      "
      >
        <h1 className="
          font-bold
          text-2xl
          text-btn-color
          mt-6
          md:w-auto
          md:mr-[140px]
        "
        >
          Login
        </h1>
        <form
          className="
          h-[90%]
          space-y-4
          flex
          flex-col
          justify-around
          items-center
          "
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
          {errors?.email && <span className="text-error text-sm leading-3">{errors?.email?.message}</span>}

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
          {errors?.senha && <span className="text-error text-sm leading-3">{errors?.senha?.message}</span>}

          <div className="
            flex
            justify-around
            items-center
            "
          >
            <label
              htmlFor="checkbox"
              className="
              text-secundary-bg
              font-bold
              "
            >
              <input
                type="checkbox"
                id="checkbox"
                className="
                  mr-2
                "
                {...register('checkbox')}
              />
              Lembrar Senha
            </label>
            <Link
              to="/forgotPassword"
              className="
               text-sm
               text-secundary-bg
               font-bold
            "
            >
              Esqueceu a Senha?
            </Link>
          </div>

          <Button
            classname="
            bg-btn-color
            text-font-color
            w-full
            h-[50px]
            rounded-full
            text-xl
            font-bold
            "
            onclick={navigate}
            path="/home"
          >
            <span>
              Entrar
            </span>
          </Button>
          <span
            href="www.reflorbrasil.com.br"
            className="
            text-sm
            text-secundary-bg
            font-bold
            text-center
          "
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
