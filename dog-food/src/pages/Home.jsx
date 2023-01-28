import React from "react";
import Cards from "../components/Cards";

export default ({data}) => {
    return <>
    <h1>Главная страница</h1>
    <div className="cards">
            {data.map((el, i) => <Cards key={"card_" + i} text={el} like={(i + 1) % 2 === 0}/>)}
            </div>
    </>
}