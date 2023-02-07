import React, {useState} from "react";
import Search from "../Search/search";
import {ReactComponent as LogoImg} from "./img/logo.svg";
import {ReactComponent as LogoMinImg} from "./img/logo_min.svg";
import {ReactComponent as FavImg} from "./img/ic-favorites.svg";
import {ReactComponent as CartImg} from "./img/ic-cart.svg";
import "./header.css";

export default ({user, setUser, products, setModalActive}) => {
   // хук состояния - свойство, функция, в качестве аргумента которой передается новое значение нашего свойства = useState(аргумент-изначальное значение свойства)
   // const [user, setUser] = useState(localStorage.getItem("user8"));

   // let user = localStorage.getItem("user8");
   const logIn = (e) => {
      e.preventDefault();
      // let name = prompt("Как Вас зовут?");
      // if (name) {
      //    localStorage.setItem("user8", name);
      //    setUser(name);
      // }
      setModalActive(prev => !prev);
      // setModalActive(function(previous) {
      //    console.log("Активность модального окна:", previous);
      // return !previous;
      // });
   }
   const logOut = (e) => {
      e.preventDefault();
      localStorage.removeItem("user8");
      setUser("");
   }
   
   return <>
   <header>
      <a className="logo" href="">
      <LogoImg/>
         </a>
      <Search data={products}/>
      {/* <input type="search" placeholder="Поиск..." className="search"/> */}
      <nav className="menu">
         <FavImg/>
         <CartImg/>
         {user && <a href="">{user}</a>}
         {!user && <a href="" onClick={logIn}><LogoMinImg/><br/>Войти</a>}
         {user && <a href="" onClick={logOut}>Выйти</a>}
      </nav>
   </header> 
   <main>
      <h1>Крафтовые лакомства для собак</h1>
      <div className="description">Всегда свежие лакомства ручной работы с доставкой по России и миру</div>
   </main>
   </>
}