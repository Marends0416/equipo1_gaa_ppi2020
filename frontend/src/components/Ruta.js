import React from 'react'
import { Container } from 'react-bootstrap';
import '../style/Ruta.css'
import { withRouter } from "react-router-dom";

const Ruta = (props) => {
  const { history } = props;
  return(
<div className="Ruta">
<Container className="text-center" >
<form className="form-signin">
<h1 class="h3 mb-3 font-weight-normal">Ruta ambiental</h1>
<br/>
<br/>

<img class="mb-4" src="./logo1...png" alt="" width="112" height="92"/>
<br/>
<br/>
Responde diversas preguntas y gana puntajes, logros que te ayudaran con el desarrollo de tu conocimiento

<br/>
  <br/>
  <br/>
  <button class="btn btn-lg btn-primary btn-block" type="submit" onClick={() => history.push("/Preguntas")}>Jugar</button>
  
  
</form>
</Container>
</div>
  );
};
export default withRouter(Ruta);
