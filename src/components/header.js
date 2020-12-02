import React, {Component} from 'react';
import logo from "../logo_morphee.png";
import { BrowserRouter, Link } from 'react-router-dom'

class Menu extends React.Component {

    render() {
        return(
            <header id="header" className="px-5">
                <a href="/home"><img src={logo} className="logo" alt="logo-morphee" /></a>
                <div className="links">
                    <Link to="/home">Accueil</Link>
                    <Link to="/effect">Effets sur le corps</Link>
                    <Link to="/dashboard">Dashboard</Link>
                    <a href="#" className="connexion">Connexion</a>
                </div>
            </header>
        )
    }

}

export default Menu;