import {API_FAIL, API_SUCCESS, GET_CLASSES_DATA,} from "./actionTypes";

export const apiSuccess = (actionType, data) => ({
    type: API_SUCCESS,
    payload: { actionType, data },
});

export const apiFail = (actionType, error) => ({
    type: API_FAIL,
    payload: { actionType, error },
});


export const getClassesData = () => {
    return ({
        type: GET_CLASSES_DATA
    });
}