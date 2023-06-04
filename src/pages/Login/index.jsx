import logo from '../../images/logo/logo_redonda.png';
import Input from '../../components/Input';
import {
  email, lock, eye, eyeClosed,
} from '../../images/icons';
import usePasswordInputToggle from '../../Hooks/usePasswordInputToggle';
import Button from '../../components/Button';

function Login() {
  const { type, imageState, inputTypeHandler } = usePasswordInputToggle();
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
        <form className="
        h-[90%]
        space-y-4
        flex
        flex-col
        justify-around
        "
        >
          <Input
            placeholder="Digite seu Email"
            type="email"
            width="100%"
            height="40px"
            image={email}
          />

          <Input
            placeholder="Digite sua Senha"
            type={type}
            width="100%"
            height="40px"
            image={lock}
            onclick={inputTypeHandler}
            conditionalImage={imageState ? eye : eyeClosed}
          />

          <div>
            <label
              htmlFor="checkbox"
              className="
              text-sm
              text-secundary-bg
              font-bold
              "
            >
              Lembrar Senha
              <input type="checkbox" id="checkbox" />
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
