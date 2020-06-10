import axios from 'axios';

import {
    GET_RANDOM_CHARACTER_START,
    GET_RANDOM_CHARACTER_SUCCESS,
    GET_RANDOM_CHARACTER_ERROR
} from './actionTypes';

export const getRandomCharacter = () => (dispatch) => {
    dispatch({
        type: GET_RANDOM_CHARACTER_START
    });

    axios.get('https://www.breakingbadapi.com/api/character/random')
        .then(response => {
            console.log(response.data[0]);
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