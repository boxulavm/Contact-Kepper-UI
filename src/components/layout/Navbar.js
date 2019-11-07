import React from 'react'
import { Link } from 'react-router-dom'
import './navbar.css'

const Navbar = () => {
    return (
        <>
        <nav className="navbar navbar-expand-md navbar-dark bg-dark py-2 fixed-top mb-5">
            <Link to='/' className="navbar-brand text-primary" ><i className="fas fa-id-card-alt"></i> Contact-Kepper</Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent">
            <span className="navbar-toggler-icon"></span>
            </button>
        
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-5 ml-auto ">
                <li className="nav-item"><span className="nav-link">Hello John Doe!</span></li>
                <li className="nav-item"><a href="#!" className="nav-link"><i className="fas fa-sign-out-alt"></i> Logout</a></li>   
                <li className="nav-item">
                <Link to='/about' className="nav-link" >About</Link>
                </li>  
            </ul>
            </div>
        </nav>

        </>
    )
}

export default Navbar
