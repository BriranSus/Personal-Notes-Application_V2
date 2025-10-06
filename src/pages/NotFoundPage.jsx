import Navbar from '../components/Navbar'

function NotFoundPage() {
    return (
        <div className="app-container">
            <Navbar></Navbar>
            <main>
                <h1>404</h1>
                <p>Page not found</p>    
            </main>
        </div>            
    )
}

export default NotFoundPage;