import React from 'react'
import { CardGroup, Card, Button} from 'react-bootstrap';
import { withRouter } from "react-router-dom";

const Consejos3 = (props) => {
  const { history } = props;

return(
<div className="Consejos3">

<CardGroup>
  <Card>
  <Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSCl-cWUKUUn231MSSfa7pqTqA6VDuSUynAmiP3fuuaLsyu6C5UXnAjg2GVptGW2jNMYZNvwlCHAeUqm1IqCfkMsx8xSltaajX50w&usqp=CAU&ec=45702845" width="150" height="300" />
    <Card.Body>
      <Card.Title>Abono para plantas</Card.Title>
      <Card.Text>
      Pieles de plátano:
      Es muy beneficioso como nutriente para nuestras plantas, para la floración. 
      Después de comernos la fruta, podemos utilizar su cáscara para hacer abono casero.
      <br/>
      Cáscaras de huevo:
      Las cáscaras de huevo son muy beneficiosas en el jardín, pues aportan nutrientes como el carbonato cálcico y sirven como repelente de plaga. 
      Lo ideal es triturar bien las cáscaras para añadirlas a nuestro abono, aunque también se puede hacer con ellas un polvo y extenderlo bien por la base de nuestras plantas.
      </Card.Text>
    </Card.Body>
    <Card.Footer>
    <Button variant="primary" onClick={() => history.push("/Consejos")}>Regresar</Button><Button variant="outline-primary" onClick={() => history.push("/Consejos3")}>Probaré este consejo</Button>
    </Card.Footer>
  </Card>
</CardGroup>

</div>
);
};
export default withRouter(Consejos3);
