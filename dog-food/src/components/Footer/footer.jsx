import React from "react";
import "./footer.css";
import {ReactComponent as LogoImg} from "./img/logo.svg";
import {ReactComponent as TGImg} from "./img/telegram.svg";
import {ReactComponent as VibImg} from "./img/viber.svg";
import {ReactComponent as WAImg} from "./img/whatsapp.svg";
import {ReactComponent as VKImg} from "./img/vk.svg";
import {ReactComponent as InstImg} from "./img/instagram.svg";


export default () => {
    const year = new Date().getFullYear();
   return <footer>
    <span className="footer__copy"> <LogoImg/><br/><br/>
    © {year} Интернет магазин Dogfood.ru
    </span>
    {/* <span className="footer__text"> Сайт разработан с использованием <br/>библиотеки React</span> */}
    <a href="" className="catalog">Каталог
    </a>
    <span className="contacts">
        <div className="contact_info">Мы на связи<br/>
    8 (999) 00-00-00 <br/>
    dogfood@gmail.com <br/></div>
    <div className="icons">
        <TGImg/>
        <WAImg/> 
        <VibImg/> 
        <InstImg/>
        <VKImg/>
    </div>
    </span>
    </footer> 
}