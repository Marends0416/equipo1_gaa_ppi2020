import React from "react";
import ReactDOM from "react-dom";
import Usuario from './Usuario';
import Consejos2 from './Consejos2';
import Preguntas from './Preguntas';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';
ReactDOM.render(
  
  <div>
  <Usuario />
  <Consejos2 />
  <Preguntas />
   </div>
 
  , document.getElementById('root'));

serviceWorker.unregister();
