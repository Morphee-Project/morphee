import React, {Component} from 'react';
import logo from "../logo_morphee.png";
import { BrowserRouter, Link } from 'react-router-dom'

class Menu extends React.Component {

    render() {
        return(
            <header id="header" className="px-5 py-2">
                <img src={logo} className="logo" alt="logo" />
                <div className="links">
                    <a href="/home">Accueil</a>
                    <a href="/body">Effet sur le corps</a>
                    <a href="/quiz">Quiz</a>
                    <Link to="/dashboard">Dashboard</Link>
                    <button>Connexion</button>
                </div>
            </header>
        )
    }

}

export default Menu;