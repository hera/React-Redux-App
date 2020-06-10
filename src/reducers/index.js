import { combineReducers } from 'redux';
import { ADD_FAV, REMOVE_FAV } from '../actions/actionTypes';
import { favCharacters } from './reducers';

export default combineReducers({
    favCharacters
});
