import React, {Component} from 'react';
import Header from "../components/header";
import body_woman from "../moon-morphee.png";
import BarExample from "../components/bar";

import * as d3 from 'd3';
import data from '../components/data';
import D3chart from "../components/d3Chart";

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
              answers: JSON.parse(sessionStorage.getItem('answers'))
            })
          })
          .then(res => res.json())
          .then(
            (result) => {
              this.setState({
                isLoaded: true,
                result: result
              });
                console.log(result);
                console.log(JSON.parse(sessionStorage.getItem('answers')));
                this.createDynamicDiagram();
            },
            (error) => {
              this.setState({
                isLoaded: true,
                error
              });
            }
          )
      }

    getAllAnswer() {
        fetch( process.env.REACT_APP_MAIN_SERVER_API + "/quiz", {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },

        })
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        isLoaded: true,
                        result: result
                    });
                    console.log(result);
                    console.log(JSON.parse(sessionStorage.getItem('answers')))
                },
                (error) => {
                    this.setState({
                        isLoaded: true,
                        error
                    });
                }
            )
    }

    createDynamicDiagram() {
        var user_answer = JSON.parse(sessionStorage.getItem('answers'));
        var global_result = {};

        this.getAllAnswer()

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
                            RESULTATS : Vous êtes en manque de sommeil
                        </div>
                    </div>
                    <div className="container-icon">
                        <img src={body_woman} className="icon"></img>
                    </div>
                </div>
                
                <div className="content-results">
                    Lorem ipsum
                </div>

                <D3chart/>

                <BarExample/>

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