import React from 'react'
import { Container, Navbar, Nav, Form, Button } from 'react-bootstrap';
import { withRouter} from "react-router-dom";

const PantallainiAdmi = (props) => {
  const { history } = props;
  return(

<div className="PantallainiAdmi">
<div className="text-center">
<Navbar bg="primary" expand="lg">
  <Navbar.Brand href="#home"><button class="btn btn-lg " type="submit" onClick={() => history.push("/Epregunta")}><img type="checkbox"  value="remember-me" src="./interrogacion.png" alt="" width="60" height="45"/></button></Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="#home" onClick={() => history.push("/Econsejo")}>Escribe un consejo</Nav.Link>
      <Nav.Link href="#link" onClick={() => history.push("/Epregunta")}>Nueva Pregunta</Nav.Link>
      <Nav.Link href="#link" onClick={() => history.push("/Enosotros")}>A cerca de</Nav.Link>
      
    </Nav>
    <Form inline>
      <Button variant="outline-success" onClick={() => history.push("/Header")}>Cerrar sesión</Button>
    </Form>
  </Navbar.Collapse>
</Navbar>
</div>
<div>
<Container className="text-center" >
<form className="form-signin">
<button class="btn btn-lg btn-light btn-block" type="submit" onClick={() => history.push("/ConsejosAdmi")}><h1 class="h3 mb-3 font-weight-normal">Categorias</h1>
<img class="mb-4" src="./gos.png" alt="" width="200" height="150"/></button> 

<br/>
<br/>

<button class="btn btn-lg btn-light btn-block" type="submit" onClick={() => history.push("/RutaAdmi")}><h1 class="h3 mb-3 font-weight-normal">Ruta ambiental</h1>
<img class="mb-4" src="https://static.vecteezy.com/system/resources/previews/001/186/943/non_2x/green-play-button-png.png" alt="" width="200" height="150"/></button>

<br/>
<br/>
<br/>
<br/>

</form>
</Container>
</div>
</div>
  );
};
export default withRouter(PantallainiAdmi);