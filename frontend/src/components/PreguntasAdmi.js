import React from 'react'
import { Container } from 'react-bootstrap';
import { withRouter } from "react-router-dom";

const PreguntasAdmi = (props) => {
  const { history } = props;
  return(
<div className="PreguntasAdmi">
<Container className="text-center" >
<form className="form-signin">
<img class="mb-4" src="https://img2.freepng.es/20180530/cz/kisspng-paper-waste-sorting-recycling-bin-waste-disposal-5b0e295e0fc550.6685449915276547500646.jpg" alt="" width="260" height="250"/>
  <p>Pregunta 1</p>
  <h6 class="h3 mb-3 font-weight-normal">¿Que caneca le corresponde a los materiales organicos?</h6>
<br/>
  <button class="btn btn-lg btn-primary btn-block" type="submit" onClick={() => history.push("/ResultadoAdmi")}>Rojo</button>
  <button class="btn btn-lg btn-primary btn-block" type="submit" onClick={() => history.push("/ResultadoAdmi")}>Azul</button>
  <button class="btn btn-lg btn-primary btn-block" type="submit" onClick={() => history.push("/ResultadoAdmi")}>Verde</button>
  <button class="btn btn-lg btn-primary btn-block" type="submit" onClick={() => history.push("/ResultadoAdmi")}>Amarillo</button>
 
  
</form>
</Container>
</div>
  );
};
export default withRouter(PreguntasAdmi);
