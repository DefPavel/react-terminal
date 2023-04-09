import { Helmet, HelmetProvider } from 'react-helmet-async';
import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import LoginForm from '../components/login/LoginForm';

const Login = () => {

    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const SignIn = async (e) => {
        e.preventDefault();
        navigate('/home');
    }

    return (
        <div className="container px-6 py-16 mx-auto">

            <LoginForm setLogin={setLogin} setPassword={setPassword} signIn={SignIn} error=''/>
            <HelmetProvider>
                <Helmet>
                    <title>Авторизация</title>
                </Helmet>
            </HelmetProvider>
        </div>
    )
}

export default Login