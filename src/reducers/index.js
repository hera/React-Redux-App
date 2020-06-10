import { combineReducers } from 'redux';
import {
    favCharactersReducer,
    randomCharacterReducer,
    searchReducer
} from './reducers';

export default combineReducers({
    favCharacters: favCharactersReducer,
    randomCharacter: randomCharacterReducer,
    search: searchReducer
});
