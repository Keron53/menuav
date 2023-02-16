import React from 'react'
import { Link } from 'react-router-dom'

export default function Navegacion() {
  return (
    <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">

        <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
        <li className="nav-item active">
            <Link to = "/Inicio" className='nav-link'>
                Incio
            </Link>
        </li>
        <li className="nav-item active">
            <Link to = "/Saludos" className='nav-link'>
                Saludos
            </Link>
        </li>
        <li className="nav-item active">
            <Link to = "/Mision" className='nav-link'>
                Mision
            </Link>
        </li>
        <li className="nav-item active">
            <Link to = "/Vision" className='nav-link'>
                Vision
            </Link>
        </li>
        </ul>
  </div>
</nav>
    </div>
  )
}
