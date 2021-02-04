import React from "react";
import User from "./User";
import Pagination from "../common/Pagination/Pagination";

let Users = ({onPageChanged, currentPage, totalUsersCount, pageSize, ...props}) => {
    return <div>
        <Pagination currentPage={currentPage} onPageChanged={onPageChanged}
                    totalItemsCount={totalUsersCount} pageSize={pageSize}/>

        <div>
            {
                props.users.map(u => <User user={u}
                                           key={u.id}
                                           followingInProgress={props.followingInProgress}
                                           unfollow={props.unfollow}
                                           follow={props.follow}
                    />
                )
            }
        </div>
    </div>
}
export default Users;