import React from "react";

let initialState = {
    friends: [
        {
            img: <img
                src="https://static.probusiness.io/720x480c/n/03/d/38097027_439276526579800_2735888197547458560_n.jpg"/>,
            name: 'Alona'
        },
        {
            img: <img
                src="https://static.probusiness.io/720x480c/n/03/d/38097027_439276526579800_2735888197547458560_n.jpg"/>,
            name: 'Vova'
        },
        {
            img: <img
                src="https://static.probusiness.io/720x480c/n/03/d/38097027_439276526579800_2735888197547458560_n.jpg"/>,
            name: 'Vlad'
        },
    ]
}

const sidebarReducer = (state =initialState, action) => {
return state;
}

export default sidebarReducer;