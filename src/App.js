import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Bar, Doughnut } from 'react-chartjs-2';
import BarExample from '../src/components/bar'

const data = {
    labels: [
        'Red',
        'Green',
        'Yellow'
    ],
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

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Morphee
        </p>
      </header>
        <Doughnut data={data}/>
        <BarExample/>
    </div>
  );
}

export default App;
