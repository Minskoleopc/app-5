import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Cone from './Cone';
import Cones from './Cones'
import Conec from './Conec';
import CounterC  from './CounterC';
import CounterObj from './CounterObj';
import HookCounterThree from './HookCounterThree';
import HookCounterFour from './HookCounterFour';
import HookCounterFive from './HookCounterFive';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App />
    <Cone></Cone>
    <Cones></Cones>
    <Conec name = "chinmay"></Conec>
    <CounterC></CounterC> */}
    {/* <CounterObj/> */}
    {/* <HookCounterThree/> */}
    <HookCounterFour></HookCounterFour>
    <HookCounterFive></HookCounterFive>
    
  </React.StrictMode>
);
