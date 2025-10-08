import { Link, useNavigate } from 'react-router-dom';
import { getUserLogged } from '../utils/network-data';
import { useEffect, useState } from 'react';
import { FiLogOut } from 'react-icons/fi'; // logout icon

function Navbar() {
    const navigate = useNavigate();
    const [user, setUser] = useState(null);

    useEffect(() => {
        async function fetchUser() {
        const { error, data } = await getUserLogged();
        if (!error) {
            setUser(data);
        }
        }
        fetchUser();
    }, []);

    const token = localStorage.getItem('accessToken');

    function handleLogout() {
        localStorage.removeItem('accessToken');
        navigate('/login');
    }

    return (
        <header>
        <h1><Link to="/">Aplikasi Catatan</Link></h1>

        <div className="navigation">
            <ul>
            <li><Link to="/Archive">Terarsip</Link></li>
            <li>
                {
                    token && (
                        <button onClick={handleLogout} className="button-logout">
                        <FiLogOut style={{ marginRight: '4px' }} />
                        {user ? user.name : ''}
                        </button>
                    )
                }
                
            </li>
            </ul>
        </div>
        </header>
    );
}

export default Navbar;
