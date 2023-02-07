import React, {useEffect, useState} from "react";
import "./style.css";
import products from "./assets/data.json";


import Header from "./components/Header/header";
import Footer from "./components/Footer/footer";
//import Search from "./components/Search/search";
import Modal from "./components/Modal";

import Catalog from "./pages/Catalog.jsx";
import Home from "./pages/Home.jsx";

import {Api} from "./Api";
import { unstable_renderSubtreeIntoContainer } from "react-dom";


const smiles = ["=^_^=", "*_*", "O_o", "o_o", "o_O", "-_-"];

const App = () => {
    const [user, setUser] = useState(localStorage.getItem("user8"));
    const [token, setToken] = useState(localStorage.getItem("token8"));
    const [modalActive, setModalActive] = useState(false);
    const [api, setApi] = useState(new Api(token));
    const [goods, setGoods] = useState([]);

useEffect(() => {
    console.log("Hello!");
    console.log(token);
    if (token) {
        //загрузить данные с сервера
    
    api.getProducts()
        .then(res => res.json())
        .then(data => {
            // console.log(data);
            setGoods(data.products);
    })
}
},[]) //функция отработает 1 раз при создании компонента(при монтировке)

useEffect(() => {
    console.log("change token");
    setApi(new Api(token));
    setUser(localStorage.getItem("user8"));
}, [token]);

useEffect(() => {
    if (!user) {
        localStorage.removeItem("token8");
        setToken(null);
    }
}, [user])

useEffect(() => {
    if (token) {
        //загрузить данные с сервера
        api.getProducts()
            .then(res => res.json())
            .then(data => {
                // console.log(data);
                setGoods(data.products);
    })
    }
}, [api])

    return (
        <>
        <div className="container">
        <Header 
            user={user} 
            setUser={setUser} 
            products={products} 
            setModalActive={setModalActive}
        />
        <main>
            {user ? <Catalog data={goods}/> : <Home data={smiles}/>};
        </main>
        <Footer/>
    </div>
    {/* is active это пропсы, которые работают внутри компонента Модал. а модалэктив и сетмодалэктив - значения, которые сохраняются внутри параметра */}
    <Modal isActive={modalActive} setState={setModalActive} api={api} setToken={setToken}/>
    </>
    )
}

export default App;
