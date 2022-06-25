export const NEW_TOAST_SUCCESS = "NEW_TOAST_SUCCESS";
export const NEW_TOAST_INFO = "NEW_TOAST_INFO";
export const NEW_TOAST_WARN = "NEW_TOAST_WARN";
export const NEW_TOAST_ERROR = "NEW_TOAST_ERROR";

export default function (state = {}, action) {
    switch (action.type) {
        case NEW_TOAST_SUCCESS:
            return {...state, successMessage: action.payload};
        case NEW_TOAST_INFO:
            return {...state, infoMessage: action.payload};
        case NEW_TOAST_WARN:
            return {...state, warningMessage: action.payload};
        case NEW_TOAST_ERROR:
            return {...state, errorMessage: action.payload};
        default:
            return state;
    }
}
