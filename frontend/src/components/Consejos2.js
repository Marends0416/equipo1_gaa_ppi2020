import React from 'react'
import { CardGroup,Card, Button, Navbar, FormControl, Form} from 'react-bootstrap';
import { withRouter } from "react-router-dom";

const Consejos2 = (props) => {
  const { history } = props;

return(
<div className="Consejos2">
  <div>
  <>
        <Navbar bg="primary" variant="dark">
          <Navbar.Brand href="#home" onClick={() => history.push("/Consejos")}>
            <img
              class="logoC"
              src="./flecha3.png" alt=""
              width="70"
              height="60"
            />
          </Navbar.Brand>
          <Navbar.Brand href="#home">
            <h1>Orgánicos</h1>
    
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
  <Card.Img variant="top" src="https://blog.cerdanyaecoresort.com/wp-content/uploads/2018/03/compuestos-org%C3%A1nicos.jpg" width="200" height="160"/>
    <Card.Body>
      <Card.Title>Mejora la calidad de la tierra</Card.Title>
    </Card.Body>
    <Card.Footer>
    <Button variant="primary" onClick={() => history.push("/Consejos3")}><img
              class="logoC"
              src="./flecha.png"
              alt=""
              width="70"
              height="40"
            /></Button>{' '}
    </Card.Footer>
  </Card>
  <Card>
    <Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSCl-cWUKUUn231MSSfa7pqTqA6VDuSUynAmiP3fuuaLsyu6C5UXnAjg2GVptGW2jNMYZNvwlCHAeUqm1IqCfkMsx8xSltaajX50w&usqp=CAU&ec=45702845" width="200" height="160"/>
    <Card.Body>
      <Card.Title>Abono para las plantas</Card.Title>
    </Card.Body>
    <Card.Footer>
    <Button variant="primary" onClick={() => history.push("/Consejos3")}><img
              class="logoC"
              src="./flecha.png"
              alt=""
              width="70"
              height="40"
            /></Button>{' '}
    </Card.Footer>
  </Card>
  <Card>
    <Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS5amWoAG1k59ozyrr0VSUyLjZao4RrsFqQNA&usqp=CAU" width="200" height="160"/>
    <Card.Body>
      <Card.Title>Genera electricidad</Card.Title>
    </Card.Body>
    <Card.Footer>
    <Button variant="primary" onClick={() => history.push("/Consejos3")}><img
              class="logoC"
              src="./flecha.png"
              alt=""
              width="70"
              height="40"
            /></Button>{' '}
    </Card.Footer>
  </Card>
  <Card>
    <Card.Img variant="top" src="https://1.bp.blogspot.com/-_8VeySk-kMw/XsMKMnXrX7I/AAAAAAACMSU/xINYHZFNJLoyVMYmgWPFwr8BIRKNTyMLQCLcBGAsYHQ/s640/re.jpg" width="200" height="160"/>
    <Card.Body>
      <Card.Title>Clasificación adecuada</Card.Title>
    </Card.Body>
    <Card.Footer>
    <Button variant="primary" onClick={() => history.push("/Consejos3")}><img
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
export default withRouter(Consejos2);