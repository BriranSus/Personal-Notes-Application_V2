import { useState } from 'react'

function RegisterInput({ onRegister, loading }){
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    async function onSubmitHandler(event) {
        event.preventDefault();

        if (password !== confirmPassword) {
        alert('Password dan konfirmasi password tidak cocok.');
        return;
        }

        await onRegister({ name, email, password });
    }

    return (
        <form onSubmit={onSubmitHandler} className="input-register">
            <label>Name</label>
            <input
                type="text"
                value={name}
                onChange={(event) => setName(event.target.value)}
                required
                disabled={loading}
            />

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

            <label>Confirm Password</label>
            <input
                type="password"
                value={confirmPassword}
                onChange={(event) => setConfirmPassword(event.target.value)}
                required
                disabled={loading}
            />

            <button type="submit" disabled={loading}>
                {loading ? 'Registering...' : 'Register'}
            </button>
        </form>
    );
}

export default RegisterInput