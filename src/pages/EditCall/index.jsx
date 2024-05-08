import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Header from '../../components/Header';

function Edit() {
  const [alunos, setAlunos] = useState([]);

  useEffect(() => {
    const callData = JSON.parse(localStorage.getItem('callData'));
    if (callData) {
      setAlunos(callData);
    }
  }, []);

  const handleChange = (alunoId, fieldName, value) => {
    setAlunos((prevAlunos) => prevAlunos.map((aluno) => aluno.id === alunoId ? {
      ...aluno,
      opcoesChamada:
            { ...aluno.opcoesChamada, [fieldName]: value },
    } : aluno));
  };

  const saveChanges = () => {
    localStorage.setItem('callData', JSON.stringify(alunos));
    // eslint-disable-next-line no-alert
    alert('Alterações salvas com sucesso!');
  };

  return (
    <>
      <Header />
      <div className="flex justify-center mt-72 text-center">
        <h1>AQUI EDITAR CHAMADA</h1>

        <div>
          <h2>Lista de Alunos</h2>
          <ul>
            {alunos.map((aluno) => (
              <li key={aluno.id}>
                Nome:
                {' '}
                {aluno.nome}
                , Presente:
                {' '}
                <input
                  type="checkbox"
                  checked={aluno.opcoesChamada.presente}
                  onChange={(e) => handleChange(aluno.id, 'presente', e.target.checked)}
                />
                , Ausente:
                {' '}
                <input
                  type="checkbox"
                  checked={aluno.opcoesChamada.ausente}
                  onChange={(e) => handleChange(aluno.id, 'ausente', e.target.checked)}
                />
                , Justificado:
                {' '}
                <input
                  type="checkbox"
                  checked={aluno.opcoesChamada.justificado}
                  onChange={(e) => handleChange(aluno.id, 'justificado', e.target.checked)}
                />
              </li>
            ))}
          </ul>
        </div>

        <div>

          <Link to="/home">
            <button type="button" className="bg-btn-color p-5 mt-36 mr-24" onClick={saveChanges}>
              Salvar Alterações
            </button>
            <button type="button" className="bg-btn-color p-5 mt-36 mr-24">
              Voltar para Home
            </button>
          </Link>
        </div>
      </div>
    </>
  );
}

export default Edit;
