import {profileAPI, usersAPI} from "../API/api";

const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS';

let initialState = {
    posts: [
        {id: 1, message: 'NEW YORK', likes: '12'},
        {id: 2, message: 'B R O K L Y N', likes: '46576'},
        {id: 3, message: 'fluently', likes: '14658762'},
        {id: 4, message: 'Drop', likes: '26'},
        {id: 5, message: 'testMESSAGE', likes: '55'},
        {id: 6, message: 'Samurai', likes: '22'}
    ],
    profile: null,
    status: ""
}

export const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: 5,
                message: action.addPostTextName,
                likes: 0
            }
            return {
                ...state,
                posts: [...state.posts, newPost,]
            }
        case SET_USER_PROFILE:
            return {
                ...state,
                profile: action.profile
            }
        case SET_STATUS:
            return {
                ...state,
                status: action.status
            }
        default:
            return state
    }
}

export const addPostActionCreator = (addPostTextName) => (
    {type: ADD_POST, addPostTextName})

export const setUserProfile = (profile) => ({
    type: SET_USER_PROFILE, profile
})

export const setStatus = (status) => ({
    type: SET_STATUS, status
})


export const getUserProfile = (userId) => async (dispatch) => {
    let response = await usersAPI.getProfile(userId)
        dispatch(setUserProfile(response.data))
}
export const getStatus = (userId) => async (dispatch) => {
    const response = await profileAPI.getStatus(userId)
        dispatch(setStatus(response.data))
}
export const updateStatus = (status) => async (dispatch) => {
 const response= await profileAPI.updateStatus(status)
        if (response.data.resultCode === 0) {
            dispatch(setStatus(status))
        }
}

export default profileReducer