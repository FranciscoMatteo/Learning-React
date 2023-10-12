import React from 'react';
import CardWidget from '../CartWidget/CartWidget';
import './NavBar.css';

const navbar = () => {
  return (
    <header>
        <h1 className="titulo"> Shibuya<span class="clothes">Clothes</span></h1>

        <nav className="navbar">
            <ul>
                <li> Remeras </li>
                <li> Buzos </li>
                <li> Cargos </li>
            </ul>
        </nav>

        <CardWidget/>

    </header>
  )
}

export default navbar