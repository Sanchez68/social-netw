const SEND_MESSAGE = 'SEND_MESSAGE'

let initialState = {
    dialogs: [
        {id: 1, name: 'Afonasiy'},
        {id: 2, name: 'Sanchez'},
        {id: 3, name: 'Victor'},
        {id: 4, name: 'Oleg'},
        {id: 5, name: 'Olha'}
    ],
    messages: [
        {text: 'Hi'},
        {text: 'How are you'},
        {text: 'HB'},
        {text: 'Have a nice dayy'}
    ]
}

const dialogReducer = (state = initialState, action) => {




    switch (action.type) {
        case SEND_MESSAGE:
            let body = action.newMessageBody
            return { ...state,
                 messages : [...state.messages, {text: body}]
            }
        default:
            return state
    }

}
export const sendMessageCreator = (newMessageBody) => (
    {type: SEND_MESSAGE, newMessageBody})


export default dialogReducer