import React, {useState} from "react";
import "./style.css";
import products from "./assets/data.json";


import Header from "./components/Header/header";
import Footer from "./components/Footer/footer";
import Search from "./components/Search/search";
import Catalog from "./pages/Catalog.jsx";
import Home from "./pages/Home.jsx";


const smiles = ["=^_^=", "*_*", "O_o", "o_o", "o_O", "-_-"];

const App = () => {
    const [user, setUser] = useState(localStorage.getItem("user8"));
    return (
        <div className="container">
        <Header user={user} setUser={setUser}/>
        <main>
            <Search data={products}/>
            {user ? <Catalog data={products}/> : <Home data={smiles}/>};
        </main>
        <Footer/>
    </div>
    )
}

export default App;
