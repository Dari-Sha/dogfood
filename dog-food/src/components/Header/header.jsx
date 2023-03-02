import React, {useState, useContext} from "react";
import Search from "../Search/search";
import {ReactComponent as LogoImg} from "./img/logo.svg";
import {ReactComponent as LogoMinImg} from "./img/logo_min.svg";
import {ReactComponent as FavImg} from "./img/ic-favorites.svg";
import {ReactComponent as CartImg} from "./img/ic-cart.svg";
import {Link} from "react-router-dom";
import "./header.css";
import Ctx from "../../Ctx";
import {PlusCircle, HeartFill} from "react-bootstrap-icons";
import {Badge} from "react-bootstrap";

export default () => {
   const {user, setUser, setModalActive, PATH, favorites, basket} = useContext(Ctx);
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
      <div className="headnav">
         <Link className="logo" to={PATH}>
         <LogoImg/>
            </Link>
         <Link className="catal" to={PATH + "catalog"}>Каталог</Link>
         <Search/>
         {/* <input type="search" placeholder="Поиск..." className="search"/> */}
         <nav className="menu">
            {/* <FavImg/> */}
            {/* <Link to={PATH + "basket"}><CartImg/></Link> */}
            {user && <Link to={PATH + "add"}><PlusCircle style={{fontSize: "22px"}}/></Link>}
            {user && <Link to={PATH + "favorites"} className="badge-link">
                <HeartFill style={{fontSize: "20px"}}/>
                {/* <Badge bg="danger" text="light">{favorites.length}</Badge> */}
                <Badge bg="light" text="dark">{favorites.length}</Badge>
            </Link>}
            {user && <Link to={PATH + "basket"} className="badge-link">
                <CartImg style={{fontSize: "20px"}}/>
                <Badge bg="light" text="dark">
                    {basket.reduce((acc, el) => acc + el.cnt, 0)}
                </Badge>
            </Link>}
            {user && <Link to={PATH + "profile"}>{user.name}</Link>}
            {!user && <a href="" onClick={logIn}><LogoMinImg/><br/>Войти</a>}
            {user && <a href="" onClick={logOut}>Выйти</a>}
         </nav>
      </div>
      {/* <div className="mainhead">
         <h1>Крафтовые лакомства для собак</h1>
         <div className="description">Всегда свежие лакомства ручной работы с доставкой по России и миру</div>
         <Link className="catal1" to="/catalog">Каталог
         </Link>
      </div> */}
   </header> 
   <main>
     
   </main>
   </>
}