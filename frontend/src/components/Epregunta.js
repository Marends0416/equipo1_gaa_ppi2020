import React from 'react'
import { Navbar, Form} from 'react-bootstrap';
import '../style/Epregunta.css'
import { withRouter } from "react-router-dom";

const Epregunta = (props) => {
  const { history } = props;
  return(
<div className="Epregunta">
<div>
  <>
        <Navbar bg="primary" variant="dark">
          <Navbar.Brand href="#home" onClick={() => history.push("/PantallainiAdmi")}>
            <img
              class="logoC"
              src="./flecha3.png" alt=""
              width="70"
              height="60"
            />
          </Navbar.Brand>
          <Navbar.Brand href="#home">
            <h5>Nueva pregunta</h5>
    
</Navbar.Brand>
        </Navbar>
      </>
  </div>
<div className="Pregun py-5">

<Form.Group>
<Form.File id="Cargar imagen" label="" />
<br/>
  <Form.Control type="text" placeholder="Pregunta" />
  <br/>
  <Form.Label>Respuesta</Form.Label>
  <br/>
    <Form.Control as="select" custom>
      <option>1</option>
      <option>2</option>
      <option>3</option>
      <option>4</option>
    </Form.Control>
    <br/>
    <br/>
  <Form.Control as="select">
    <option>Seleccionar categoría</option>
    <option>Orgánicos</option>
    <option>Inorgánicos</option>
    <option>Biodegradables</option>
    <option>Suspendidas</option>
  </Form.Control>
  <br />
  <br />
  <button class="btn btn-lg btn-primary btn-block" type="submit" onClick={() => history.push("/PantallainiAdmi")}>Salvar</button>
  <br/>
  <button class="btn btn-lg btn-primary btn-block" type="submit" onClick={() => history.push("/PantallainiAdmi")}>Cancelar</button>
  

</Form.Group>

</div>

</div>
  );
};
export default withRouter(Epregunta);