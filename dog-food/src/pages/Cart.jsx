import React from "react";
import { Link } from "react-router-dom";
import { EmojiFrown } from "react-bootstrap-icons";

export default () => {
    return <>
        <h2>Корзина</h2>
        <div className="cart">
            <EmojiFrown/>
            <h3>В корзине нет товаров</h3>
            <p>Добавьте товар, нажав кнопку "в корзину" в карточке товара</p>
            <Link to="/" className="btn">На главную</Link>
        </div>
    </>
}