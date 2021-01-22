import React, {Component} from 'react';
import Header from "../components/header"
import {withRouter} from 'react-router-dom';


class Quiz extends Component {
    constructor(props) {
        super(props);
        this.state = {
            questionIndex: 1,
            previousQuestion: false,
            actualQuestion: "showQ1",
            showQ1: true,
            showQ2: false,
            showQ3: false,
            showQ4: false,
            showQ5: false,
            showQ6: false
        };

    }

    showPreviousQuestion = event => {
        let stateNamePrevious = this.state.previousQuestion;
        let stateNameActual = this.state.actualQuestion;
        let indexPrevious = event.currentTarget.dataset.previousIndex;

        document.querySelector(`.progress-${parseInt(indexPrevious) + 1}`).classList.remove('active');

        this.setState({ previousQuestion:  'showQ' + (parseInt(indexPrevious) + 1)});
        this.setState({ actualQuestion:  stateNamePrevious});
        this.setState({ actualQuestion: 'showQ' + (parseInt(indexPrevious))});

        this.setState({ [stateNameActual]: !this.state[stateNameActual] });
        this.setState({ [stateNamePrevious]: !this.state[stateNamePrevious] });
    };

    hideQuestion = event => {

        let questionValue = event.currentTarget.value;
        let questionIndex = event.currentTarget.dataset.question;
        let stateName = 'showQ' + questionIndex;
        let stateNameNext = 'showQ' + (parseInt(questionIndex) + 1);

        sessionStorage.setItem('resultQuizQuestion' + questionIndex, questionValue);

        document.querySelector(`.progress-${parseInt(questionIndex) + 1}`).classList.add('active');

        this.setState({ previousQuestion:  stateName});
        this.setState({ actualQuestion:  stateNameNext});

        this.setState({ [stateName]: !this.state[stateName] });
        //if(sessionStorage.getItem('resultQuizQuestion' + questionIndex) === "2") {
        //    this.setState({ showQ3: !this.state.showQ3 });
        //} else {
        //    this.setState({ showQ2: !this.state.showQ2 });
        //}
        this.setState({ [stateNameNext]: !this.state[stateNameNext] });
    };

    finishQuiz = event => {

        let questionValue = event.currentTarget.value;
        let questionIndex = event.currentTarget.dataset.question;

        sessionStorage.setItem('resultQuizQuestion' + questionIndex, questionValue);

        this.props.history.push('/results');

    };

    //hideQuestion2 = event => {

    //    let questionValue = event.currentTarget.value;
    //    let questionIndex = event.currentTarget.dataset.question;
    //    let stateName = 'showQ' + questionIndex;
    //    let stateNameNext = 'showQ' + (parseInt(questionIndex) + 1);

    //    sessionStorage.setItem('resultQuizQuestion' + questionIndex, questionValue);

    //    this.setState({ previousQuestion:  stateName});
    //    this.setState({ actualQuestion:  stateNameNext});

    //    this.setState({ [stateName]: !this.state[stateName] });
    //    this.setState({ [stateNameNext]: !this.state[stateNameNext] });
    //};

