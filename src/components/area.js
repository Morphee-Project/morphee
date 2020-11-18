import React, {Component} from 'react';
import {Bar} from 'react-chartjs-2';

new Chart(ctx, {
    data: {
        datasets: [
            {fill: 'origin'},   // 0: fill to 'origin'
            {fill: '-1'},       // 1: fill to dataset 0
            {fill: 1},          // 2: fill to dataset 1
            {fill: false},      // 3: no fill
            {fill: '-2'}        // 4: fill to dataset 2
        ]
    },
    options: {
        plugins: {
            filler: {
                propagate: true
            }
        }
    }
});

export default class Chart extends React.Component {
    render() {
        return(
            <div className="d-flex align-items-center">
                <Bar
                    data={data}
                    width={100}
                    height={50}
                />
                <span className="number">16%</span>
            </div>
        )
    }
}
