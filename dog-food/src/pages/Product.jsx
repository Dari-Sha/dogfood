import React, {useState, useEffect} from "react";
import {useParams, Link} from "react-router-dom";
import Review from "../components/Review/review";

export default ({}) => {
    const {id} = useParams();
    const [product, setProduct] = useState({});
    const [users, setUsers] = useState([]);
    // const [flag, changeFlag] = useState(!!users.lengh);
    // по id товара получаем данные для отрисовки по запросу ГЕТ
    let token = localStorage.getItem("token8");
    useEffect(() => {
        if (token) {
            fetch(`https://api.react-learning.ru/products/${id}`
            , {
                headers: {
                    authorization: `Bearer ${token}`
                }
            }).then(res => res.json()).then(data => {
                // console.log(data);
                setProduct(data);
            })
        }})

    // useEffect(() => {
    //         if (token && !flag) {
    //         fetch(`https://api.react-learning.ru/v2/:group8/users`
    //         , {
    //             headers: {
    //                 authorization: `Bearer ${token}`
    //             }
    //         })
    //         .then(res => res.json())
    //         .then(data => {
    //             changeFlag(!!users.length);
    //             // console.log(data);
    //             setUsers(data);
    //         })
    //     }
    // })
    return (
    <div className="product-card">
        <h1>{product.name || "Страница товара"}</h1>
        <img src={product.pictures} className="prodpic" alt="картинка будет позже" />
        <p className="prod-descr">{product.description}, {product.wight}</p>
        <p className="prod-price">{product.price} руб.</p>
        <Link to="/catalog" className="back">Назад</Link>
        <h2>Отзывы</h2>
        <div className="reviews">
            {product.reviews && product.reviews.length > 0 && 
            product.reviews.map((el, i) => <Review {...el} key={i}/>)}
        </div>
        <br/>
    </div>
    )
}