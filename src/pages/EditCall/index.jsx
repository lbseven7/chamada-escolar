import { Link } from 'react-router-dom';

function Edit() {
  return (
    <div className="flex justify-center mt-72">
      <h1>AQUI EDITAR CHAMADA</h1>

      <div>
        <Link to="/home">
          <button className="bg-btn-color p-5" type="submit">
            voltar para home
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Edit;
