import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

const clients = [
    { name: 'Mr. Nice', phone: 23432 },
    { name: 'Narco' , phone: 23432},
    { name: 'Bombasto' , phone: 23432},
    { name: 'Celeritas' , phone: 23432},
    { name: 'Magneta' , phone: 23432},
    { name: 'RubberMan' , phone: 23432},
    { name: 'Dynama' , phone: 23432},
    { name: 'Dr IQ' , phone: 23432},
    { name: 'Magma' , phone: 23432},
    { name: 'Tornado', phone: 23432 }
  ];

ReactDOM.render(<App  clients={clients}/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
