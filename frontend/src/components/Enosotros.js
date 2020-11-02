import React from 'react'
import { Container } from 'react-bootstrap';
import '../style/Enosotros.css'
import { withRouter } from "react-router-dom";

const Enosotros = (props) => {
  const { history } = props;
  return(
<div className="Enosotros">
<Container className="text-center" >
<form className="form-signin">
<h1 class="h3 mb-3 font-weight-normal">Nosotros</h1>
<br/>
<br/>

<img class="mb-4" src="./logo1...png" alt="" width="112" height="92"/>
<br/>
<br/>
Somos un equipo que tiene como objetivo reducir 
la contaminación del agua, por medio de una app
que le enseñará al usuario hacer un buen uso de los 
diferentes materiales que contaminan el agua.

<br/>
  <br/>
  <br/>
  <button class="btn btn-lg btn-primary btn-block" type="submit" onClick={() => history.push("/PantallainiAdmi")}>Ir a inicio</button>
  
  
</form>
</Container>
</div>
  );
};
export default withRouter(Enosotros);
