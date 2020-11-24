import React from "react";
import '../style/Ppicontainer.css'
import { BrowserRouter, Route } from 'react-router-dom';
import Header from "../components/Header";
import Registro  from "../components/Registro"
import Registro2 from "../components/Registro2"
import Registroadmi from "../components/Registroadmi"
import PantallaIni  from "../components/PantallaIni";
import PantallainiAdmi  from "../components/PantallainiAdmi";
import Consejos  from "../components/Consejos"
import Consejos2 from "../components/Consejos2"
import Consejos3  from "../components/Consejos3"
import Ruta  from "../components/Ruta"
import Preguntas  from "../components/Preguntas"
import Resultado  from "../components/Resultado"
import Logros  from "../components/Logros"
import Econsejo  from "../components/Econsejo"
import Epregunta  from "../components/Epregunta"
import Interroga  from "../components/Interroga"
import Nosotros  from "../components/Nosotros"
import Enosotros  from "../components/Enosotros"
import ConsejosAdmi  from "../components/ConsejosAdmi"
import Consejos2Admi  from "../components/Consejos2Admi"
import  Consejos3Admi from "../components/Consejos3Admi"
import  PreguntasAdmi from "../components/PreguntasAdmi"
import  RutaAdmi from "../components/RutaAdmi"
import  ResultadoAdmi from "../components/ResultadoAdmi"
import  ConsejoJson from "../components/ConsejoJson"

export default function Ppicontainer() {
  return (
    <div className="Ppicontainer">
  <BrowserRouter>
  <Route exact path="/" component={ Header } />  
  <Route exact path="/Header" component={ Header } />
  <Route exact path="/Registro" component={ Registro } />
  <Route exact path="/Registro2" component={ Registro2} />
  <Route exact path="/Registroadmi" component={ Registroadmi} />
  <Route exact path="/PantallaIni" component={ PantallaIni} />
  <Route exact path="/PantallainiAdmi" component={ PantallainiAdmi} />
  <Route exact path="/Consejos" component={ Consejos} />
  <Route exact path="/Consejos2" component={ Consejos2} />
  <Route exact path="/Consejos3" component={ Consejos3} />
  <Route exact path="/Ruta" component={ Ruta} />
  <Route exact path="/Preguntas" component={ Preguntas} />
  <Route exact path="/Resultado" component={ Resultado} />
  <Route exact path="/Logros" component={ Logros} />
  <Route exact path="/Econsejo" component={ Econsejo} />
  <Route exact path="/Epregunta" component={ Epregunta} />
  <Route exact path="/Interroga" component={ Interroga} />
  <Route exact path="/Nosotros" component={ Nosotros} />
  <Route exact path="/Enosotros" component={ Enosotros} />
  <Route exact path="/ConsejosAdmi" component={ ConsejosAdmi} />
  <Route exact path="/Consejos2Admi" component={Consejos2Admi} />
  <Route exact path="/Consejos3Admi" component={ Consejos3Admi} />
  <Route exact path="/PreguntasAdmi" component={ PreguntasAdmi} />
  <Route exact path="/RutaAdmi" component={ RutaAdmi} />
  <Route exact path="/ResultadoAdmi" component={ ResultadoAdmi} />
  <Route exact path="/ConsejoJson" component={ ConsejoJson} />
    </BrowserRouter>
         
    </div>
  );
}