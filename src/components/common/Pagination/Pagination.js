import React, {useState} from "react";
import inf from "./Pagination.module.css";
import cn from "classnames"


let Pagination = (props) => {

    let pagesCount = Math.ceil(props.totalItemsCount / props.pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }
    let [portionNumber, setPortionNumber] = useState(1)
    let portionSize = 10;
    let portionCount = Math.ceil(pagesCount/portionSize);
    let leftSideOfPage = (portionNumber - 1) * portionSize + 1
    let RightSideOfPage = portionNumber * portionSize
    return <div className={inf.pagination}>
        {portionNumber > 1 &&
        <button onClick={() => { setPortionNumber(portionNumber - 1) }}>PREV</button> }
        {pages
            .filter(p => p >= leftSideOfPage && p <= RightSideOfPage)
            .map(p => {
            return <span  className={cn (
                {[inf.selectedPage] : props.currentPage === p},
                inf.pageNumber)}
                         key={p}
                         onClick={(e) => {
                             props.onPageChanged(p)
                         }}>{p}</span>
        })}
        {portionCount > portionNumber &&
            <button onClick={() => { setPortionNumber(portionNumber + 1)}}>NEXT</button>}
    </div>
}
export default Pagination;