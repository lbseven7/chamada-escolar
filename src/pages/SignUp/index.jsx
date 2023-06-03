// import { Link } from 'react-router-dom';
import Input from '../../components/Input';
import logo from '../../images/logo/logo01.png';
import {
  user, lock, eyeClosed, eye,
} from '../../images/icons';
import usePasswordInputToggle from '../../Hooks/usePasswordInputToggle';
import Button from '../../components/Button';

function SignUp() {
  const { type, imageState, inputTypeHandler } = usePasswordInputToggle();
  return (
    <article className="flex flex-col items-center space-y-8 w-screen h-auto mb-10">
      <div className="h-52 w-screen flex justify-center bg-secundary-bg rounded-bl-[80px] rounded-br-[80px]">
        <img src={logo} alt="logo" className="h-[98%] w-52" />
      </div>
      <div className="w-[80%] h-[450px] space-y-6 flex flex-col justify-between">
        <h1 className="text-3xl font-bold text-secundary-bg pl-2">Sign Up</h1>
        <form className="text-center h-[90%] flex flex-col justify-around">
          <Input
            placeholder="Nome do usuario"
            type="text"
            width="100%"
            height="40px"
            imgage={user}
          />
          <Input
            placeholder="Email"
            type="text"
            width="100%"
            height="40px"
            imgage={user}
          />
          <Input
            placeholder="Password"
            type={type}
            width="100%"
            height="40px"
            imgage={lock}
            conditionalImage={imageState ? eye : eyeClosed}
            onclick={inputTypeHandler}
          />
          <Input
            placeholder="Confirme passord"
            type={type}
            width="100%"
            height="40px"
            imgage={lock}
            conditionalImage={imageState ? eye : eyeClosed}
            onclick={inputTypeHandler}
          />
          <Button
            type="submit"
            classname="border w-full h-[50px] bg-btn-color text-font-color text-2xl font-bold rounded-full"
          >
            <h2>Sign Up</h2>
          </Button>

          {/* <Link to="/#">ola</Link> */}
          <a href="https://www.google.com.br/" className="text-secundary-bg font-bold text-sm">Already Have Account? Sign In</a>
        </form>
      </div>
    </article>
  );
}

export default SignUp;
