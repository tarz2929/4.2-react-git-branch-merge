import React from 'react';
import ReactDOM from 'react-dom';
import HelloStudent from './components/HelloStudent';
import HelloWorld from './components/HelloWorld';
import './index.css';


ReactDOM.render(
  <React.StrictMode>

    <h1>React git merge practice</h1>
    <HelloWorld/>
    <HelloStudent name = "Eboka"/>
    <HelloStudent name = "Preet"/> 
    
  </React.StrictMode>,
  document.getElementById('root')
);




    
  

