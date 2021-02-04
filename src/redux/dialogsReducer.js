const SEND_MESSAGE = 'SEND-MESSAGE';

let initialState = {
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
    ]
};

const dialogsReducer = (state = initialState, action) => {

    switch (action.type) {
        case SEND_MESSAGE:
            let newMessage = action.newMessageText;
            return  {
                ...state,
                messages: [...state.messages, {id: 5, message: newMessage}],
            };
    default:
        return state;
    }
}

export const sendMessageCreator = (newMessageText) => ({type: SEND_MESSAGE, newMessageText})


export default dialogsReducer;