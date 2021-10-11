import React, {useState} from "react";
import styles from "./Paginator.module.css";
import cn from "classnames";

let Paginator = ({totalUsersCount, pageSize, currentPage, onPageChanged, portionSize = 10}) => {


    let pagesCount = Math.ceil(totalUsersCount / pageSize)
    let pages = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    let portionCount = Math.ceil(pagesCount / portionSize)
    let rightBorderControl = portionNumber * portionSize
    let leftBorderControl = (portionNumber - 1) * portionSize + 1

    return <div className={styles.paginator}>
        <button onClick={() => {
            setPortionNumber(1)
        }}>First</button>
        {portionNumber > 1 &&
        <button onClick={() => {
            setPortionNumber(portionNumber - 1)
        }}>prev</button>}
        {pages
            .filter(p => p >= leftBorderControl && p <= rightBorderControl)
            .map(p => {
                return <span

                    className={cn({[styles.selectedPage]: currentPage === p}, styles.pageNumber)}
                    key={p}
                    onClick={(e) => {
                        onPageChanged(p)
                    }}>{p}</span>
            })}
        {portionCount > portionNumber && <button onClick={() => {
            setPortionNumber(portionNumber + 1)
        }}>next</button>}
        <button onClick={() => {
            setPortionNumber(portionCount)
        }}>LastPage
        </button>
    </div>
}

export default Paginator