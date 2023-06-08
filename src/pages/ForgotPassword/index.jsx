import { useForm } from 'react-hook-form';
import { email } from '../../images/icons';
import Button from '../../components/Button';
import logo from '../../images/logo/logo_redonda.png';
import Input from '../../components/Input';

function ForgotPassword() {
  const {
    register, reset, handleSubmit,
  } = useForm({
    mode: 'onSubmit',
    defaultValues: {
      email: '',
    },
  });

  const formHandler = (data) => {
    console.log('Form data:', data);
    reset();
  };
  return (
    <article className="flex flex-col items-center space-y-11 w-screen max-w-full h-auto mb-10 md:flex-row md:h-screen md:mb-0">
      <div className="h-52 w-full flex justify-center bg-secundary-bg rounded-bl-[80px] rounded-br-[80px] md:rounded-none md:h-full md:w-[50%] items-center">
        <img src={logo} alt="logo" className="h-40 w-40 md:h-[350px] md:w-[350px]" />
      </div>

      <div className="w-[80%] h-[350px] space-y-6 flex flex-col justify-center md:items-center md:w-[50%]">
        <h1 className="text-3xl font-bold text-secundary-bg pl-2 md:w-[70%] md:m-auto lg:w-[100%] lg:text-center">Esqueceu a senha ?</h1>

        <form
          onSubmit={handleSubmit(formHandler)}
          className="text-center h-[60%] flex flex-col justify-around md:w-[70%]"
        >
          <Input
            placeholder="Email"
            type="text"
            image={email}
            width="100%"
            height="40px"
            register={register('email')}
          />
          <Button
            classname="w-full h-[50px] bg-btn-color text-font-color text-2xl font-bold rounded-full"
          >
            <h2>enviar</h2>
          </Button>
        </form>

      </div>
    </article>
  );
}

export default ForgotPassword;
