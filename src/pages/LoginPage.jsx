import { login } from '../utils/network-data'
import { Link, useNavigate } from 'react-router-dom';
import LoginInput from '../components/Authentication/LoginInput';
import Navbar from '../components/Navbar';
import { useState } from 'react';

function LoginPage({ loginSuccess }) {
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    async function onLogin({ email, password }){
        setLoading(true);
        const { error, data } = await login({ email, password })
        setLoading(false);
        
        if (!error){
            loginSuccess(data);
            navigate('/');
        } else {
            alert('Login failed, please check your email and password.')
        }
    }

    return (
        <div className='app-container'>
            <Navbar/>
            <main>
                <section className='input-login'>
                    <h2>Sudah punya akun? Silahkan Login</h2>
                    <LoginInput onLogin={onLogin} loading={loading}/>
                    <p>Belum punya akun? <Link to="/register">Daftar disini.</Link></p>
                </section>        
            </main>
            
        </div>
        
    )
}

export default LoginPage;