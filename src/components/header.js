import React, {Component} from 'react';
import logo from "../images/logo_morphee.svg";
import { BrowserRouter, Link } from 'react-router-dom'

class Menu extends React.Component {

    render() {
        return(
            <header id="header" className="px-5 py-2">
                <Link to="/home" id="logo">
                    <img src={logo} className="logo" alt="logo" />
                    <h2>Morphee</h2>
                </Link>
                <div className="links">
                    <Link to="/home">Accueil</Link>
                    <Link to="/body">Effet sur le corps</Link>
                    <Link to="/quiz">Quiz</Link>
                    <Link to="/conseils">Conseils</Link>
                </div>
            </header>
        )
    }

}

export default Menu;