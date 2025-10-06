import { login } from '../utils/network-data'

function LoginPage({ loginSuccess }) {
    async function onLogin({ email, password }){
        const { error, data } = await login({ email, password })
        
        if (!error){
            loginSuccess(data);
        }
    }

    return (
        <section className='input-login'>
            <h2>Sudah punya akun? Silahkan Login</h2>
            <LoginInput login={onLogin}/>
            <p>Belum punya akun? <Link to="/register">Daftar disini.</Link></p>
        </section>
    )
}

export default LoginPage;