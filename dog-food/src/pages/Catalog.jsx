import React from "react";
import Cards from "../components/Cards";
import {Link} from "react-router-dom";
import {EmojiFrown} from "react-bootstrap-icons";

export default ({data, pictures}) => {
    return <>
    {data.length > 0 
    ? <>
    <h1>Каталог товаров</h1>
        <div className="cards">
            {data.map((el, i) => 
                <Link to={`/catalog/${el._id}`} key={el._id}>
                    <Cards key={"card_" + i} text={el.name} like={(i + 1) % 2 === 0} pictures={<img src={el.pictures} className="prodpic" alt="картинка будет позже" />}/>
                </Link>)}
        </div>
        </>
        : <div className="empty-block">
            <EmojiFrown/>
            <p style={{width: 250}}>Простите, по Вашему запросу товаров не найдено</p>
            <Link to="/" className="btn">На главную</Link>
        </div>
        }
    </>
}