import { Link } from 'react-router-dom';

function Call() {
  return (
    <div className="flex justify-center mt-72">
      <h1>AQUI FAZER CHAMADA</h1>
      <div>
        <Link to="/home">
          <button className="bg-btn-color p-5 mt-36" type="submit">
            voltar para home
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Call;
