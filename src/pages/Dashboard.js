import React from 'react';
import Header from "../components/header"
import {Bar} from 'react-chartjs-2';

const data = {
    labels: ['Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi', 'Dimanche'],
    datasets: [
        {
            label: 'Qualité du sommeil',
            backgroundColor: 'rgba(242, 240, 206, 0.8)',
            borderColor: 'rgba(242, 240, 206, 1)',
            borderWidth: 1,
            hoverBackgroundColor: 'rgba(242, 240, 206, 0.4)',
            hoverBorderColor: 'rgba(242, 240, 206, 1)',
            data: [65, 59, 80, 81, 56, 55, 40]
        }
    ]
};

const data2 = {
    labels: ['0-12', '12-23', '24-32', '33-45', '46-60', '61-75', '75+'],
    datasets: [
        {
            label: 'Qualité du sommeil',
            backgroundColor: 'rgba(255,99,132,0.2)',
            borderColor: 'rgba(255,99,132,1)',
            borderWidth: 1,
            hoverBackgroundColor: 'rgba(255,99,132,0.4)',
            hoverBorderColor: 'rgba(255,99,132,1)',
            data: [12, 11, 10, 9, 9, 9, 8]
        }
    ]
};

function Dashboard() {
    return (
        <div id="dashboard">

            <Header/>

            <div className="dashboard-content col-12">

                <div className="col-12 m-0 dashboard-first-content">
                    <div className="mb-5">
                        <h2>BONJOUR LEO</h2>
                        <h1>Avez-vous bien dormi ?</h1>
                    </div>

                    <div className="d-flex">
                        <a href="#">Mon sommeil</a>
                        <a href="#">Ajouter une nuit</a>
                        <a href="#">Les tips du jour</a>
                    </div>
                </div>

                <div className="col-12 d-flex dashboard-section">
                    <div className="col-6">
                        <h5 className="mb-4">Votre semaine</h5>
                        <Bar
                            data={data}
                            width={100}
                            height={50}
                        />
                    </div>
                    <div className="col-6 d-flex align-items-center">
                        <button>+ Ajouter une nuit</button>
                        <button className="btn-pink">Voir le mois</button>
                    </div>
                </div>

                <div className="col-12 py-5 dashboard-section gauge-content">
                    <h5 className="mb-4 text-center">Temps moyen pour votre sommeil idéal</h5>
                    <div className="d-block text-center">
                        <div className="gauge mx-4">
                            <span>78%</span>
                            <p>Lorem Ipsum</p>
                        </div>

                        <div className="gauge mx-4">
                            <span>46%</span>
                            <p>Lorem Ipsum</p>
                        </div>
                    </div>
                </div>

                <div className="col-12 my-5 dashboard-section">
                    <h5 className="mb-4">Conseil du professionnel</h5>
                    <div className="col-12 d-flex p-0">
                        <div className="col-4 p-0 d-flex align-items-end">
                            <span className="mb-4">Temps idéal de sommeil par rapport à votre âge</span>
                        </div>
                        <div className="col-8">
                            <Bar
                                data={data2}
                                width={100}
                                height={50}
                            />
                        </div>
                    </div>
                    <p className="my-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ac eros lectus. Maecenas ullamcorper
                        nulla a metus viverra aliquam. Pellentesque habitant morbi tristique senectus et netus et malesuada
                        fames ac turpis egestas.
                    </p>
                </div>

                <div className="col-12 py-5 dashboard-section dashboard-alert">
                    <h5 className="mb-4">Mettre en place une alerte</h5>

                    <button>+ Ajouter une alerte</button>
                </div>

            </div>
        </div>
    );
}

export default Dashboard;