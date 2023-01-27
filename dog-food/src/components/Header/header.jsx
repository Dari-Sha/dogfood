import React from "react";
import "./header.css";

export default () => {
   let user = localStorage.getItem("user8");
   const logIn = (e) => {
      e.preventDefault();
      let name = prompt("Как Вас зовут?");
      if (name) {
         localStorage.setItem("user8", name);
         user = name;
      }
   }
   const logOut = (e) => {
      e.preventDefault();
      localStorage.removeItem("user8");
   }
   
   return <header>
      <a className="logo" href="">DogFood</a>
      <input type="search" placeholder="Поиск..." className="search"/>
      <nav className="menu">
         {user && <a href="">{user}</a>}
         {!user && <a href="" onClick={logIn}>Войти</a>}
         {<a href="" onClick={logOut}>Выйти</a>}
      </nav>
   </header> 
}