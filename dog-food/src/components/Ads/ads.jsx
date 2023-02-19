import React from "react";
import "./ads.css"
import pic from "./img/dog.png"
import pic1 from "./img/rog.png"
import pic2 from "./img/vits.png"
import {Container, Row, Col, Navbar, Form, Button, Image} from "react-bootstrap";


export default () => {
    return <>
    
    <Container className="promo">
        Подарок при <br/> первом заказе
        <img src={pic} alt="Собачки"/>
    </Container>
   
    <div className="row">
    <Container className="promo1">
        Лакомства для собак
        <img src={pic1} alt="Собачки"/>
    </Container>
    <Container className="promo2">
        Всё для здоровья<br/>любимцев
        <img src={pic2} alt="Собачки"/>
    </Container>
    </div>
    </>
}