import { toDoConstants } from '../constants';
export const todoActions = {
    toDo
};

function toDo() {
    return async dispatch => {
        dispatch(request());
        try {
            dispatch(success("test"));
        } catch (error) {
            console.error(error);
            dispatch(failure(error))
        }
    }
    function request() { return { type: toDoConstants.CONNECT_REQUEST} }
    function success(payload) { return { type: toDoConstants.CONNECT_SUCCESS, payload } }
    function failure(error) { return { type: toDoConstants.CONNECT_FAILURE, error } }
}