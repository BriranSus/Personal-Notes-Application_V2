import { useState } from 'react'
import { register } from '../utils/network-data';
import { Link, useNavigate } from 'react-router-dom';
import RegisterInput from '../components/Authentication/RegisterInput';
import Navbar from '../components/Navbar';

function RegisterPage() {
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    async function onRegister({ name, email, password }) {
        setLoading(true);
        const { error } = await register({ name, email, password });
        setLoading(false);

        if (!error) {
            alert('Pendaftaran berhasil! Silakan login.');
            navigate('/');
        } else {
            alert('Pendaftaran gagal. Coba lagi dengan email lain.');
        }
    }

    return (
        <div className="app-container">
        <Navbar />
        <main>
            <section className="input-register">
            <h2>Buat akun baru</h2>
            <RegisterInput onRegister={onRegister} loading={loading} />
            <p>
                Sudah punya akun? <Link to="/">Login di sini</Link>
            </p>
            </section>
        </main>
        </div>
    );
}

export default RegisterPage;