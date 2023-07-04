import React, { useState } from 'react';
import Header from '../../components/Header';

function Call({ students }) {
  const [attendance, setAttendance] = useState({});

  function handleAttendance(studentId, status) {
    setAttendance((prevState) => ({ ...prevState, [studentId]: status }));
  }

  function getStatusColor(status) {
    switch (status) {
      case 'PRESENT':
        return 'text-green-500';
      case 'ABSENT':
        return 'text-red-500';
      case 'JUSTIFIED':
        return 'text-yellow-500';
      default:
        return '';
    }
  }

  return (
    <div className="flex flex-col items-center justify-center">
      <Header />
      {students.map((student) => {
        const colorClass = getStatusColor(attendance[student.id]);

        return (
          <div key={student.id} className="flex items-center justify-between px-4 py-2 border-b border-gray-300">
            <div className={`font-medium ${colorClass}`}>
              <span className={`mr-2 ${attendance[student.id] === 'PRESENT' ? 'text-green-500' : ''}`}>
                {student.id}
              </span>
              {student.name}
            </div>
            <div className="flex">
              <label htmlFor={`attendance-present-${student.id}`} className="flex items-center mr-4">
                <input
                  id={`attendance-present-${student.id}`}
                  type="radio"
                  name={`attendance-${student.id}`}
                  value="PRESENT"
                  onChange={() => handleAttendance(student.id, 'PRESENT')}
                  checked={attendance[student.id] === 'PRESENT'}
                />
                <span className={`ml-1 ${attendance[student.id] === 'PRESENT' ? 'text-green-500' : ''}`}>
                  Presente
                </span>
              </label>
              <label htmlFor={`attendance-absent-${student.id}`} className="flex items-center mr-4">
                <input
                  id={`attendance-absent-${student.id}`}
                  type="radio"
                  name={`attendance-${student.id}`}
                  value="ABSENT"
                  onChange={() => handleAttendance(student.id, 'ABSENT')}
                  checked={attendance[student.id] === 'ABSENT'}
                />
                <span className="ml-1">Ausente</span>
              </label>
              <label htmlFor={`attendance-justified-${student.id}`} className="flex items-center">
                <input
                  id={`attendance-justified-${student.id}`}
                  type="radio"
                  name={`attendance-${student.id}`}
                  value="JUSTIFIED"
                  onChange={() => handleAttendance(student.id, 'JUSTIFIED')}
                  checked={attendance[student.id] === 'JUSTIFIED'}
                />
                <span className="ml-1">Justificado</span>
              </label>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Call;
