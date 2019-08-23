 const initialState = {count: 0}

export default (state = initialState, action) => {
    switch (action.type) {
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