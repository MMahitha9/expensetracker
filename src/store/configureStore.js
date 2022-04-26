import { createStore, combineReducers } from 'redux'
import countReducer from '../reducers/countReducer'
import numbersReducer from '../reducers/numbersReducer'

const configureStore = () => {
    const store = createStore(combineReducers({
        count : countReducer,
        numbers : numbersReducer
    }))
    return store
}


export default configureStore