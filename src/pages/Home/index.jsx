import { useNavigate } from 'react-router-dom';
import Button from '../../components/Button';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { editar, megafone } from '../../images/icons';
import { buttonHomeStyle } from '../Login/style';

function Home() {
  const navigate = useNavigate();

  return (
    <main className="border h-auto min-h-screen md:h-screen w-full bg-primary-bg flex flex-col items-center justify-between">
      <Header />
      <section className="w-[90%] h-[500px] flex flex-col items-center justify-around md:flex-row lg:justify-evenly">
        <div className="border-2 border-btn-color border-dotted w-[270px] h-56 flex flex-col items-center justify-start space-y-4 bg-font-color">
          <img src={megafone} alt="imagem" className="h-32" />
          <Button
            classname={buttonHomeStyle}
            onclick={navigate}
            path="/call"
          >
            <span>
              NOVA CHAMADA
            </span>
          </Button>
        </div>

        <div className="border-2 border-btn-color border-dotted w-[270px] h-56 flex flex-col items-center justify-start space-y-4 bg-font-color">
          <img src={editar} alt="imagem" className="h-32" />
          <Button
            classname={buttonHomeStyle}
            onclick={navigate}
            path="/edit"
          >
            <span>
              EDITAR CHAMADA
            </span>
          </Button>
        </div>
      </section>
      <Footer />
    </main>
  );
}

export default Home;
