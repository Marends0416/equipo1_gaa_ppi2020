import React from 'react'
import { Navbar, Form} from 'react-bootstrap';
import '../style/Econsejo.css'
import { withRouter } from "react-router-dom";

const Econsejo = (props) => {
  const { history } = props;
  return(
<div className="Econsejo">
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
            <h5>Escribe un consejo</h5>
    
</Navbar.Brand>
        </Navbar>
      </>
  </div>
<div className="formul py-5">

<Form.Group>
  <Form.Control type="text" placeholder="Título" />
  <br />
  <Form.Control type="text" placeholder="Descripción" />
  <br />
          

  <Form.File id="Cargar imagen" label="" />

  
  <br />
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
</Form.Group>

</div>

</div>
  );
};
export default withRouter(Econsejo);
