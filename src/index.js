import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

const clients = [
  {"username":"guillermo","password":"$2a$10$fvL/XdJelTcRj4dx7OkbQu6WLKDedRe3kDpCSSxZxEpld6WsLBmGG","firstName":"Guillermo","lastName":"Rodríguez","address":"asdasdasd","email":"prueba@prueba.com","phone":"654366210"},
  {"username":"jkhkjhk","password":"$2a$10$8wTNCWJX6RqSnQiFxFRVeOg64FC04Hqm9D71i8EzwGEmC1q5hmWHC","firstName":"jkhkjhkjhk","lastName":"jhkjhjkh","address":"hjkhkj@hjkhkj.com","email":"kjhkh@kjhjkash.com","phone":"888877772"},
  {"username":"guillermo1","password":"$2a$10$uQ0f432CvlkCIIzntQTZduegsDgW2SEUteYl2mWk4xuwXyRH//txy","firstName":"Guillermo","lastName":"Rodríguez","address":"asdasdasd","email":"prueba1@prueba.com","phone":"6543662103"},
  {"username":"cllera2","password":"$2a$10$tMnW.0I72NIuxzNCXfon9e0CQmwbo.d.l3ezqQLmt4Ig89hYPvkV6","firstName":"Guillermo","lastName":"Rodríguez","address":"asdasdasd","email":"prueb33@prueba.com","phone":"644432103"},
  {"username":"cllera3","password":"$2a$10$ewQk/soRUUNWvQSttM0uzuUA1.sojRl0nlp/b2cLh.ADJzePfo8E2","firstName":"Guillermo","lastName":"Rodríguez","address":"asdasdasd","email":"pru533@prueba.com","phone":"644435103"},
  {"username":"cllera4","password":"$2a$10$V3EydiBoluy4lQ.erZtj7Ok6NRoo0oCcC5pydobRl2xez2Q.7YPaa","firstName":"Guillermo 1","lastName":"Rodríguez 2","address":"asdasdasd5","email":"p2ru533@prueba.com","phone":"6444111034"},
  {"username":"cllera5","password":"$2a$10$an4vBtcge2/RlkNKYyhQyO2lcZolvzXz1lMMP38J/uM3brhOjFg0O","firstName":"Guillermo","lastName":"Rodríguez","address":"asdasdasd","email":"p2ru3533@prueba.com","phone":"6444113103"},
  {"username":"cllera6","password":"$2a$10$5n3mM02Bjm7OIJelS/1Qmeo95RkUGpcyhAJugsjoHZd.OkXpU/kOG","firstName":"Guillermo","lastName":"Rodríguez","address":"asdasdasd","email":"p2ru35333@prueba.com","phone":"64441313103"}
  ];

ReactDOM.render(<App  clients={clients}/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
