import {
    createStore
} from 'redux'

const initialState = {
    count: 0,
    photos: [],
    imageUrl: "",
    imageContainerOne: [],
    imageContainerTwo: []
}

const rootReducer = (state = initialState, action) => {
    console.log(action)
    switch (action.type) {
        case 'SETIMAGECONTAINERONE':
            return { ...state, imageContainerOne: action.payload }
        case 'SETIMAGECONTAINERTWO':
        return {
            ...state,
            imageContainerTwo: action.payload
        }
        case 'SETIMAGEURL':
            return {
                ...state,
                imageUrl: action.payload
            }
        case 'FETCHPHOTOS':
            return {
                ...state, 
                photos: action.payload
            }
        case 'ADDTEN':
            return {
                ...state,
                count: state.count + 10
            }
        case 'SUBTRACTTEN':
            return {
                ...state,
                count: state.count - 10
            }
        default:
            return state
    }
}

const store = createStore(
    rootReducer
)

export default store