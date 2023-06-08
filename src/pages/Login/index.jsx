import { useForm } from 'react-hook-form';
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

  const formHandler = (data) => {
    console.log('Form data:', data);
    reset();
  };
  return (
    <article className="
      flex
      flex-col
      items-center
      w-screen
      h-auto
      space-y-4
    "
    >
      <div className="
        bg-secundary-bg
        w-full
        h-64
        flex
        justify-center
        items-center
      "
      >
        <img
          className="
          w-48
          h-48
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
      "
      >
        <h1 className="
          font-bold
          text-2xl
          text-btn-color
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
            <a
              href="www.reflorbrasil.com.br"
              className="
               text-sm
               text-secundary-bg
               font-bold
            "
            >
              Esqueceu a Senha?

            </a>
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
          >
            <span>
              Entrar
            </span>
          </Button>
          <a
            href="www.reflorbrasil.com.br"
            className="
            text-sm
            text-secundary-bg
            font-bold
            text-center
          "
          >
            Não tem uma conta? | Criar

          </a>
        </form>
      </div>
    </article>
  );
}

export default Login;
