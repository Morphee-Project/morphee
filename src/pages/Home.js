import React from 'react';
import logo from "../logo.svg";
import {Doughnut} from "react-chartjs-2";
import BarExample from "../components/bar";
import Line from "../components/line";
import Header from "../components/header";
import Footer from "../components/footer";
import cloud1 from "../images/cloud1.svg";
import cloud2 from "../images/cloud2.svg";
import cloud3 from "../images/cloud3.svg";

const data = {
    labels: ['Sans médicaments', 'Consomme des médicaments'],
    datasets: [{
        data: [300, 100],
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
    return (
        <div id="home">
            <Header/>
            <div className="home-content col-12 p-0">

                <div className="col-8 home-first-content">
                    <h1>Votre compagnon du sommeil parfait</h1>
                    <h5>Ouvrez les portes pour dormir en utilisant ces conseils simples</h5>
                    <a href="#trouble-sommeil">Découvrir</a>
                </div>
                <img src={cloud1} className="cloud cloud1" alt="cloud1-morphee" />
                <img src={cloud2} className="cloud cloud2" alt="cloud2-morphee" />

                <div id="trouble-sommeil">
                    <h2>LES TROUBLES DU SOMMEIL</h2>
                </div>
                <div className="home-section col-12 py-5 d-flex">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ac eros lectus. Maecenas ullamcorper
                        nulla a metus viverra aliquam. Pellentesque habitant morbi tristique senectus et netus et malesuada
                        fames ac turpis egestas. Nulla vel tempor quam. Nullam magna tellus, viverra commodo leo quis,
                        vulputate cursus urna. Duis dictum leo at commodo rhoncus. Nunc pulvinar mauris a nisi sagittis,
                        ac porttitor quam bibendum. Vivamus viverra risus non lacus mattis.
                    </p>
                    <div className="bar-container">
                        <Line/>
                    </div>
                </div>

                <div className="home-middle-banner col-12 my-5 py-4">
                    <div className="col-4">
                        <h5>Temps moyen par nuit par individu en France</h5>
                        <span>345 minutes</span>
                    </div>
                    <div className="col-4">
                        <h5>Temps de sommeil minimum dont le corps a besoin</h5>
                        <span>7h</span>
                    </div>
                    <div className="col-4">
                        <h5>Pourcentage de personnes en carrence de sommeil</h5>
                        <span>34%</span>
                    </div>
                </div>

                <div className="home-section col-12 py-5 d-flex doughnut-section">
                    <div className="doughnut-container col-6">
                        <Doughnut data={data} maintainAspectRatio={false}/>
                    </div>
                    <p className="col-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ac eros lectus. Maecenas ullamcorper
                        nulla a metus viverra aliquam. Pellentesque habitant morbi tristique senectus et netus et malesuada
                        fames ac turpis egestas. Nulla vel tempor quam. Nullam magna tellus, viverra commodo leo quis,
                        vulputate cursus urna. Duis dictum leo at commodo rhoncus. Nunc pulvinar mauris a nisi sagittis,
                        ac porttitor quam bibendum.
                    </p>
                    <img src={cloud3} className="cloud cloud2" alt="cloud2-morphee" />
                </div>
            </div>
            <Footer/>
        </div>
    );
}

export default Home;