function RegisterInput({ register }){
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    function onSubmitHandler(event){
        event.preventDefault();
        register({ name, email, password })
    }

    return (
        <form onSubmit={onSubmitHandler} className="input-register">
            <label>Name</label>
            <input 
                type="text"
                value={name}
                onChange={(event) => setName(event.target.value)}
                required
            />

            <label>Email</label>
            <input 
                type="text"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                required
            />

            <label>Password</label>
            <input 
                type="text" 
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                required
            />

            <label>Confirm Password</label>
            <input 
                type="text" 
                value={confirmPassword}
                onChange={(event) => setConfirmPassword(event.target.value)}
                required
            />

            <button type="submit">
                Register
            </button>
        </form>
    )
}