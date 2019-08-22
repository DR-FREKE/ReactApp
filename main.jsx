import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';
import Welcome from './scripts/classcomp6.jsx';
import element from './scripts/first.jsx';
import ListComponent from './scripts/ListComponent.jsx';
import MainApp from './scripts/LiftState.jsx';
import Mapper from './scripts/mapper.jsx';
import StateApp from './scripts/dontLiftState.jsx'


// ReactDOM.render( <App/>, document.getElementById('start'));
// ReactDOM.render(element, document.getElementById("start"));
ReactDOM.render(<MainApp/>, document.getElementById("start"));

// var array = [{name:"Rice", price:69.99}, {name:"Beans", price:49.99}];
// ReactDOM.render(<Mapper productArray={array}/>, document.getElementById("start"));
// ReactDOM.render(<Welcome/>, document.getElementById('start'));
ReactDOM.render(<ListComponent/>, document.getElementById('start'));