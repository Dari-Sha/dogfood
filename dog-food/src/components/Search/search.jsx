import React, {useState} from "react";
import "./search.css";
import {useNavigate} from "react-router-dom";
import {ReactComponent as SearchImg} from "./img/magnifying-glass-solid.svg";
import {ReactComponent as CloseImg} from "./img/xmark-solid.svg";

export default ({data, searchGoods}) => {
    const navigate = useNavigate();
    const [text, updateText] = useState("");
    const [searchData, setSearchData] = useState(data);
    // useState(data.filter(el => el.name.toLowerCase().includes(text.toLowerCase())));
    const clearSearch = () => {
        updateText("");
        setSearchData(data);
        searchGoods(data);
    }
    const search = (e) => {
        navigate("/catalog");
        updateText(e.target.value);
        let arr = data.filter(el => el.name.toLowerCase().includes(e.target.value.toLowerCase()));
        setSearchData(arr);
        console.log(arr);
        searchGoods(arr);
    }
    return <div className="searchS">
        <input placeholder="Поиск..." value={text} onChange={search}/>
        <button>{text ? <CloseImg onClick={clearSearch}/> : <SearchImg/>}</button>
        {text && <div className="search-result">
            По запросу <b>{text}</b>&nbsp;
        {searchData.length > 0 ? `найдено ${searchData.length} товаров` : "не найдено ни одного товара"}
        </div>}
    </div>
}