import React from 'react'
import {Carousel} from 'react-bootstrap'
import "../style/Header.css";
import { withRouter } from "react-router-dom";

const Header = (props) => {
  const { history } = props;

  return(
<div className="Header">
<Carousel >
  
  
  <Carousel.Item className="carousel">
    <img
      className="d-block w-100"
      src="./botella.png"
      alt="Third slide"
    />

    <Carousel.Caption>
    <button class="btn btn-lg btn-primary btn-block" type="submit" onClick={() => history.push("/Registro")}>Iniciar Sesión</button>
    <button class="btn btn-lg btn-primary btn-block" type="submit" onClick={() => history.push("/Reistro2")}>Registrarse</button>
    <button class="btn btn-lg btn-block" type="submit" onClick={() => history.push("/")}><img class="mb-4" src="./logo1...png" alt="" width="50" height="50"/></button>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://www.dgbent.com/wp-content/uploads/2018/08/Formas-sencillas-de-reducir-la-contaminaci%C3%B3n-ambiental-1024x683.jpg"
      alt="Third slide"
      
    />

    <Carousel.Caption>
    
      <h3>Aprende consejos para reducir la contaminacion.</h3>
    </Carousel.Caption>
    
  </Carousel.Item>
</Carousel>
</div>
  );
}
export default withRouter(Header);
