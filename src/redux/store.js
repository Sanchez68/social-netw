import profileReducer from "./profileReducer";
import dialogReducer from "./dialogsReducer";
import sidebarReducer from "./sidebarReducer";

let store = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: 'NEW YORK', likes: '12'},
                {id: 2, message: 'B R O K L Y N', likes: '46576'},
                {id: 3, message: 'fluently', likes: '14658762'},
                {id: 4, message: 'Drop', likes: '26'},
                {id: 5, message: 'testMESSAGE', likes: '55'},
                {id: 6, message: 'Samurai', likes: '22'}
            ],
            newPostText: '111'
        },
        dialogPage: {
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
            ],
            newMessageBody: ""
        },
        sidebar: {}
    },
    _callSubscriber() {
        console.log('state changed')
    },

    getState() {
        return this._state
    },
    subscribe(observer) {
        this._callSubscriber = observer
    },

    dispatch(action) {

        this._state.profilePage =  profileReducer(this._state.profilePage, action)
        this._state.dialogPage =  dialogReducer(this._state.dialogPage, action)
        this._state.sidebar =  sidebarReducer(this._state.sidebar, action)

            this._callSubscriber(this._state)
        }
}


export default store