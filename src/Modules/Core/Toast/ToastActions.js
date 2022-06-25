import {NEW_TOAST_ERROR, NEW_TOAST_INFO, NEW_TOAST_SUCCESS, NEW_TOAST_WARN} from "./ToastReducers";
import uuid from "uuid/v1";

export function toast({type, message}) {
    const actionType = getActionType(type);
    return {
        type: actionType,
        payload: {
            id: uuid(),
            text: message,
        },
    };
}

export const toastType = {
    success: 0,
    error: 1,
    info: 2,
    warning: 3,
};

function getActionType(type) {
    switch (type) {
        case toastType.success:
            return NEW_TOAST_SUCCESS;
        case toastType.error:
            return NEW_TOAST_ERROR;
        case toastType.info:
            return NEW_TOAST_INFO;
        case toastType.warning:
            return NEW_TOAST_WARN;
        default:
            throw new Error(`Toast type ${type} doesn't exist.`);
    }
}
