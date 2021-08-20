import React from 'react';
import {Doughnut} from "react-chartjs-2";
import Line from "../components/line";
import Header from "../components/header";
import Footer from "../components/footer";
import cloud1 from "../images/cloud1.svg";
import cloud2 from "../images/cloud2.svg";
import cloud3 from "../images/cloud3.svg";

import brain from "../images/homeicons/brain.png";
import coffe from "../images/homeicons/coffee-cup.png";
import allergy from "../images/homeicons/allergy.png";
import noise from "../images/homeicons/noise.png";

const data = {
    labels: ['2010', '2017'],
    datasets: [{
        data: [54, 46],
        backgroundColor: [
            '#46556C',
            '#f2f2f2'
        ],
        hoverBackgroundColor: [
            '#303A43',
            '#E9C2C2'
        ],
        borderColor: 'rgba(0, 0, 0, 0)',
        color: '#303A43'
    }]
};
const data2 = {
    labels: ['Sans médicaments', 'Consomme des médicaments'],
    datasets: [{
        data: [94, 6],
        backgroundColor: [
            '#46556C',
            '#f2f2f2'
        ],
        hoverBackgroundColor: [
            '#303A43',
            '#E9C2C2'
        ],
        borderColor: 'rgba(0, 0, 0, 0)',
        color: '#303A43'
    }]
};

function Home() {

    function handleClick(e){
        e.preventDefault();
        window.open("http://beh.santepubliquefrance.fr/beh/2019/8-9/pdf/2019_8-9.pdf","_blank");
    }

    return (
        <div id="home">
            <Header/>
            <div className="home-content col-12 p-0">

                <div className="home-first-content">
                    <h1>Votre compagnon du sommeil parfait</h1>
                    <h5>Ouvrez les portes pour dormir en utilisant ces conseils simples</h5>
                    <a href="#trouble-sommeil">Découvrir</a>
                </div>
                <img src={cloud1} className="cloud cloud1" alt="cloud1-morphee" />
                <img src={cloud2} className="cloud cloud2" alt="cloud2-morphee" />

                <div id="trouble-sommeil">
                    <h2>LES TROUBLES DU SOMMEIL</h2>
                </div>
                <div className="home-section barline">
                    <p>En 2019, selon une étude menée par Santé publique France, les français dorment en moyenne <strong>6 heures et 42 minutes chaque nuit</strong>. <br/>Pourtant la durée minimale recommandée pour une bonne récupération est de <strong>7 heures pour un adulte en bonne santé</strong>. <br/>Sachant que le temps de sommeil décline de plus en plus, la situation est  jugée «préoccupante» par les scientifiques et cela pourra avoir des conséquences sur la santé globale des français</p>
                    <div className="bar-container">
                        <Line/>
                        <br/>
                    </div>
                    <button onClick={handleClick}>Source: Bulletin épidémiologique hebdomadaire</button>
                </div>

                <div className="home-middle-banner col-12">
                    <div className="banner_items">
                        <h5>Temps moyen par nuit par individu en France</h5>
                        <span>345 minutes</span>
                    </div>
                    <div className="banner_items">
                        <h5>Temps de sommeil minimum dont le corps a besoin</h5>
                        <span>7h</span>
                    </div>
                    <div className="banner_items">
                        <h5>Pourcentage de personnes en carrence de sommeil</h5>
                        <span>34%</span>
                    </div>
                </div>

                <div className="home-section col-12 py-5 d-flex doughnut-section">

                    <p className="small">Évolution (%) de la part de personnes déclarant des symptômes d’insomnie chronique entre 2010 et 2017,  selon le sexe et l’âge. Baromètre de Santé publique France 2010 et 2017</p>

                    <div className="chart-legend">
                        <div className="doughnut-container">
                            <Doughnut data={data} maintainAspectRatio={false}/>
                            <Doughnut data={data2} maintainAspectRatio={false}/>
                        </div>
                    </div>
                    <img src={cloud3} className="cloud cloud2" alt="cloud2-morphee" />
                    <div className="facteurs">
                        <p>Alors que trois Français sur quatre se plaignent de mal dormir, l’insomnie sévère et chronique touche plus de <strong>54 % de la population.</strong><br/>
                        L’insomnie se caractérise par la gêne de la capacité d’endormissement du sujet ou de la continuité de son sommeil. <br/>
                        Les causes de l’insomnie sont multiples mais on distingue plusieurs catégories: </p><br/>
                        <ul>
                        <br/>
                            <li><img src={brain} alt="icon psychologiy"/><p>Les facteurs psychologiques qui représentent la moitié des cas : stress, anxiété ou dépression</p></li>
                        <br/>
                            <li><img src={noise} alt="icon noise"/><p>Les facteurs environnementaux : bruits, luminosité, chaleur, travail de nuit</p></li>
                        <br/>
                            <li><img src={coffe} alt="icon physiologique"/><p>Les facteurs physiologiques : repas trop lourd, prise de caféine</p></li>
                        <br/>
                            <li><img src={allergy} alt="icon pathologiqie"/><p>Les facteurs pathologiques : apnée du sommeil, asthme, allergies</p></li>
                        <br/>
                        </ul>
                        <p>
                        Et ses conséquences peuvent évidemment représenter un lourd fardeau pour la vie de tous les jours: fatigue importante, tendance à somnoler durant la journée, troubles de l’attention et de la mémoire, manque de concentration, maux de tête, nervosité, irritabilité...
                        </p>
                    </div>
                </div>

                <div className="sommeil-monde">
                    <h2>Le sommeil au Japon</h2>
                    <div className="iframe">
                        <iframe width="655" height="368" src="https://www.youtube.com/embed/WdgvxVLkCAY" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                        <p>
                            L'équipe de Morphée s'est intéressée au cas du sommeil et de la vision du sommeil à l'international.
                            Pour cette interview, nous nous sommes penché sur le cas du sommeil au Japon.
                            Ici, un jeune étudiant originaire du Japon nous parle de son expérience et des habitudes du pays en la matière.
                        </p>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    );
}

export default Home;