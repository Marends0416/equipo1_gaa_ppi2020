import React from 'react'
import {CardGroup, Card, Button, Navbar, Form, FormControl}from'react-bootstrap'
import { withRouter } from "react-router-dom";

const ConsejosAdmi = (props) => {
  const { history } = props;

return(
  <div className="ConsejosAdmi">
    <div>
    <>
        <Navbar bg="primary" variant="dark">
          <Navbar.Brand href="#home" onClick={() => history.push("/PantallainiAdmi")}>
            <img
              class="logoC"
              src="./flecha3.png"
              alt=""
              width="70"
              height="60"
            />
          </Navbar.Brand>
          <Navbar.Brand href="#home">
            <h1>Categorías</h1>
          </Navbar.Brand>

          <Form inline>
            <FormControl
              type="text"
              placeholder="Buscar"
              className=" mr-sm-2"
            />
            <Button variant="outline-light" onClick={() => history.push("/")}>Buscar</Button>
          </Form>
        </Navbar>
      </>
    </div>
    <div>
    <CardGroup>
  <Card>
  <Card.Img variant="top" src="https://3.bp.blogspot.com/-MhnsB5dJYY4/V1jRpUUmf9I/AAAAAAAAAFw/u3iGYBUh4AglXcsu78Dq6KJ-gvXNltVHACLcB/s400/images-1.jpg" width="200" height="160" />
    <Card.Body>
      <Card.Title>Materiales Orgánicos</Card.Title>
      <Card.Text>
      La materia orgánica es materia elaborada de compuestos
       orgánicos que provienen de los restos de organismos que
        alguna vez estuvieron vivos, tales como plantas, 
        animales y sus productos de residuo en el ambiente 
        natural.
      </Card.Text>
    </Card.Body>
    <Card.Footer>
    <Button variant="primary" onClick={() => history.push("/Consejos2Admi")}><img
              class="logoC"
              src="./flecha.png"
              alt=""
              width="70"
              height="40"
            /></Button>{' '}
    </Card.Footer>
  </Card>
  <Card>
    <Card.Img variant="top" src="https://www.ejemplos.co/wp-content/uploads/2015/06/Basura.jpg" width="200" height="160" />
    <Card.Body>
      <Card.Title>Materiales Inórganicos</Card.Title>
      <Card.Text>
      se denominan Materiales o Compuestos Orgánicos aquellos formados por carbono unidos
       mediante enlaces carbono-carbono y carbono-hidrógeno..{' '}
      </Card.Text>
    </Card.Body>
    <Card.Footer>
    <Button variant="primary" onClick={() => history.push("/Consejos2Admi")}><img
              class="logoC"
              src="./flecha.png"
              alt=""
              width="70"
              height="40"
            /></Button>{' '}
    </Card.Footer>
  </Card>
  <Card>
    <Card.Img variant="top" src="https://tendenzias.com/wp-content/uploads/2014/05/bioplastico-chitosan_thumb.jpg" width="200" height="160" />
    <Card.Body>
      <Card.Title>Material Biodegradable</Card.Title>
      <Card.Text>
      un producto biodegradable que tarde diez años en degradarse no puede ser utilizado como composta. Algunos ejemplos de productos biodegradables compostables son: frutas, verduras, cáscaras de huevo, cáscaras de frutas o verduras, 
      restos de plantas, hojas, ramas, heces fecales, entre otros.
      </Card.Text>
    </Card.Body>
    <Card.Footer>
    <Button variant="primary" onClick={() => history.push("/Consejos2Admi")}><img
              class="logoC"
              src="./flecha.png"
              alt=""
              width="70"
              height="40"
            /></Button>{' '}
    </Card.Footer>
  </Card>
  <Card>
    <Card.Img variant="top" src="https://twenergy.com/wp-content/uploads/2019/03/contaminacion-del-agua-1280x720.jpg" width="200" height="160" />
    <Card.Body>
      <Card.Title>Materiales Suspendidos</Card.Title>
      <Card.Text>
      Sedimentos y materiales suspendidos: 
      Partículas desprendidas del suelo y arrastradas a las aguas. 
      Incluyen heces y otros materiales que pueden ser descompuestos por bacterias aeróbicas, 
      es decir en procesos con consumo de oxígeno.{' '}
      </Card.Text>
    </Card.Body>
    <Card.Footer>
    <Button variant="primary" onClick={() => history.push("/Consejos2Admi")}><img
              class="logoC"
              src="./flecha.png"
              alt=""
              width="70"
              height="40"
            /></Button>{' '}
    </Card.Footer>
  </Card>
</CardGroup>
</div>
  </div>
);
};
export default withRouter(ConsejosAdmi);