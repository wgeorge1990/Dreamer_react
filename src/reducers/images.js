const initialState = {
    photos: [],
    imageUrl: "",
    imageContainerOne: [],
    imageContainerTwo: []
}

export default (state = initialState, action) => {
    switch (action.type) {
        case 'SETIMAGECONTAINERONE':
            return {
                ...state, imageContainerOne: action.payload
            }
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
        default:
            return state
    }
}