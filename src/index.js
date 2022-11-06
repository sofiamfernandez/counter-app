import React from 'react';
import ReactDOM from 'react-dom';
// import PrimeraApp from './PrimeraApp';
import CounterApp from './CounterApp';
import './index.css';

// const saludo = <h1>Hola Mundo</h1>;
// const value = number; 

const divRoot = document.querySelector('#root');

// ReactDOM.render(<PrimeraApp saludo='Hola, Soy Goku' />, divRoot);

ReactDOM.render( <CounterApp value = {10}/>, divRoot);