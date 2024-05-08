/* eslint-disable no-undef */
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Header from '../../components/Header';

function Report() {
  const [alunos, setAlunos] = useState([]);

  const getStatus = (opcoes) => {
    if (opcoes.presente) {
      return 'Presente';
    } if (opcoes.ausente) {
      return 'Ausente';
    } if (opcoes.justificado) {
      return 'Justificado';
    }
    return 'Não foi chamado(a)'; // Caso nenhuma opção esteja selecionada
  };

  useEffect(() => {
    const callData = JSON.parse(localStorage.getItem('callData'));
    if (callData) {
      setAlunos(callData.map((aluno) => ({
        ...aluno,
        status: getStatus(aluno.opcoesChamada),
      })));
    }
  }, []);

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
        <h1 className="mt-12 text-2xl">Relatório de Chamada</h1>
        <table className="border-collapse border border-bordas- bg-font-color mt-24 mb-24 w-1/3">
          <thead className="border-bordas-">
            <tr>
              <th className="border border-bordas- px-4 py-4">ID</th>
              <th className="border border-bordas- px-4 py-2">Nome</th>
              <th className="border border-bordas- px-4 py-2">Status</th>
            </tr>
          </thead>
          <tbody>
            {alunos.map((aluno) => (
              <tr key={aluno.id}>
                <td className={`px-4 py-2 ${getClassName(aluno.opcoesChamada)}`}>{aluno.id}</td>
                <td className={`px-8 py-2 ${getClassName(aluno.opcoesChamada)}`}>{aluno.nome}</td>
                <td className="px-4 py-2">{aluno.status}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className="flex flex-wrap gap-6">

          <Link to="/call">
            <button
              type="button"
              className="w-[100%] border bg-btn-color rounded h-[40px] text-font-color py-2 mb-24 p-3"
            >
              VOLTAR PARA CHAMADA
            </button>
          </Link>

          <button
            type="button"
            className="w-[100%] border bg-btn-color rounded h-[40px] text-font-color py-2 mb-24 p-3"
            onClick={() => window.print()}
          >
            BAIXAR RELATÓRIO
          </button>

        </div>

      </div>
    </>
  );
}

export default Report;
