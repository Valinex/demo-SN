import React from "react";
import profileReducer from "./profileReducer";
import dialogsReducer from "./dialogsReducer";
import sidebarReducer from "./sidebarReducer";

let store = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: 'Hi, how are you?', likes: 15},
                {id: 2, message: 'It\'s my first post', likes: 20},
            ],
            newPostText: ''
        },
        dialogsPage: {
            dialogs: [
                {id: 1, name: 'Alona'},
                {id: 2, name: 'Alex'},
                {id: 3, name: 'Vlad'},
                {id: 4, name: 'Vova'},
            ],
            messages: [
                {id: 1, message: 'I love u'},
                {id: 2, message: 'I love u too'},
                {id: 3, message: '❤'},
                {id: 4, message: '❤'},
            ],
            newMessageText: ''
        },
        sidebar: {
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
    },
    _callSubscriber() {
        console.log('state changed')
    },

    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer
    },

    addPost() {
        let newPost = {
            id: 3,
            message: this._state.profilePage.newPostText,
            likes: 0,
        };
        this._state.profilePage.posts.push(newPost);
        this._state.profilePage.newPostText = '';
        this._callSubscriber(this._state);
    },
    updateNewPostText(newText) {
        this._state.profilePage.newPostText = newText;
        this._callSubscriber(this._state);
    },
    sendMessage() {
        let newMessage = {
            id: 5,
            message: this._state.dialogsPage.newMessageText,
        };
        this._state.dialogsPage.messages.push(newMessage);
        this._state.dialogsPage.newMessageText = '';
        this._callSubscriber(this._state);
    },
    updateSendMessageText(newText) {
        this._state.dialogsPage.newMessageText = newText;
        this._callSubscriber(this._state);
    },

    dispatch(action) {
        this._state.profilePage= profileReducer(this._state.profilePage, action);
        this._state.dialogsPage= dialogsReducer(this._state.dialogsPage, action);
        this._state.sidebar= sidebarReducer(this._state.sidebar, action);
        this._callSubscriber(this._state);

    }
}

window.store = store;
export default store;
