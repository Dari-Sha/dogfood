import React, {useEffect, useState} from "react";
import {Routes, Route} from "react-router-dom";
import "./style.css";
// import products from "./assets/data.json";


import Header from "./components/Header/header";
import Footer from "./components/Footer/footer";
//import Search from "./components/Search/search";
import Modal from "./components/Modal";

import Catalog from "./pages/Catalog.jsx"; 
//switch catalog or blog
import Home from "./pages/Home.jsx";
import Profile from "./pages/Profile.jsx";
import Product from "./pages/Product.jsx";
import Cart from "./pages/Cart.jsx"
import Ctx from "./Ctx";
import {Api} from "./Api";

import { unstable_renderSubtreeIntoContainer } from "react-dom";


const smiles = ["=^_^=", "*_*", "O_o", "o_o", "o_O", "-_-"];

const App = () => {
    const [user, setUser] = useState(localStorage.getItem("user8"));
    const [token, setToken] = useState(localStorage.getItem("token8"));
    const [modalActive, setModalActive] = useState(false);
    const [api, setApi] = useState(new Api(token));
    const [goods, setGoods] = useState([]);
    const [visibleGoods, setVisibleGoods] = useState(goods);

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

useEffect(() => {
    setVisibleGoods(goods);
}, [goods])

    return (
        <Ctx.Provider value={{
            user: user,
            token: token,
            api: api,
            setUser: setUser,
            setToken: setToken,
            setApi: setApi,

        }}>
        <div className="contant">
        <Header 
            // user={user} удаляем из-за внесения ктх провайдера(выше). и меняем во всех компонентах ссылки на ктх провайдера
            // setUser={setUser} 
            goods={goods}
            searchGoods={setVisibleGoods}
            setModalActive={setModalActive}
        />
        <main>
            <Routes>
                <Route path="/" element={<Home data={smiles}/>}/>
                <Route path="/catalog" element={
                    <Catalog data={visibleGoods}/>}/>
                <Route path="/profile" element={
                    <Profile/>}/>
                <Route path="/catalog/:id" element={<Product/>}/>
                <Route path="/cart" element={<Cart/>}/>
            </Routes>
            {/* {user ? <Catalog data={goods}/> : <Home data={smiles}/>}; */}
            {/* <Home data={smiles}/> */}
        </main>
        <Footer/>
    </div>
    {/* is active это пропсы, которые работают внутри компонента Модал. а модалэктив и сетмодалэктив - значения, которые сохраняются внутри параметра */}
    <Modal isActive={modalActive} setState={setModalActive}/>
    </Ctx.Provider>
    )
}

export default App;
