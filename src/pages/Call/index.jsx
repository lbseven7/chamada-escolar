/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Header from '../../components/Header';

function Call() {
  const [alunos, setAlunos] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/alunos')
      .then((response) => response.json())
      .then((data) => {
        setAlunos(data.map((aluno) => ({
          ...aluno,
          opcoesChamada: {
            presente: false,
            ausente: false,
            justificado: false,
          },
        })));
      })
      .catch((error) => console.error('Erro ao recuperar os dados dos alunos:', error));
  }, []);

  const handleChange = (alunoId, opcao) => {
    setAlunos(alunos.map((aluno) => {
      if (aluno.id === alunoId) {
        return {
          ...aluno,
          opcoesChamada: {
            presente: opcao === 'presente' ? !aluno.opcoesChamada.presente : false,
            ausente: opcao === 'ausente' ? !aluno.opcoesChamada.ausente : false,
            justificado: opcao === 'justificado' ? !aluno.opcoesChamada.justificado : false,
          },
        };
      }
      return aluno;
    }));
  };

  const getClassName = (opcoes) => {
    if (opcoes.presente) {
      return 'text-presente- text-xl'; // Verde para presente
    } if (opcoes.ausente) {
      return 'text-ausente- text-xl'; // Vermelho para ausente
    } if (opcoes.justificado) {
      return 'text-justificado- text-xl'; // Cinza para justificado
    }
    return ''; // Nenhuma opção selecionada
  };

  return (
    <>
      <Header />
      <div className="flex flex-col items-center justify-center bg-secundary-bg">
        <h1 className="text-2xl font-bold mb-4">Lista de Alunos</h1>
        <table className="border-collapse border border-bordas- bg-font-color">
          <thead className="border-bordas-">
            <tr>
              <th className="border border-bordas- px-4 py-4">ID</th>
              <th className="border border-bordas- px-4 py-2">Nome</th>
              <th className="border border-bordas- px-4 py-2">Opções de Chamada</th>
            </tr>
          </thead>
          <tbody>
            {alunos.map((aluno) => (
              <tr key={aluno.id}>
                <td className={`px-4 py-2 ${getClassName(aluno.opcoesChamada)}`}>{aluno.id}</td>
                <td className={` px-8 py-2 ${getClassName(aluno.opcoesChamada)}`}>{aluno.nome}</td>
                <td className="border-bordas- px-4 py-2 ${">
                  <input
                    type="checkbox"
                    id={`presente-${aluno.id}`}
                    className="mr-1"
                    checked={aluno.opcoesChamada.presente}
                    onChange={() => handleChange(aluno.id, 'presente')}
                  />
                  <label htmlFor={`presente-${aluno.id}`} className="mr-4">Presente</label>
                  <input
                    type="checkbox"
                    id={`ausente-${aluno.id}`}
                    className="mr-1"
                    checked={aluno.opcoesChamada.ausente}
                    onChange={() => handleChange(aluno.id, 'ausente')}
                  />
                  <label htmlFor={`ausente-${aluno.id}`} className="mr-4">Ausente</label>
                  <input
                    type="checkbox"
                    id={`justificado-${aluno.id}`}
                    className="mr-1"
                    checked={aluno.opcoesChamada.justificado}
                    onChange={() => handleChange(aluno.id, 'justificado')}
                  />
                  <label htmlFor={`justificado-${aluno.id}`}>Justificado</label>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <Link to="/home">
        <button
          type="button"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4"
        >
          Voltar para Home
        </button>
      </Link>
    </>
  );
}

export default Call;
