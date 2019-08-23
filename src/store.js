import { createStore } from 'redux'
import { composeWithDevTools, devToolsEnhancer } from 'redux-devtools-extension'
import rootReducer from './reducers/root'

// const store = createStore(
//     rootReducer
// )

const store = createStore(rootReducer, /* preloadedState, */ devToolsEnhancer(
    // Specify custom devTools options
));

export default store