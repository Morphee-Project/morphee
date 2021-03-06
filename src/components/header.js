import React, {Component} from 'react';
import logo from "../logo_morphee.png";
import { BrowserRouter, Link } from 'react-router-dom'

class Menu extends React.Component {

    render() {
        return(
            <header id="header" className="px-5 py-2">
                <div id="logo">
                    <img src={logo} className="logo" alt="logo" />
                    <h2>Morphee</h2>
                </div>
                <div className="links">
                    <a href="/home">Accueil</a>
                    <a href="/body">Effet sur le corps</a>
                    <a href="/quiz">Quiz</a>
                    <Link to="/effect">Conséquences</Link>
                    <Link to="/dashboard">Dashboard</Link>
                    <a href="#" className="connexion">Connexion</a>
                </div>
            </header>
        )
    }

}

export default Menu;