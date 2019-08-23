import count from '../reducers/count'
import images from '../reducers/images'
import { combineReducers} from 'redux'

export default combineReducers({
    count: count,
    images: images
})