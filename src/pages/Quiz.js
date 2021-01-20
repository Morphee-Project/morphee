import React, {Component} from 'react';
import Header from "../components/header"


class Quiz extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showQ1: true,
            showQ2: false,
            showQ3: false
        };

    }

    hideQuestion = event => {

        let questionValue = event.currentTarget.value;
        let questionIndex = event.currentTarget.dataset.question;

        console.log(event.currentTarget.dataset.question);
        console.log(event.currentTarget.value);

        sessionStorage.setItem('resultQuizQuestion' + questionIndex, questionValue);

        this.setState({ showQ1: !this.state.showQ1 });
        if(sessionStorage.getItem('resultQuizQuestion' + questionIndex) === "2") {
            this.setState({ showQ3: !this.state.showQ3 });
        } else {
            this.setState({ showQ2: !this.state.showQ2 });
        }
    };

    hideQuestion2 = event => {

        let questionValue = event.currentTarget.value;
        let questionIndex = event.currentTarget.dataset.question;

        console.log(event.currentTarget.dataset.question);
        console.log(event.currentTarget.value);

        sessionStorage.setItem('resultQuizQuestion' + questionIndex, questionValue);

        this.setState({ showQ2: !this.state.showQ2 });
    };

    hideQuestion3 = event => {

        let questionValue = event.currentTarget.value;
        let questionIndex = event.currentTarget.dataset.question;

        console.log(event.currentTarget.dataset.question);
        console.log(event.currentTarget.value);

        sessionStorage.setItem('resultQuizQuestion' + questionIndex, questionValue);

        this.setState({ showQ3: !this.state.showQ3 });
    };

    render() {

        return (

            <div id="quiz">

                <Header/>

                <div className="container-quiz">
                    {
                        this.state.showQ1 &&
                        <div className="questions question-1">
                            <span className="title">La première question est </span>
                            <div className="choices">
                                <button className="next quiz-response" data-question="1" value="1" onClick={this.hideQuestion}>
                                    <span>Réponse 1</span>
                                </button>
                                <button className="next quiz-response" data-question="1" value="2" onClick={this.hideQuestion}>
                                    <span>Réponse 2</span>
                                </button>
                                <button className="next quiz-response" data-question="1" value="3" onClick={this.hideQuestion}>
                                    <span>Réponse 3</span>
                                </button>
                                <button className="next quiz-response" data-question="1" value="4" onClick={this.hideQuestion}>
                                    <span>Réponse 4</span>
                                </button>
                            </div>
                        </div>
                    }
                    {
                        this.state.showQ2 &&
                        <div className="questions question-1">
                            <span className="title">Et la deuxième question est </span>
                            <div className="choices">
                                <button className="next quiz-response" data-question="2" value="1" onClick={this.hideQuestion2}>
                                    <span>Réponse 1</span>
                                </button>
                                <button className="next quiz-response" data-question="2" value="2" onClick={this.hideQuestion2}>
                                    <span>Réponse 2</span>
                                </button>
                                <button className="next quiz-response" data-question="2" value="3" onClick={this.hideQuestion2}>
                                    <span>Réponse 3</span>
                                </button>
                                <button className="next quiz-response" data-question="2" value="4" onClick={this.hideQuestion2}>
                                    <span>Réponse 4</span>
                                </button>
                            </div>
                        </div>
                    }
                    {
                        this.state.showQ3 &&
                        <div className="questions question-1">
                            <span className="title">Et la deuxième question est (si la première valeur est 2) </span>
                            <div className="choices">
                                <button className="next quiz-response" data-question="2" value="1" onClick={this.hideQuestion3}>
                                    <span>Réponse 1</span>
                                </button>
                                <button className="next quiz-response" data-question="2" value="2" onClick={this.hideQuestion3}>
                                    <span>Réponse 2</span>
                                </button>
                                <button className="next quiz-response" data-question="2" value="3" onClick={this.hideQuestion3}>
                                    <span>Réponse 3</span>
                                </button>
                                <button className="next quiz-response" data-question="2" value="4" onClick={this.hideQuestion3}>
                                    <span>Réponse 4</span>
                                </button>
                            </div>
                        </div>
                    }

                </div>

            </div>
        )
    }
}


export default Quiz;