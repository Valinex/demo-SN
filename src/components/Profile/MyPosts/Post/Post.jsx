import React from 'react';
import inf from "./Post.module.css"

const Post = (props) => {
    return (
        <div className={inf.item}>
            <img
                src="https://tipik.ru/wp-content/uploads/2019/09/%D0%9A%D1%80%D0%B0%D1%81%D0%B8%D0%B2%D1%8B%D0%B5-%D0%BA%D0%B0%D1%80%D1%82%D0%B8%D0%BD%D0%BA%D0%B8-%D0%B0%D0%B2%D0%B0%D1%82%D0%B0%D1%80%D0%BA%D0%B8-%D0%B2-%D0%B2%D0%BA-009.jpg"/>
            {props.message}
            <div>
                {props.likes} <span> likes</span>
            </div>
        </div>
    )
}
export default Post