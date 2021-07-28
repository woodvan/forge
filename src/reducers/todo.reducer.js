import { toDoConstants } from '../constants';

export function todo(state = {}, action) {
    switch (action.type) {
        case toDoConstants.CONNECT_REQUEST:
            return {
                is_loading: true
            }
        case toDoConstants.CONNECT_SUCCESS:
            return {
                is_loading: false,
                data: action.payload,
                error: null
            }
        case toDoConstants.CONNECT_FAILURE:
            return {
                is_loading: false,
                data: null,
                error: action.error
            }
        default:
            return state
    }
}