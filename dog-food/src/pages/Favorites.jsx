import React, {useContext} from "react";
import Cards from "../components/Cards";
import {Link} from "react-router-dom";
import {EmojiFrown} from "react-bootstrap-icons";
import Ctx from "../Ctx";
import usePagination from "../hooks/usePagination";
import Pagination from "../components/Pagination";

export default () => {
    const {favorites, PATH} = useContext(Ctx);
    const paginate = usePagination(favorites, 3);
    return <>
        {favorites.length > 0 
            ? <>
                <h1>Любимые товары</h1>
                <Pagination hook={paginate}/>
                <div className="cards">
                    {paginate.setPageData().map((el, i) => <Link to={`/catalog/${el._id}`} key={el._id}>
                        <Cards key={"card_" + i} {...el}/>
                    </Link>)}
                </div>
            </>
            : <div className="empty-block">
                <EmojiFrown/>
                <p>Вы еще не добавили ни одного любимого товара</p>
                <Link to={PATH+"catalog"} className="btn">В каталог</Link>
            </div>
        }
    </>
}