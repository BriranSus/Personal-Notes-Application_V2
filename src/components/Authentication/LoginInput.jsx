function LoginInput() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    function onSubmitHandler(event){
        event.preventDefault();
        login({ email, password });
    }

    return (
        <form onSubmit={onSubmitHandler} className="input-login">
            <label>Email</label>
            <input 
                type="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                required
            />
            <label>Password</label>
            <input 
                type="password"
                value={password} 
                onChange={(event) => setPassword(event.target.value)}
                required
            />
            <button type="submit">
                Login
            </button>
        </form>
    )
}

export default LoginInput;