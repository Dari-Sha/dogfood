import React, {useContext} from "react";
import Cards from "../components/Cards";
import {Link} from "react-router-dom";
import {EmojiFrown} from "react-bootstrap-icons";
import Ctx from "../Ctx";
import usePagination from "../hooks/usePagination";
import Pagination from "../components/Pagination";

export default () => {
    const {visibleGoods, PATH} = useContext(Ctx);
    const paginate = usePagination(visibleGoods, 12);
    return <>
    {visibleGoods.length > 0 
        ? <>
        <h1>Каталог товаров</h1>
        <Pagination hook={paginate}/>
            <div className="cards">
            {paginate.setPageData().map((el, i) => <Link to={`/catalog/${el._id}`} key={el._id}>
                {/* {visibleGoods.map((el, i) => 
                    <Link to={`/catalog/${el._id}`} key={el._id}> */}
                        {/* <Cards key={"card_" + i} text={el.name} like={(i + 1) % 2 === 0}/> */}
                        <Cards key={"card_" + i} {...el}/>
                    </Link>)}
            </div>
            </>
            : <div className="empty-block">
                <EmojiFrown/>
                <p style={{width: 250}}>Простите, по Вашему запросу товаров не найдено</p>
                <Link to={PATH} className="btn">На главную</Link>
            </div>
        }
    </>
    }