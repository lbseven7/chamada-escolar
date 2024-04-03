import { Link } from 'react-router-dom';
import logo from '../../images/logo/logo_redonda.png';
import { user } from '../../images/icons';
import Button from '../Button';

function Header() {
  return (
    <header className="h-[90px] flex w-full justify-between items-center font-bold bg-font-color text-secundary-title px-6 text-center text-lg sm:text-2xl md:text-3xl">
      <img src={logo} alt="logo" className="h-10" />
      <h2 className="">
        Sistema de Chamadas
      </h2>
      <Link to="/editPerfil">
        <Button classname="rounded-full ring-2 ring-secundary-bg h-10 w-10 flex justify-center items-center">
          <img src={user} alt="logo" className="h-8 w-8 rounded-full" />
        </Button>
      </Link>
    </header>
  );
}

export default Header;
