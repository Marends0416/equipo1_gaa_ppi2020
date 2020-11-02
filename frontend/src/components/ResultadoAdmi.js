import React from 'react'
import { Container } from 'react-bootstrap';
import '../style/Resultado.css'
import { withRouter } from "react-router-dom";

const ResultadoAdmi = (props) => {
  const { history } = props;
  return(
<div className="ResultadoAdmi">
<Container className="text-center" >
<form className="form-signin">
<h1 class="h3 mb-3 font-weight-normal">Resultado</h1>
<br/>
<br/>

<img class="mb-4" src="https://happylearning.tv/wp-content/uploads/2017/07/quiz_seccion_portada-01-01.png" alt="" width="280" height="200"/>
<h1 class="h3 mb-3 font-weight-normal"> 2    0  puntos </h1>
<br/>
<br/>
Respuestas correctas: 2
<br/>
Respuestas incorrectas: 1

<br/>
  <br/>
  <br/>
  <br/>
  <button class="btn btn-lg btn-primary btn-block" type="submit" onClick={() => history.push("/PantallainiAdmi")}>Ir a inicio</button>
  
  
</form>
</Container>
</div>
  );
};
export default withRouter(ResultadoAdmi);
