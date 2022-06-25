import {PRINTS_LIST_ERRORED, PRINTS_LIST_STARTED, PRINTS_LIST_SUCCEEDED} from "./PrintsActions";

export default function (state = {}, action) {
    switch (action.type) {
        case PRINTS_LIST_STARTED:
            return {...state, loadingPrintsList: action.payload};
        case PRINTS_LIST_SUCCEEDED:
            return {...state, printsList: action.payload, loadingPrintsList: false};
        case PRINTS_LIST_ERRORED:
            return {...state, loadingPrintsList: false};
        default:
            return state;
    }
}
