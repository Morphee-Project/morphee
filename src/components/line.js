import React from 'react';
import {Line} from 'react-chartjs-2';

const data = {
    labels: ['1960', '1970', '1980', '1990', '2000', '2010', '2020'],
    legend : {
        display: true,
        labels: {
            fontColor: 'rgb(255, 99, 132)'
        }
    },
    datasets: [
        {
            label: 'Temps de sommeil',
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
            data: [80, 81, 72, 69, 64, 60, 57]
        }
    ]
};

const legend = {
    display: true,
        labels: {
        fontColor: 'rgb(255, 99, 132)'
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