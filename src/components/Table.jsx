import React from 'react';

function Table() {
  return (
    <div className="container">
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nome do estudante</th>
            {' '}
            <br />
            <th>Professor, registre as ações desejadas.</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>index + 1</td>
            <td>aluno.nome</td>
            <td />
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Table;
