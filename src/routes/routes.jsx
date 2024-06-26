import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from '../pages/Login';
import Home from '../pages/Home';
import SignUp from '../pages/SignUp';
import ForgotPassword from '../pages/ForgotPassword';
import ResetPassword from '../pages/ResetPassword';
import Call from '../pages/Call';
import Edit from '../pages/EditCall';
import EditPerfil from '../pages/EditPerfil';
import Loading from '../components/Loading';
import ReportPage from '../pages/ReportPage';

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/call" element={<Call />} />
        <Route path="/edit" element={<Edit />} />
        <Route path="/editPerfil" element={<EditPerfil />} />
        <Route path="/signUp" element={<SignUp />} />
        <Route path="/forgotPassword" element={<ForgotPassword />} />
        <Route path="/resetPassword" element={<ResetPassword />} />
        <Route path="/loading" element={<Loading />} />
        <Route path="/report" element={<ReportPage />} />
      </Routes>
    </BrowserRouter>
  );
}
