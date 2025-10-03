import { Link } from 'react-router-dom'

function Navbar() {
    return (
        <header>
            <h1><Link to="/">Aplikasi Catatan</Link></h1>
            <div className='navigation'>
                <ul>
                    <li><Link to="/Archive">Arsip</Link></li>
                </ul>
            </div>
        </header>
    )
}

export default Navbar;