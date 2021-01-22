import React, {Component} from 'react';
import Header from "../components/header"
import body_woman from "../moon-morphee.png";


function Results(){
    return(
        <div id="results">
            <Header/>
            <div className="container-results">
                <div className="top-results">
                    <div className="left-results">
                        <span className="title-results">CONNAISSEZ-VOUS VOTRE SOMMEIL ?</span>
                        <div className="separate"></div>
                        <div className="reveal-results">
                            RESULTATS : Vous êtes (VALEUR)
                        </div>
                    </div>
                    <div className="container-icon">
                        <img src={body_woman} className="icon"></img>
                    </div>
                </div>
                
                <div className="content-results">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                    in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                     culpa qui officia deserunt mollit anim id est laborum.
                     Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                    in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                     culpa qui officia deserunt mollit anim id est laborum.
                </div>
                <div className="conseil-results">
                    Selon n% de sujets étudiés, nous vous conseillons  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                </div>
                <div className="retour">
                    <a className="btn">RETOUR</a>
                </div>
                

            </div>
        </div>
        
        
    )
}

export default Results;