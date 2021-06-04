import React from 'react';
import {Line} from 'react-chartjs-2';

const data = {
    labels: ['Ensemble', 'Hommes', 'Femmes', '18-24 ans', '25-34 ans', '35-44 ans', '45-54 ans', '65-75 ans'],
    legend : {
        display: true,
        labels: {
            fontColor: 'rgb(255,255,255)'
        }
    },
    datasets: [
        {
            label: 'Sommeil moyens France 2010',
            fill: false,
            lineTension: 0.1,
            backgroundColor: 'rgba(242, 136, 155, 0.6)',
            borderColor: 'rgba(242, 136, 155, 1)',
            borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            pointBorderColor: 'rgba(242, 136, 155, 1)',
            pointBackgroundColor: 'rgba(242, 136, 155, 1)',
            pointBorderWidth: 10,
            pointHoverRadius: 15,
            pointHoverBackgroundColor: 'rgba(242, 136, 155, 1)',
            pointHoverBorderColor: 'rgba(220,220,220,1)',
            pointHoverBorderWidth: 2,
            pointRadius: 1,
            pointHitRadius: 10,
            data: [7.10, 7.03, 7.17, 7.27, 7.13, 7.02, 6.59, 7.10, 7.18]
        },
        {
            label: 'Sommeil moyens France 2017',
            fill: false,
            lineTension: 0.1,
            backgroundColor: 'rgb(70,85,108)',
            borderColor: 'rgb(70,85,108)',
            borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            pointBorderColor: 'rgb(70,85,108)',
            pointBackgroundColor: 'rgb(70,85,108)',
            pointBorderWidth: 10,
            pointHoverRadius: 15,
            pointHoverBackgroundColor: 'rgb(70,85,108)',
            pointHoverBorderColor: 'rgba(220,220,220,1)',
            pointHoverBorderWidth: 2,
            pointRadius: 1,
            pointHitRadius: 10,
            data: [7.09, 7.00, 7.16, 7.15, 7.14, 7.02, 6.52, 7.09, 7.26]
        }
    ]
};

const legend = {
    display: true,
        labels: {
        fontColor: 'rgb(29,29,38)'
    }
}

export default class LineExample extends React.Component{
    render() {
        return (
            <div>
                <Line data={data} legend={legend}/>
            </div>
        );
    }
};