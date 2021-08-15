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
                    <Link to="/home">Accueil</Link>
                    <Link to="/body">Effet sur le corps</Link>
                    <Link to="/quiz">Quiz</Link>
                    <Link to="/effect">Conséquences</Link>
                    <Link to="/dashboard">Dashboard</Link>
                    <Link to="/login" className="connexion">Connexion</Link>
                </div>
            </header>
        )
    }

}

export default Menu;