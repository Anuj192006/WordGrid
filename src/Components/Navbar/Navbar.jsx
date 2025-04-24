import React from 'react'
import { useNavigate,Link } from 'react-router-dom'
import './Navbar.css'
const Navbar = () => {
    const navigate= useNavigate();
    function handleLogout() {
        const user=localStorage.getitem('CurrUser');
        navigate('/');
    }
  return (
    <header className="App-header">
      <h1>
        <Link to="/home" className="nav-brand">WordGrid</Link>
      </h1>
      <nav>
        <ul className="nav-links">
          <li><Link to="/navigator">Home</Link></li>
          <li><Link to="/profile">Profile</Link></li>
          <li><button onClick={handleLogout} className="logout-btn">Logout</button></li>
        </ul>
      </nav>
    </header>
  )
}

export default Navbar
