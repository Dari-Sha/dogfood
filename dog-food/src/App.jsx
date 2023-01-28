import React, {useState} from "react";
import "./style.css";
import products from "./assets/data.json";


import Header from "./components/Header/header";
import Footer from "./components/Footer/footer";
//import Search from "./components/Search/search";
import Catalog from "./pages/Catalog.jsx";
import Home from "./pages/Home.jsx";
import Modal from "./components/Modal";


const smiles = ["=^_^=", "*_*", "O_o", "o_o", "o_O", "-_-"];

const App = () => {
    const [user, setUser] = useState(localStorage.getItem("user8"));
    const [modalActive, setModalActive] = useState(true);
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
            {user ? <Catalog data={products}/> : <Home data={smiles}/>};
        </main>
        <Footer/>
    </div>
    {/* is active это пропсы, которые работают внутри компонента Модал. а модалэктив и сетмодалэктив - значения, которые сохраняются внутри параметра */}
    <Modal isActive={modalActive} setState={setModalActive}/>
    </>
    )
}

export default App;
