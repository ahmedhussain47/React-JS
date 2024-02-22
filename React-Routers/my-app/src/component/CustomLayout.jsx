import React from 'react'
import { Link, Outlet } from 'react-router-dom'

function CustomLayout() {
    return (
        <>

            <nav className=" navbar navbar-expand-lg navbar-light bg-light">
                <div className="container container-fluid">
                    
                    <Link className="navbar-brand me-auto" to="/">Hussain</Link >
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse flex-grow-0" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item active">
                                <Link className="nav-link" to="/">Home </Link >
                            </li>
                            <li className="nav-item active">
                                <Link className="nav-link" to="/product">Product </Link >
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/gallery">Gallery</Link >
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/signup">Signup</Link >
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

            <Outlet/>

        </>

    )
}

export default CustomLayout