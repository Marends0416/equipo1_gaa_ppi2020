import React from 'react'
import { Container, ListGroup } from 'react-bootstrap';
import { withRouter } from "react-router-dom";

const Logros = (props) => {
  const { history } = props;
  return(
<div className="Logros">
<Container className="text-center" >
<form className="form-signin">
<h1 class="h3 mb-3 font-weight-normal">Logros</h1>
<ListGroup>
  <ListGroup.Item>Haz probado un consejo para reciclar el vidrio</ListGroup.Item>
  <ListGroup.Item variant="primary">Haz respondido correctamente la pregunta de los plásticos</ListGroup.Item>
  <ListGroup.Item variant="secondary">Haz probado un consejo para reciclar el carton</ListGroup.Item>
  <ListGroup.Item variant="success">Haz aprendido ha clasificar los materiales orgánicos</ListGroup.Item>
  <ListGroup.Item variant="danger">Haz respondido correctamente la pregunta de los materiales tóxicos</ListGroup.Item>
  <ListGroup.Item variant="warning">2  0 </ListGroup.Item>
  <ListGroup.Item variant="info">Info</ListGroup.Item>
  <ListGroup.Item variant="light">Light</ListGroup.Item>
  <ListGroup.Item variant="dark">Dark</ListGroup.Item>
<br/>
<button class="btn btn-lg btn-primary btn-block" type="submit" onClick={() => history.push("/PantallaIni")}>Ir a inicio</button>

</ListGroup>
  
  
</form>
</Container>
</div>
  );
};
export default withRouter(Logros);
