import { Link } from 'react-router-dom';

function EditPerfil() {
  return (
    <div className="flex justify-center mt-72">
      <h1>AQUI EDITAR PERFIL DO USUÁRIO</h1>
      <Link to="/home">
        <button className="bg-btn-color p-5" type="submit">
          voltar para home
        </button>
      </Link>
    </div>
  );
}

export default EditPerfil;
