import React from 'react';
import logo from '../images/logo01.png';

const teste = {
  display: 'flex',
  alignItems: 'center',
  flexDirection: 'column',
  minHeight: '100vh',
  background: '#67b0b4',
};

const image = {
  width: '29%',
  marginTop: '13%',
};

function Loading() {
  return (
    <div style={teste}>
      <img style={image} className="loading" src={logo} alt="Loading" />
    </div>
  );
}

export default Loading;
