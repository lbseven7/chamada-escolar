// import Loading from './components/Loading';
// import SignUp from './pages/SignUp'
// import Login from './pages/Login';
// import ResetPassword from './pages/ResetPassword';
import Call from './pages/Call';

const students = [
  { name: 'Arlisson Nascimento', id: 1 },
  { name: 'Alexsandro Barbosa', id: 2 },
  { name: 'Fulano de Tal', id: 3 },
  // ...
];

function App() {
  return (
    <div>
      {/* <Loading /> */}
      {/* <SignUp /> */}
      {/* <Login /> */}
      {/* <ResetPassword /> */}
      <Call students={students} />
    </div>
  );
}

export default App;
