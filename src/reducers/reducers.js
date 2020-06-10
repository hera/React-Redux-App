import {
    GET_RANDOM_CHARACTER_START,
    GET_RANDOM_CHARACTER_SUCCESS,
    GET_RANDOM_CHARACTER_ERROR
} from '../actions/actionTypes';


const initialRandomCharacter = {
    character: {},
    isFirstLoad: true,
    isLoading: true,
    error: ''
}

export function favCharactersReducer(state = [], action) {
    return state;
}

export function randomCharacterReducer(state = initialRandomCharacter, action) {
    switch (action.type) {
        case GET_RANDOM_CHARACTER_START:
            return {
                ...state,
                error: '',
                isLoading: true,
                isFirstLoad: false
            }
        case GET_RANDOM_CHARACTER_SUCCESS:
            return {
                ...state,
                isFirstLoad: false,
                isLoading: false,
                character: action.payload
            }
        case GET_RANDOM_CHARACTER_ERROR:
            return {
                ...state,
                isLoading: false,
                error: action.payload
            }
        default:
            return state;
    }
}