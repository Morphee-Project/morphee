import React, {Component} from 'react';
import Header from "../components/header";
import body_woman from "../moon-morphee.png";

class Results extends Component{
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        fetch( process.env.REACT_APP_MAIN_SERVER_API + "/quiz", {
            method: 'POST',
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              answers: [
                    {
                        'nb': 0,
                        'value': 1,
                        'ratio': 1
                    },
                    {
                        'nb': 1,
                        'value': 2,
                        'ratio': 1
                    },
                    {
                        'nb': 2,
                        'value': 1,
                        'ratio': 1
                    },
                    {
                        'nb': 3,
                        'value': 1,
                        'ratio': 1
                    },

              ]
            
            })
          })
          .then(res => res.json())
          .then(
            (result) => {
              this.setState({
                isLoaded: true,
                result: result
              });
            },
            // Remarque : il est important de traiter les erreurs ici
            // au lieu d'utiliser un bloc catch(), pour ne pas passer à la trappe
            // des exceptions provenant de réels bugs du composant.
            (error) => {
              this.setState({
                isLoaded: true,
                error
              });
            }
          )
      }

    render(){
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
}

export default Results;