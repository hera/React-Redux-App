import axios from 'axios';

import {
    GET_RANDOM_CHARACTER_START,
    GET_RANDOM_CHARACTER_SUCCESS,
    GET_RANDOM_CHARACTER_ERROR,
    SEARCH_ERROR,
    SEARCH_SUCCESS,
    SEARCH_SET_QUERY
} from './actionTypes';

export const getRandomCharacter = () => (dispatch) => {
    dispatch({
        type: GET_RANDOM_CHARACTER_START
    });

    axios.get('https://www.breakingbadapi.com/api/character/random')
        .then(response => {
            dispatch({
                type: GET_RANDOM_CHARACTER_SUCCESS,
                payload: response.data[0]
            });
        })
        .catch(error => {
            dispatch({
                type: GET_RANDOM_CHARACTER_ERROR,
                payload: error
            });
        });
}

export const searchCharacters = (query) => (dispatch) => {

    axios.get(`https://www.breakingbadapi.com/api/characters?name=${query}`)
        .then(response => {
            dispatch({
                type: SEARCH_SUCCESS,
                payload: response.data
            });
        })
        .catch(error => {
            dispatch({
                type: SEARCH_ERROR,
                payload: error
            });
        });
}

export const setSearchQuery = (query) => (dispatch) => {
    dispatch({
        type: SEARCH_SET_QUERY,
        payload: query
    });
}