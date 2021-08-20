import React, {Component} from 'react';
import {Bar} from 'react-chartjs-2';

const data = {
    labels: ['20h-21h', '21h-22h', '22h-23h', '23h-0h', '0h-1h', '1h-2h', '2h-3h', '3h-4h'],
    legend : {
        display: true,
        labels: {
            fontColor: 'rgb(255,255,255)'
        }
    },
    y: 1,
    datasets: [
        {
            label: 'L\'heure du coucher des français (en pourcentage)',
            backgroundColor: 'rgba(70,85,108,0.6)',
            borderColor: 'rgba(70,85,108,1)',
            borderWidth: 1,
            hoverBackgroundColor: 'rgba(70,85,108,0.4)',
            hoverBorderColor: 'rgba(70,85,108,1)',
            data: [1, 5, 26, 44, 15, 7, 2, 1],
            z: 1
        }
    ],

};

const legend = {
    display: true,
    labels: {
        fontColor: 'rgb(29,29,38)'
    }
}

const config = {
    options: {
        tooltips: {
            enabled: false,
        },
        legend: {
            display: false
        },
        scales: {
            xAxes: [{display: false}],
            yAxes: [{display: false}],
        }
    }

};

export default class BarExample extends React.Component {
    render() {
        return(
            <div className="d-flex align-items-center">
                <Bar
                    data={data}
                    width={100}
                    height={50}
                    options={config}
                    legend={legend}
                />
            </div>
        )
    }
}

