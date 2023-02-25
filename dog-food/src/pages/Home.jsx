import React from "react";
import Cards from "../components/Cards";
import Ads from "../components/Ads/ads";
import {Link} from "react-router-dom"
import {CaretRight} from "react-bootstrap-icons"

export default ({data}) => {
    return <>
        <div className="mainhead">
            <h1>Крафтовые лакомства для собак</h1>
            <Link className="catal1" to="/catalog">Каталог
            <CaretRight/>
            </Link>
            <div className="description">Всегда свежие лакомства ручной работы с доставкой по России и миру</div>
        </div>
    <Ads/>
    {/* <div className="cards">
            {data.map((el, i) => <Cards key={"card_" + i} text={el} like={(i + 1) % 2 === 0}/>)}
            </div> */}
    </>
}