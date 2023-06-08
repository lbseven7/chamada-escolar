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
        rounded-bl-[70px]
        rounded-br-[70px]
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
        h-[380px]
        space-y-4
      "
      >
        <h1 className="
          font-bold
          text-2xl
          text-btn-color
          mt-6
        "
        >
          Mudar Senha?

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
