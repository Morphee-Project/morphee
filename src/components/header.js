import React, {Component} from 'react';
import logo from "../logo.svg";

class Menu extends React.Component {

    render() {
        return(
            <header id="header">
                <img src={logo} className="logo" alt="logo" />
                <div className="links">
                    <a href="#">Accueil</a>
                    <a href="#">Effet sur le corps</a>
                    <button>Connexion</button>
                </div>
            </header>
        )
    }

}

export default Menu;