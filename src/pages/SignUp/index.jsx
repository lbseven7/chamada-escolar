import { useForm } from 'react-hook-form';
import { useNavigate, Link } from 'react-router-dom';
import {
  lock, eye, eyeClosed, user, email,
} from '../../images/icons';

import logo from '../../images/logo/logo_redonda.png';
import usePasswordInputToggle from '../../Hooks/usePasswordInputToggle';
import Button from '../../components/Button';
import Input from '../../components/Input';

function SignUp() {
  const { type, imageState, inputTypeHandler } = usePasswordInputToggle();

  const {
    register, reset, handleSubmit, getValues, formState: { errors },
  } = useForm({
    mode: 'onSubmit',
    defaultValues: {
      nome: '',
      email: '',
      senha: '',
      confirmarSenha: '',
    },
  });

  const navigate = useNavigate();

  const formHandler = (data) => {
    console.log('Form data:', data);
    reset();
  };

  const validateWhitespace = (value) => {
    if (value.includes('  ') || value !== value.trim()) {
      return 'Excesso de espaço vazio.';
    }
    return true;
  };

  return (
    <article className="flex flex-col items-center space-y-8 w-screen max-w-full h-auto mb-10 md:flex-row md:h-screen md:mb-0">
      <div className="h-52 w-full flex justify-center bg-secundary-bg rounded-bl-[80px] rounded-br-[80px] md:rounded-none md:h-full md:w-[50%] items-center">
        <img src={logo} alt="logo" className="w-48 h-48 md:h-[200px] md:w-[200px]" />
      </div>

      <div className="w-[80%] h-[450px] space-y-6 flex flex-col justify-between md:items-center md:w-[50%]">
        <h1 className="text-3xl font-bold text-secundary-bg pl-2 md:w-[70%] md:m-auto lg:w-[40%]">Cadastro</h1>

        <form
          onSubmit={handleSubmit(formHandler)}
          className="text-center h-[90%] flex flex-col justify-around md:w-[70%] lg:w-[40%]"
        >
          <Input
            placeholder="Nome"
            type="text"
            width="100%"
            height="40px"
            image={user}
            register={
              register('nome', {
                required: 'O campo nome é obrigatorio',
                minLength: { value: 2, message: 'o nome precisa ter pelo menos dois caracteres' },
                validate: validateWhitespace,
              })
            }
          />
          {errors?.nome && <span className="text-error text-sm leading-3">{errors?.nome?.message}</span>}
          <Input
            placeholder="Email"
            type="text"
            image={email}
            width="100%"
            height="40px"
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
            placeholder="Senha"
            type={type}
            width="100%"
            image={lock}
            height="40px"
            onclick={inputTypeHandler}
            conditionalImage={imageState ? eye : eyeClosed}
            register={register('senha', {
              required: 'O campo Password é obrigatorio',
              minLength: { value: 8, message: 'a senha precisa ter 8 caracteres' },
              validate: (value) => (value.includes(' ')) ? 'A senha não pode conter espaços vazia.' : true,
            })}
          />
          {errors?.senha && <span className="text-error text-sm leading-3">{errors?.senha?.message}</span>}
          <Input
            placeholder="Confirmar senha"
            type={type}
            width="100%"
            image={lock}
            height="40px"
            onclick={inputTypeHandler}
            conditionalImage={imageState ? eye : eyeClosed}
            register={register('confirmarSenha', {
              required: 'O campo Confirme password é obrigatório',
              validate: (value) => value === getValues('senha') || 'As senhas não correspondem',
            })}
          />
          {errors?.confirmarSenha && <span className="text-error text-sm leading-3">{errors?.confirmarSenha?.message}</span>}
          <Button
            classname="w-full h-[50px] bg-btn-color text-font-color text-2xl font-bold rounded-full"
            onclick={navigate}
            path="/"
          >
            <h2>Cadastrar</h2>
          </Button>
          <span className="text-secundary-bg font-bold text-sm">
            Já tem conta? |
            {' '}
            <Link to="/">Entrar</Link>
          </span>
        </form>

      </div>
    </article>
  );
}

export default SignUp;
