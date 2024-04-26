/* eslint-disable no-shadow */
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

  useEffect(() => {
    // Salvando os dados da chamada no localStorage sempre que houver alteração
    localStorage.setItem('callData', JSON.stringify(alunos));
  }, [alunos]);

  const handleChange = (alunoId, opcao) => {
    setAlunos((alunos) => alunos.map((aluno) => {
      if (aluno.id === alunoId) {
        const updatedOpcoesChamada = {
          presente: false,
          ausente: false,
          justificado: false,
        };

        // Define a opção selecionada como verdadeira
        updatedOpcoesChamada[opcao] = true;

        return {
          ...aluno,
          opcoesChamada: updatedOpcoesChamada,
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
        <table className="border-collapse border border-bordas- bg-font-color mt-24 mb-24 w-1/3">
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
                <td className="border-bordas- px-4 py-2">
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
        <div>
          <div className="flex flex-wrap gap-6">

            <Link to="/report">
              <button
                type="button"
                className="w-[100%] border bg-btn-color rounded h-[40px] text-font-color py-2 mb-24 p-3"
              >
                FINALIZAR CHAMADA
              </button>
            </Link>

            <Link to="/home">
              <button
                type="button"
                className="w-[100%] border bg-btn-color rounded h-[40px] text-font-color py-2 mb-24 p-3"
              >
                VOLTAR PARA HOME
              </button>
            </Link>
          </div>

        </div>
      </div>
    </>
  );
}

export default Call;
