import { register } from '../utils/network-data';
import { Link, useNavigate } from 'react-router-dom';
import RegisterInput from '../components/RegisterInput';

function RegisterPage() {
    const navigate = useNavigate();

    async function onRegister({ name, email, password }){
        const { error } = await register({ name, email, password });

        if (!error){
            alert('Registration Successful');
            navigate('/');
        } else {
            alert('Registration Failed');
        }
    }

    return (
        <section className='input-register'>
            <h2>Buat akun baru</h2>
            <RegisterInput register={onRegister} />
            <p>Sudah punya akun? <Link to="/">Login disini</Link></p>
        </section>
    )
}

export default RegisterPage;