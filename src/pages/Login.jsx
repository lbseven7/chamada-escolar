import React from 'react';
import Link from 'antd/es/typography/Link';
import { Checkbox } from 'antd';
import logo from '../images/logo01.png';
import {
  user, eyeClosed, lock,
} from '../images/assets';

const container = {
  display: 'flex',
  flexDirection: 'row',
  width: '100%',
  heitght: '100vh',
  fontFamily: 'Helvetica',
};

const containerImage = {
  display: 'flex',
  alignItems: 'center',
  flexDirection: 'column',
  minWidth: '45%',
  minHeight: '100vh',
  background: '#67b0b4',
};

const image = {
  // marginTop: '20%',
  width: '74%',
  borderRadius: '50%',
};

const h1Style = {
  fontSize: '3rem',
  fontWeight: 'bold',
  color: '#87c1c4',
  marginLeft: '20px',
  marginBottom: '20px',
};

const spanStyle = {
  color: 'white',
  fontSize: '1.7rem',
  textAlign: 'center',
  marginTop: '0',
  fontWeight: 'bold',
};

const containerForm = {
  display: 'flex',
  justifyContent: 'center',
  minWidth: '50%',
  alignItems: 'center',
};

const formStyle = {
  display: 'flex',
  flexDirection: 'column',
  gap: '20px',
  width: '50%',
};

const labelStyle = {
  fontSize: '35px',
};

const inputStyle = {
  backgroundColor: '#e8e7e7',
  // padding: '1.5rem',
  // borderRadius: '50px',
  height: '3.5rem',
  // marginTop: '35px',
  marginBottom: '0.5rem',
  fontSize: '1rem',
  width: '100%',
};

const btnStyle = {
  background: '#87c1c4',
  color: 'white',
  fontSize: '2.5rem',
  borderRadius: '50px',
  marginBottom: '0.8rem',
  fontWeight: 'bold',
  marginTop: '3rem',
};

const linksStyle = {
  display: 'flex',
  justifyContent: 'space-between',
  fontSize: '1rem',
  color: '#67b0b4',
  alignItems: 'center',

};

const linkColor = {
  color: '#67b0b4',
  fontSize: '1rem',
};

const checkboxStyle = {
  display: 'flex',
  gap: '1ch',
};

function Login() {
  return (
    <div style={container}>
      <div style={containerImage}>
        <img style={image} src={logo} alt="" />
        <span style={spanStyle}>
          Faça sua chamada em sala de aula
          {' '}
          <br />
          de forma rápida e segura.
        </span>
      </div>

      <div style={containerForm}>
        <form style={formStyle}>
          <h1 style={h1Style}>Login</h1>
          <label
            className="flex h-[3.5rem]"
            style={labelStyle}
            htmlFor="username"
          >
            <div
              className="bg-[#e8e7e7]
              h-[3.5rem]
              flex w-[20%]
              justify-center
              items-center
              rounded-tl-3xl
              rounded-bl-3xl
              "
            >
              <img
                className="w-9 h-9 p-1"
                src={user}
                alt="lock"
              />
            </div>

            <input
              className="
              bg-[#e8e7e7]
              h-[3.5rem]
              flex w-[24%]
              justify-center
              items-center
              rounded-tr-3xl
              rounded-br-3xl
              "
              style={inputStyle}
              type="text"
              id="username"
              aria-label="Username"
              placeholder="Username"
            />
          </label>

          <label
            className="flex h-[3.5rem]"
            style={labelStyle}
            htmlFor="password"
          >
            <div
              className="bg-[#e8e7e7]
              h-[3.5rem]
              flex w-[20%]
              justify-center
              items-center
              rounded-tl-3xl
              rounded-bl-3xl
              "
            >
              <img
                className="w-9 h-9 p-1"
                src={lock}
                alt="lock"
              />
            </div>

            <input
              style={inputStyle}
              type="password"
              id="password"
              aria-label="Password"
              placeholder="Password"
            />
            <button
              className="
              bg-[#e8e7e7]
              h-[3.5rem]
              flex w-[24%]
              justify-center
              items-center
              rounded-tr-3xl
              rounded-br-3xl
              "
              type="button"
            >
              <img className="w-12 h-full" src={eyeClosed} alt="eyeClosed" />
            </button>

          </label>

          <div style={linksStyle}>
            <span style={checkboxStyle}>
              <Checkbox />
              Remember Password
            </span>

            <Link style={linkColor} to="/">Forgot Password?</Link>
          </div>

          <button
            style={btnStyle}
            type="submit"
          >
            Login
          </button>
          <Link className="text-center" to="/">Create an Account? | Sign Up</Link>
        </form>
      </div>
    </div>

  );
}

export default Login;
