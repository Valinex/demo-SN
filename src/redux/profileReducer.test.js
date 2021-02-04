import profileReducer, {addPostActionCreator, deletePost} from "./profileReducer";
import React from "react";

let state = {
    posts: [
        {id: 1, message: 'Hi, how are you?', likes: 15},
        {id: 2, message: 'It\'s my first post', likes: 20},
    ]
};
test('length of post will be incremented', () => {
    let action = addPostActionCreator("Hello");

    let newState = profileReducer(state,action)

    expect (newState.posts.length).toBe(3)
});
test('message should be correct', () => {
    let action = addPostActionCreator("Hello");

    let newState = profileReducer(state,action)

    expect (newState.posts[2].message).toBe("Hello")
});
test('after deleting lenth of message shuld be decrement', () => {
    let action = deletePost(1);

    let newState = profileReducer(state,action);

    expect (newState.posts.length).toBe(1)
});
test('id is incorrect', () => {
    let action = deletePost(1000);

    let newState = profileReducer(state,action);

    expect (newState.posts.length).toBe(4)
});

