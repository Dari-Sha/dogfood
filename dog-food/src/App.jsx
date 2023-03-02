import React, {useEffect, useState} from "react";
import {Routes, Route, Link} from "react-router-dom";
import "./style.css";
import "bootstrap/dist/css/bootstrap.min.css";
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
import Basket from "./pages/Basket.jsx"
import AddForm from "./pages/AddForm";
import Favorites from "./pages/Favorites";
import Fake from "./pages/Fake";

import Ctx from "./Ctx";
import {Api} from "./Api";

const PATH = "/";
// const PATH = "/dog-food/"; 
//когда мы хотим работать через гитхаб. а просто слеш - если хотим работать с файла на компе.

// import { unstable_renderSubtreeIntoContainer } from "react-dom";


const smiles = ["=^_^=", "*_*", "O_o", "o_o", "o_O", "-_-"];

const App = () => {
    let usr = localStorage.getItem("user8");
    if (usr) {
        usr = JSON.parse(usr);
    }
    const [user, setUser] = useState(usr);
    const [token, setToken] = useState(localStorage.getItem("token8"));
    const [modalActive, setModalActive] = useState(false);
    const [api, setApi] = useState(new Api(token));
    const [goods, setGoods] = useState([]);
    const [authors, setAuthors] = useState([]);
    const [visibleGoods, setVisibleGoods] = useState(goods);
    const [favorites, setFavorites] = useState([]);
    const [basket, setBasket] = useState(localStorage.getItem("basket8") ? JSON.parse(localStorage.getItem("basket8")) : []);


useEffect(() => {
    // console.log("Hello!");
    // console.log(token);
    if (token) {
        //загрузить данные с сервера
    
    api.getProducts()
        .then(res => res.json())
        .then(data => {
            // console.log(data);
            setGoods(data.products);
    })
    api.getUsers()
                .then(res => res.json())
                .then(data => {
                    console.log("af-af", data);
                    setAuthors(data);
                })
}
},[]) //функция отработает 1 раз при создании компонента(при монтировке)

useEffect(() => {
    // console.log("change token");
    let usr = localStorage.getItem("user8");
    setApi(new Api(token));
    if(usr) {
        usr = JSON.parse(usr);
    }
    setUser(usr);
}, [token])

useEffect(() => {
    if (!user) {
        localStorage.removeItem("token8");
        setToken(null);
    }
}, [user]);

useEffect(() => {
    if (token) {
        //загрузить данные с сервера
        api.getProducts()
            .then(res => res.json())
            .then(data => {
                // setVisibleGoods(data.products); возможно добавить
                // console.log(data);
                setVisibleGoods(goods);
                setGoods(data.products);
    })
    }
}, [api])

useEffect(() => {
    // console.log("111", goods);
    setVisibleGoods(goods);
    setFavorites(goods.filter(el => {
        // Найти только те товары, в которых свойство likes ([]) включает в себя id моего пользователя
        // el.likes.includes(user._id);
        return el.likes && el.likes.includes(user._id);
    }))
}, [goods])

useEffect(() => {
    console.log("basket", basket);
    localStorage.setItem("basket8", JSON.stringify(basket));
}, [basket]);

    return (
        <Ctx.Provider value={{
            user: user,
            token: token,
            api: api,
            modalActive: modalActive,
            goods: goods,
            visibleGoods: visibleGoods,
            favorites: favorites,
            setUser: setUser,
            setToken: setToken,
            setApi: setApi,
            setModalActive: setModalActive,
            setGoods: setGoods,
            setVisibleGoods: setVisibleGoods,
            setFavorites: setFavorites,
            PATH: PATH,
            basket,
            setBasket,
            authors
        }}>
        <div className="wrapper">
        <Header 
            // user={user} удаляем из-за внесения ктх провайдера(выше). и меняем во всех компонентах ссылки на ктх провайдера
            // setUser={setUser} 
            // goods={goods}
            // searchGoods={setVisibleGoods}
            // setModalActive={setModalActive}
        />
        <main  className="py-4">
            <Routes>
                <Route path={PATH} element={<Home data={smiles}/>}/>
                <Route path={PATH + "catalog"} element={
                    <Catalog/>}/>
                <Route path={PATH + "profile"} element={
                    <Profile/>}/>
                <Route path={PATH + "catalog/:id"} element={<Product/>}/>
                <Route path={PATH + "basket"} element={<Basket/>}/>
                <Route path={PATH + "add"} element={<AddForm/>}/>
                <Route path={PATH + "favorites"} element={<Favorites/>}/>
                <Route path={PATH + "fake/:n/:title"} element={<Fake/>}/>
            </Routes>
            {/* <ul>
                        {smiles.map((el,i) => <li key={el}>
                            <Link to={`${PATH}fake/${i+1}/${el}`}>{el}</Link>
                        </li>)}
                    </ul> */}
            {/* {user ? <Catalog data={goods}/> : <Home data={smiles}/>}; */}
            {/* <Home data={smiles}/> */}
        </main>
        <Footer/>
    </div>
    {/* is active это пропсы, которые работают внутри компонента Модал. а модалэктив и сетмодалэктив - значения, которые сохраняются внутри параметра */}
    <Modal/>
    </Ctx.Provider>
    )
}

export default App;