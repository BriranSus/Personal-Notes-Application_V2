import { useState } from 'react'

function LoginInput({ onLogin, loading }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    async function onSubmitHandler(event) {
        event.preventDefault();

        await onLogin({ email, password });
    }

    return (
        <form onSubmit={onSubmitHandler} className="input-login">
        <label>Email</label>
        <input
            type="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            required
            disabled={loading}
        />

        <label>Password</label>
        <input
            type="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            required
            disabled={loading}
        />

        <button type="submit" disabled={loading}>
            {loading ? 'Logging in...' : 'Login'}
        </button>
        </form>
    );
}

export default LoginInput;