    render() {

        return (

            <div id="quiz">

                <Header/>

                <div className="container-quiz">
                    <ul id="quiz-progressBar">
                        <li className={`progress-1 after active`}></li>
                        <li className={`progress-2 after`} ></li>
                        <li className={`progress-3 after `}></li>
                        <li className={`progress-4 after `}></li>
                        <li className={`progress-5 after `}></li>
                        <li className={`progress-6 `}></li>
                    </ul>
                    {
                        this.state.showQ1 &&
                        <div className="questions question-1">
                            <div className="quiz-previous fake">
                            </div>
                            <span className="title">A quelle heure allez-vous au lit ?</span>
                            <div className="choices">
                                <button className="next quiz-response" data-question="1" value="1" onClick={this.hideQuestion}>
                                    <span>Entre 21h et 22h</span>
                                </button>
                                <button className="next quiz-response" data-question="1" value="2" onClick={this.hideQuestion}>
                                    <span>Entre 22h et 00h</span>
                                </button>
                                <button className="next quiz-response" data-question="1" value="3" onClick={this.hideQuestion}>
                                    <span>Entre 00h et 2h</span>
                                </button>
                                <button className="next quiz-response" data-question="1" value="4" onClick={this.hideQuestion}>
                                    <span>Après 2h</span>
                                </button>
                            </div>
                        </div>
                    }
                    {
                        this.state.showQ2 &&
                        <div className="questions question-2">
                            <div className="quiz-previous">
                                <button className="previous" data-previous-index="1" onClick={this.showPreviousQuestion}>
                                    <img src="https://res-3.cloudinary.com/horaceco/c_crop,dpr_1.0,f_auto,g_center,q_auto/media/wysiwyg/icone/arrow_back.png" alt="question précedente"/>
                                    <span>Question précédente</span>
                                </button>
                            </div>
                            <span className="title">Consultez vous un écran avant de dormir ? Si oui, pendant combien de temps ?</span>
                            <div className="choices">
                                <button className="next quiz-response" data-question="2" value="1" onClick={this.hideQuestion}>
                                    <span>Jamais</span>
                                </button>
                                <button className="next quiz-response" data-question="2" value="2" onClick={this.hideQuestion}>
                                    <span>Entre 10min et 30min</span>
                                </button>
                                <button className="next quiz-response" data-question="2" value="3" onClick={this.hideQuestion}>
                                    <span>Entre 30min et 1h</span>
                                </button>
                                <button className="next quiz-response" data-question="2" value="4" onClick={this.hideQuestion}>
                                    <span>Plus d’une 1h</span>
                                </button>
                            </div>
                        </div>
                    }
                    {
                        this.state.showQ3 &&
                        <div className="questions question-3">
                            <div className="quiz-previous">
                                <button className="previous" data-previous-index="2" onClick={this.showPreviousQuestion}>
                                    <img src="https://res-3.cloudinary.com/horaceco/c_crop,dpr_1.0,f_auto,g_center,q_auto/media/wysiwyg/icone/arrow_back.png" alt="question précedente"/>
                                    <span>Question précédente</span>
                                </button>
                            </div>
                            <span className="title">A quelle heure vous levez-vous ?</span>
                            <div className="choices">
                                <button className="next quiz-response" data-question="3" value="1" onClick={this.hideQuestion}>
                                    <span>Entre 4h et 6h</span>
                                </button>
                                <button className="next quiz-response" data-question="3" value="2" onClick={this.hideQuestion}>
                                    <span>Entre 7h et 8h</span>
                                </button>
                                <button className="next quiz-response" data-question="3" value="3" onClick={this.hideQuestion}>
                                    <span>Entre 9h et 10h</span>
                                </button>
                                <button className="next quiz-response" data-question="3" value="4" onClick={this.hideQuestion}>
                                    <span>Après 11h</span>
                                </button>
                            </div>
                        </div>
                    }
                    {
                        this.state.showQ4 &&
                        <div className="questions question-4">
                            <div className="quiz-previous">
                                <button className="previous" data-previous-index="3" onClick={this.showPreviousQuestion}>
                                    <img src="https://res-3.cloudinary.com/horaceco/c_crop,dpr_1.0,f_auto,g_center,q_auto/media/wysiwyg/icone/arrow_back.png" alt="question précedente"/>
                                    <span>Question précédente</span>
                                </button>
                            </div>
                            <span className="title">Comment jugez vous la qualité de votre sommeil ?</span>
                            <div className="choices">
                                <button className="next quiz-response" data-question="4" value="1" onClick={this.hideQuestion}>
                                    <span>Mauvaise</span>
                                </button>
                                <button className="next quiz-response" data-question="4" value="2" onClick={this.hideQuestion}>
                                    <span>Moyenne</span>
                                </button>
                                <button className="next quiz-response" data-question="4" value="3" onClick={this.hideQuestion}>
                                    <span>Bonne</span>
                                </button>
                                <button className="next quiz-response" data-question="4" value="4" onClick={this.hideQuestion}>
                                    <span>Très bonne</span>
                                </button>
                            </div>
                        </div>
                    }
                    {
                        this.state.showQ5 &&
                        <div className="questions question-5">
                            <div className="quiz-previous">
                                <button className="previous" data-previous-index="4" onClick={this.showPreviousQuestion}>
                                    <img src="https://res-3.cloudinary.com/horaceco/c_crop,dpr_1.0,f_auto,g_center,q_auto/media/wysiwyg/icone/arrow_back.png" alt="question précedente"/>
                                    <span>Question précédente</span>
                                </button>
                            </div>
                            <span className="title">Faites vous des insomnies ? Si oui, à quelle fréquence ?</span>
                            <div className="choices">
                                <button className="next quiz-response" data-question="5" value="1" onClick={this.hideQuestion}>
                                    <span>Non, jamais</span>
                                </button>
                                <button className="next quiz-response" data-question="5" value="2" onClick={this.hideQuestion}>
                                    <span>Rarement</span>
                                </button>
                                <button className="next quiz-response" data-question="5" value="3" onClick={this.hideQuestion}>
                                    <span>Fréquemment</span>
                                </button>
                                <button className="next quiz-response" data-question="5" value="4" onClick={this.hideQuestion}>
                                    <span>Tout le temps</span>
                                </button>
                            </div>
                        </div>
                    }
                    {
                        this.state.showQ6 &&
                        <div className="questions question-6">
                            <div className="quiz-previous">
                                <button className="previous" data-previous-index="5" onClick={this.showPreviousQuestion}>
                                    <img src="https://res-3.cloudinary.com/horaceco/c_crop,dpr_1.0,f_auto,g_center,q_auto/media/wysiwyg/icone/arrow_back.png" alt="question précedente"/>
                                    <span>Question précédente</span>
                                </button>
                            </div>
                            <span className="title">Combien de temps prenez-vous pour vous lever ?</span>
                            <div className="choices">
                                <button className="next quiz-response" data-question="6" value="1" onClick={this.finishQuiz}>
                                    <span>Je me lève immédiatement</span>
                                </button>
                                <button className="next quiz-response" data-question="6" value="2" onClick={this.finishQuiz}>
                                    <span>10 à 15min</span>
                                </button>
                                <button className="next quiz-response" data-question="6" value="3" onClick={this.finishQuiz}>
                                    <span>30min</span>
                                </button>
                                <button className="next quiz-response" data-question="6" value="4" onClick={this.finishQuiz}>
                                    <span>Plus de 30min</span>
                                </button>
                            </div>
                        </div>
                    }
                </div>

            </div>
        )
    }
}


export default withRouter(Quiz);