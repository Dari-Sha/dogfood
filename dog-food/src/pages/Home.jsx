import React from "react";
import Cards from "../components/Cards";
import Blocks from "../components/Blocks/blocks.jsx";

export default ({data}) => {
    return <>
    <h1>Крафтовые лакомства для собак</h1>
    <h3>Всегда свежие лакомства с доставкой по России и миру</h3>
    <div className="blocks"></div>
    <div className="cards">
            {data.map((el, i) => <Cards key={"card_" + i} text={el} like={(i + 1) % 2 === 0}/>)}
            </div>
    </>
}