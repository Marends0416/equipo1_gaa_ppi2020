import React from 'react'
import { Container, ListGroup } from 'react-bootstrap';
import { withRouter } from "react-router-dom";

const Interroga = (props) => {
  const { history } = props;
  return(
<div className="Interroga">
<Container className="text-center" >
<form className="form-signin">
<h1 class="h3 mb-3 font-weight-normal">Ayudas</h1>
<ListGroup>
  <ListGroup.Item>Gana puntos en la ruta ambiental</ListGroup.Item>
  <ListGroup.Item variant="primary">La ruta ambiental es la evaluación de la app</ListGroup.Item>
  <ListGroup.Item variant="secondary">Aprende consejos dando click en "Categorías"</ListGroup.Item>
  <ListGroup.Item variant="success">Pon en práctica los consejos aprendidos</ListGroup.Item>
  <ListGroup.Item variant="danger">Presta mucha atención a lo que lees para luego responder las preguntas de la ruta ambiental</ListGroup.Item>
  <ListGroup.Item variant="warning">Aprende a reciclar en las descripciones de cada material</ListGroup.Item>
  <ListGroup.Item variant="info">Consulta tu proceso en la barra de menu dando click en "Logros"</ListGroup.Item>
  <ListGroup.Item variant="light">Averigua acerca de nosotros en la barra de menu</ListGroup.Item>
  <ListGroup.Item variant="dark">Aprende hacer uso adecuado de estos materiales</ListGroup.Item>
<br/>
<button class="btn btn-lg btn-primary btn-block" type="submit" onClick={() => history.push("/PantallaIni")}>Ir a inicio</button>

</ListGroup>
  
  
</form>
</Container>
</div>
  );
};
export default withRouter(Interroga);
