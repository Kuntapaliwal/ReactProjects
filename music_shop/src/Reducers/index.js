import {combineReducers} from 'redux';
import preducer from './MusicProductReducer'
import treducer from './technologiesReducer'
const rootReducer=combineReducers({
    preducer,
    treducer//here key and value become same thing
})


export default rootReducer;