import logo from '../../images/logo/logo_redonda.png';
import Input from '../../components/Input';
import {
  lock, eye, eyeClosed,
} from '../../images/icons';
import usePasswordInputToggle from '../../Hooks/usePasswordInputToggle';
import Button from '../../components/Button';

function ResetPassword() {
  const { type, imageState, inputTypeHandler } = usePasswordInputToggle();
  return (
    <article className="
      flex
      flex-col
      items-center
      w-screen
      max-w-full
      h-auto
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
      h-[380px]
      space-y-6
      md:items-center
      md:w-[50%]
      "
      >
        <h1 className="
          font-bold
          text-3xl
          text-secundary-bg
          mt-6
          md:w-auto
          md:mr-[140px]"
        >
          Mudar Senha
        </h1>
        <form className="
        h-[90%]
        space-y-7
        flex
        flex-col
        justify-center
        items-center
        "
        >
          <Input
            placeholder="Senha antiga"
            type={type}
            width="100%"
            height="40px"
            image={lock}
            onclick={inputTypeHandler}
            conditionalImage={imageState ? eye : eyeClosed}
          />

          <Input
            placeholder="Nova Senha"
            type={type}
            width="100%"
            height="40px"
            image={lock}
            onclick={inputTypeHandler}
            conditionalImage={imageState ? eye : eyeClosed}
          />

          <div className="
            flex
            justify-around
            items-center
            "
          />

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
              Enviar
            </span>
          </Button>

        </form>
      </div>
    </article>
  );
}

export default ResetPassword;
