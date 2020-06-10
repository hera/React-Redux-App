import { combineReducers } from 'redux';
import { ADD_FAV, REMOVE_FAV } from '../actions/actionTypes';
import {
    favCharactersReducer,
    randomCharacterReducer
} from './reducers';

export default combineReducers({
    favCharacters: favCharactersReducer,
    randomCharacter: randomCharacterReducer
});
