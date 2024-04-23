import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Header from '../../components/Header';

function Call() {
  const [alunos, setAlunos] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/alunos')
      .then((response) => response.json())
      .then((data) => {
        setAlunos(data);
      })
      .catch((error) => console.error('Erro ao recuperar os dados dos alunos:', error));
  }, []);

  return (
    <>
      <Header />
      <div className="bg-btn-color p-5 mt-36 h-screen w-screen">
        <h2>Lista de Alunos:</h2>
        <ul>
          {alunos && alunos.map((aluno) => (
            <li key={aluno.id}>{aluno.nome}</li>
          ))}
        </ul>
      </div>
      <Link to="/home">
        <button className="bg-btn-color p-5 mt-36" type="submit">
          Voltar para Home
        </button>
      </Link>
    </>
  );
}

export default Call;
