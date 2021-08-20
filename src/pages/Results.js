import React, {Component} from 'react';
import Header from "../components/header";
import body_woman from "../moon-morphee.png";
import no_phone from "../images/noun_No-Phone.png";
import { Link } from 'react-router-dom'

import BarExample from "../components/bar";
import LineExample from "../components/line"

//import D3chart from "../components/d3Chart";
import BarChart from "../components/chartHourGoToSleep"

class Results extends Component{
    constructor(props) {
        super(props);
        this.state = {
            tempsSommeil: 0,
            titleFirstBlock : '',
            firstBlock : '',
            titleSecondBlock : '',
            secondBlock : '',
            titleThirdBlock : '',
            thirdBlock : '',
            titleFourthBlock: '',
            fourthBlock: ''
        };
    }

    componentDidMount() {

        this.showAnswer();

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
                    console.log('getAllAnswers');
                    console.log(result);
                    console.log(JSON.parse(sessionStorage.getItem('answers')));
                },
                (error) => {
                    console.log('error getAllAnswers')
                    this.setState({
                        isLoaded: true,
                        error
                    });
                }
            )
    }

    showAnswer() {

        var user_answers = JSON.parse(sessionStorage.getItem('answers'));
        console.log('showAnswers');

        var titleFirstBlock = '';
        var contentFirstBlock = '';
        var titleSecondBlock = '';
        var contentSecondtBlock = '';
        var titleThirdBlock = '';
        var contentThirdBlock = '';
        var titleFourthBlock = '';
        var contentFourthBlock = '';

        //question 1
        //à quelle heure vous vous couchez
        if(user_answers[1].value === "3" || user_answers[1].value === "4") {
            titleFirstBlock = 'Comme plus de 25% de français, votre heure de coucher est trop tardive';
            contentFirstBlock = "Nous vous conseillons de vous endormir un peu plus tôt. Pour cela il est conseillé d'éteindre " +
                "toutes sources de lumière (incluant smartphone et ordinateur) et de se coucher avant minuit" +
                " pour profiter d'une nuit la plus reposante possible. En effet, selon les études scientifiques, les " +
                "première heures de la nuit seraient les plus efficientes lors du repos de notre corps.\r Eliminer les " +
                "sources de distraction et se poser au calme en position de dormir est donc la première étape pour passer une bonne nuit"

        } else {
            titleFirstBlock = 'Vous êtes plus de la majorité des français à aller vous coucher avant minuit';
            contentFirstBlock = "Il est important de se coucher et d'éteindre la lumière relativement tôt afin d'avoir " +
                "un sommeil le plus réparateur possible. Les heures les plus reposantes seraient, selon les études scientifiques, " +
                "les premières heures de la nuit donc avant minuit. Il faut donc continuer d'aller au lit le plus tôt possible"
        }

        //question 2
        //utilisation de l'écran avant de dormir
        if(user_answers[2].value === "3" || user_answers[2].value === "4") {
            titleSecondBlock = 'Il est fortement conseillé de ne pas être sur un écran avant de se coucher';
            contentSecondtBlock = "Regarder son téléphone, sa tablette son ordinateur avant de dormir n’est pas recommandé." +
                "En effet, la lumière dégagée par ces appareils ralentit la production de mélatonine (l’hormone du sommeil) et retarde ainsi votre endormissemenet." +
                "Dans le cas où vous les utilisez quand même, il est conseillé d'au moins mettre en place des filtres qui bloquent la lumière bleue émise par ces appareils via les paramètres de votre téléphone\n"

        } else if (user_answers[2].value === "2") {
            titleSecondBlock = "Votre temps d'écran peut encore être diminué";
            contentSecondtBlock = "Vous êtes sur la bonne voie mais vous pouvez encore vous améliorer. Il est conseillé d'arrêter " +
                "les écrans au moins 1 heure avant l'heure du coucher (2 heures pour les enfants) afin que les effets " +
                "néfastes sur l'endormissement s'estompent. Continuer vos efforts et essayez de réduire votre temps " +
                "d'écran le soir: votre corps vous remerciera"
        }

        //question 3
        //quelle heure vous levez-vous ?
        if(user_answers[1].value === "1") {
            var heureCoucher = 4.5
        } else if(user_answers[1].value === "2") {
            var heureCoucher = 3

        } else if(user_answers[1].value === "3") {
            var heureCoucher = 1
        } else {
            var heureCoucher = 0
        }

        if(user_answers[3].value === "1" || user_answers[3].value === "2") {
            var heureReveil = 0;
            (user_answers[3].value === "1") ? heureReveil = 0 : heureReveil = 1.5;
            titleThirdBlock = 'Vous dormez environ ' + (4 + heureCoucher + heureReveil) + ' heures par nuit';
            contentThirdBlock = "6h40 c’est le temps de sommeil moyen des Français (18-75 ans) par jour. " +
                "Sans surprise, ce temps est un peu plus élevé le week-end et les jours de repos (7h26) et un peu plus court " +
                "les jours de semaine ou travaillés (6h32)." +
                "Comme l’a relevé Santé Publique France, il s’agit d’un temps de sommeil historiquement bas. Le chiffre " +
                "est en effet pour la 1ère fois en dessous des 7h minimales habituellement recommandées pour " +
                "avoir une bonne récupération et être en bonne forme. Nous vous recommandons donc de dormir plus"

        } else {
            var heureReveil = 0;
            (user_answers[3].value === "3") ? heureReveil = 3 : heureReveil = 5;
            titleThirdBlock = 'Vous dormez environ ' + (4 + heureCoucher + heureReveil) + ' heures par nuit';
            contentThirdBlock = "Félicitations ! Vous dormez plus que la majorité des français. En effet le temps " +
                "de sommeil moyen des Français (18-75 ans) est de 6h42 par jour. Une moyenne bien insuffisante en comparaison " +
                "du temps idéal pour un adulte en bonne santé: entre 7 et 9h. En sachant que le temps de sommeil décline " +
                "de plus en plus, la situation est jugée «préoccupante» par les scientifiques et cela pourra avoir des " +
                "conséquences sur la santé globale du pays"
        }

        //question 4 et 5
        if((user_answers[4].value === "1" || user_answers[4].value === "2")
            && (user_answers[5].value === "3" || user_answers[5].value === "4")) {

            titleFourthBlock = "Vous jugez votre qualité de sommeil préocupant voir dangeureux pour vous: voici nos conseils";
            contentFourthBlock = "Pour tenter de combattre les insomnies chronique nous vous recommandons de respecter des horaires réguliers de " +
                "sommeil ainsi qu'éviter les siestes en fin de journée. Enfin, abstenez vous au maximum d'utiliser " +
                "des médicaments et préferez toujours des solutions naturelles à base de plantes comme la valériane," +
                " la passiflore, la mélisse ... Pour ce qui est de la qualité de votre sommeil, cela peut venir de l'accumulation " +
                "de stress ou de pression dans votre vie active. Pour régler ça, des techniques de respiration ou " +
                "de méditation peuvent vous aider à vous apaiser avant d'aller vous coucher. Enfin, voici quelques conseils " +
                "et bonnes pratiques générales à respecter pour une bonne nuit:"

        } else if (user_answers[5].value === "3" || user_answers[5].value === "4") {
            titleFourthBlock = "Vous faites régulièrement des insomnies";
            contentFourthBlock = "En France, en 2017, ils étaient 13% des interogés à avoir déclaré " +
                "être sujets à des insomnies. Ce phénomène est donc généralisé et ce chiffre progresse chaque année." +
                "Pour tenter de combattre vos insomnies nous vous recommandons de respecter des horaires réguliers de " +
                "sommeil (pour que corps devienne habitué à ce rythme et s'endorme naturellement). Eviter aussi les siestes " +
                "en fin de journée. Enfin, abstenez vous au maximum d'utiliser des médicaments et préferez toujours des" +
                " solutions naturelles à base de plantes comme la valériane, la passiflore, la mélisse ... De plus voilà " +
                "quelques conseils et bonnes pratiques générales à respecter pour une bonne nuit:"
        } else if((user_answers[4].value === "1" || user_answers[4].value === "2")) {
            titleFourthBlock = "Vous estimez que vous ne dormez pas bien...";
            contentFourthBlock = "Si c'est la qualité de votre sommeil qui vous préoccupe nous recommandons de " +
                "chercher si cela ne vient pas d'un problème de stress ou de pression dans votre vie active. Si " +
                "c'est le cas, des techniques de respiration ou la méditation peuvent vous aider à vous apaiser " +
                "avant d'aller vous coucher. De plus voilà quelques conseils et bonnes pratiques générales à respecter pour passer une bonne nuit: "
        } else {
            titleFourthBlock = "Quelques petits conseils pour finir";
            contentFourthBlock = "Même si vous considérez que vous dormez très bien, voilà " +
                "tout de même quelques conseils et bonnes pratiques qui pourront vous servir à vous ou votre entourage"
        }

        this.setState({
            tempsSommeil: 4 + heureCoucher + heureReveil,
            titleFirstBlock : titleFirstBlock,
            firstBlock: contentFirstBlock,
            titleSecondBlock: titleSecondBlock,
            secondBlock: contentSecondtBlock,
            titleThirdBlock: titleThirdBlock,
            thirdBlock: contentThirdBlock,
            titleFourthBlock: titleFourthBlock,
            fourthBlock: contentFourthBlock,
        });
    }

    createDynamicDiagram() {
        var user_answer = JSON.parse(sessionStorage.getItem('answers'));
        var global_result = {};

        this.getAllAnswer()

    }

    render(){

        const dataHourToSleep = [1, 5, 26, 44, 15, 7, 2, 1];

        return(
        <div id="results">
            <Header/>
            <div className="container-results">
                <div className="top-results">
                    <div className="left-results">
                        <span className="title-results">CONNAISSEZ-VOUS VOTRE SOMMEIL ?</span>
                        <div className="separate"></div>
                        <div className="reveal-results">
                            {this.state.tempsSommeil > 7
                                ? "RESULTATS : Vous semblez dormir suffisament"
                                : "RESULTATS : Vous êtes en manque de sommeil"}
                        </div>
                    </div>
                    <div className="container-icon">
                        <img src={body_woman} className="icon"></img>
                    </div>
                </div>
                
                <div className="content-results">
                    <div className="result result_1">
                        <div className="text">
                            <span className="answer_title">{this.state.titleFirstBlock}</span>
                            <span>{this.state.firstBlock}</span>
                        </div>
                        <div className="chart_first">
                            <BarExample/>
                        </div>

                    </div>

                    <div className="result result_2">
                        <div className="text">
                            <span className="answer_title">{this.state.titleSecondBlock}</span>
                            <span>{this.state.secondBlock}</span>
                        </div>
                        <div className="chiffre">
                            <img src={no_phone} alt=""/>
                        </div>
                    </div>

                    <div className="result result_3">
                        <div className="chiffre">
                                <h5>Temps moyen de sommeil en France</h5>
                                <h3>6h42</h3>
                        </div>
                        <div className="text">
                            <span className="answer_title">{this.state.titleThirdBlock}</span>
                            <span>{this.state.thirdBlock}</span>
                        </div>
                    </div>
                    <div className="chart_third">
                        <LineExample/>
                    </div>

                    <div className="result result_4">
                        <div className="text">
                            <span className="answer_title">{this.state.titleFourthBlock}</span>
                            <span>{this.state.fourthBlock}</span>
                            <ul>
                                <li>Éteindre son téléphone pour ne pas être dérangé</li>
                                <li>Éviter les boissons contenant beaucoup de sucre, caféine ou théine le soir</li>
                                <li>Éviter de consommer de l’alcool et un diner trop copieux </li>
                                <li>Soigner son environnement de sommeil: silencieux, avec une bonne obscurité et confortable</li>
                                <li>Faire du sport (sauf en soirée) pour faciliter l’endormissement</li>
                            </ul>
                        </div>
                    </div>

                </div>

                <div className="retour">
                    <Link to="/home" className="btn">RETOUR</Link>
                </div>

            </div>
        </div>
        )
    }   
}

export default Results;