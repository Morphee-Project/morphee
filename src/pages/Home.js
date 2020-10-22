import React from 'react';
import logo from "../logo.svg";
import {Doughnut} from "react-chartjs-2";
import BarExample from "../components/bar";
import Header from "../components/header"

const data = {
    datasets: [{
        data: [300, 50, 100],
        backgroundColor: [
            '#FF6384',
            '#36A2EB',
            '#FFCE56'
        ],
        hoverBackgroundColor: [
            '#FF6384',
            '#36A2EB',
            '#FFCE56'
        ]
    }]
};

function Home() {
    return (
        <div id="home">

            <Header/>

            <div className="home-content col-12">

                <div className="col-8 home-first-content">
                    <h1>MORPHEE</h1>
                    <h5>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ac eros lectus. Maecenas ullamcorper
                        nulla a metus viverra aliquam. Pellentesque habitant morbi tristique senectus et netus et malesuada
                        fames ac turpis egestas.
                    </h5>
                </div>

                <h2>LES TROUBLES DU SOMMEIL</h2>

                <div className="home-section col-12 py-5 d-flex flex-column">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ac eros lectus. Maecenas ullamcorper
                        nulla a metus viverra aliquam. Pellentesque habitant morbi tristique senectus et netus et malesuada
                        fames ac turpis egestas. Nulla vel tempor quam. Nullam magna tellus, viverra commodo leo quis,
                        vulputate cursus urna. Duis dictum leo at commodo rhoncus. Nunc pulvinar mauris a nisi sagittis,
                        ac porttitor quam bibendum. Vivamus viverra risus non lacus mattis.
                    </p>
                    <div className="bar-container">
                        <BarExample/>
                    </div>
                </div>

                <div className="homme-middle-banner col-12 my-5 py-4">
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

                <div className="home-section col-12 py-5 d-flex">
                    <div className="doughnut-container col-6">
                        <Doughnut data={data} maintainAspectRatio={false}/>
                    </div>
                    <p className="col-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ac eros lectus. Maecenas ullamcorper
                        nulla a metus viverra aliquam. Pellentesque habitant morbi tristique senectus et netus et malesuada
                        fames ac turpis egestas. Nulla vel tempor quam. Nullam magna tellus, viverra commodo leo quis,
                        vulputate cursus urna. Duis dictum leo at commodo rhoncus. Nunc pulvinar mauris a nisi sagittis,
                        ac porttitor quam bibendum.
                    </p>
                </div>

            </div>
        </div>
    );
}

export default Home;