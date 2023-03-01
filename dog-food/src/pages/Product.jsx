import React, {useState, useEffect, useContext} from "react";
import {useParams, Link, useNavigate, 
Navigate} from "react-router-dom";
import { Trash3 } from "react-bootstrap-icons";
import Review from "../components/Review/review";
import Ctx from "../Ctx";

export default ({}) => {
    const {id} = useParams();
    const [product, setProduct] = useState({});
    // const [users, setUsers] = useState([]);
    // const [flag, changeFlag] = useState(!!users.lengh);
    // по id товара получаем данные для отрисовки по запросу ГЕТ
    // let token = localStorage.getItem("token8");
    const {api, PATH, user, setGoods} = useContext(Ctx);
    const navigate = useNavigate();
    useEffect(() => {
        // if (token) {
            api.getProduct(id)
            // fetch(`https://api.react-learning.ru/products/${id}`
            // , {
            //     headers: {
            //         authorization: `Bearer ${token}`
            //     }
            .then(res => res.json())
            .then(data => {
                // console.log(data);
                setProduct(data);
            })
        }, []);
        const btnSt = {
            position: "absolute",
            right: "20px",
            top: "120px",
            cursor: "pointer",
            height: "auto"
        }
        const remove = () => {
            api.delProduct(id)
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if (!data.error) {
                        setGoods(prev => prev.filter(g => g._id !== data._id))
                        navigate(`${PATH}catalog`);
                    }
                })
        }
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
        {product && product.author && product.author._id === user._id && <button 
            onClick={remove} 
            className="btn" 
            style={btnSt}
        >
            <Trash3/>
        </button>}
        <h1>{product.name || "Страница товара"}</h1>
        <img src={product.pictures} className="prodpic" alt="картинка будет позже" />
        <p className="prod-descr">{product.description}, {product.wight}</p>
        <p className="prod-price">{product.price} руб.</p>
        <Link to={PATH + "catalog"} className="back">Назад</Link>
        <h2>Отзывы</h2>
        <div className="reviews">
            {product.reviews && product.reviews.length > 0 && 
            product.reviews.map((el, i) => <Review {...el} key={i}/>)}
        
        </div>
        <br/>
    </div>
    )
}