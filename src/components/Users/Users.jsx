import React from "react";
import User from "./User";
import Paginator from "../common/Paginator/Paginator";


let Users = ({followingInProgress, currentPage, totalUsersCount, pageSize, onPageChanged, users, unfollow, follow, ...props}) => {

    let pagesCount = Math.ceil(totalUsersCount / pageSize)

    let pages = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }
    return <div>
        <Paginator currentPage={currentPage}
                   pageSize={pageSize} totalUsersCount={totalUsersCount}
                   onPageChanged={onPageChanged} />
        <div>
            {
                users.map(u => <User user={u}
                                     followingInProgress={followingInProgress}
                                     key={u.id}
                                     unfollow={unfollow}
                                     follow={follow}
                />)
            }
        </div>
    </div>
}

export default Users