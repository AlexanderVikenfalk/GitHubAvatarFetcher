import {useEffect, useState} from 'react';
import apiStates from './apiStates';

/**
 * Handles external API requests. The response is saved in local state. Until
 * a proper response has been received it will return state as 'Loading'. Dependent
 * on the response type either 'success' or 'error' will be returned together with
 * the corresponding data.
 * @param url
 * @returns {{data: *[], state: string, error: string}}
 */
export default (url) => {
    const [data, setData] = useState({
        state: apiStates.LOADING,
        error: '',
        data: []
    });

    const setPartData = (partialData) => setData({...data, ...partialData});

    const fetchData = () => {
        setPartData({
            state: apiStates.LOADING,
            error: '',
            data: []
        });
        fetch(`https://api.github.com/users/${url}`)
            // We want to throw an error if response is not ok
            .then((response) => {
                if (!response.ok ) {
                    throw Error(response.statusText);
                }
                return response.json();
            })
            // if successful, then set response and successful status in state
            .then((jsonResponse) => {
                setPartData({
                    state: apiStates.SUCCESS,
                    data: jsonResponse
                });
            })
            // if error, set error status and generic error message in state
            .catch(() =>
                setPartData({
                    state: apiStates.ERROR,
                    error: 'an unknown error has occurred'
                })
            );
    };

    useEffect(() => {
        fetchData();
    }, []);

    return data;
};
