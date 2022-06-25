import {fetchPrintsPage} from "../../APIClient/prints.service";
import {NEW_TOAST_ERROR} from "../Core/Toast/ToastReducers";
import uuid from "uuid";

export const PRINTS_LIST_STARTED = "PRINTS_LIST_STARTED";
export const PRINTS_LIST_SUCCEEDED = "PRINTS_LIST_SUCCEEDED";
export const PRINTS_LIST_ERRORED = "PRINTS_LIST_ERRORED";

export function getPrintsPage(page) {
    return (dispatch, getState) => {
        dispatch({
            type: PRINTS_LIST_STARTED,
            payload: true,
        });

        fetchPrintsPage(page)
            .then((response) => {
                // some GraphQL happens also with a successful request (200)
                if (response?.data?.errors?.length) {
                    dispatchError(dispatch, response.data.errors);
                    return;
                }

                let prints = getState().prints.printsList || [];
                let fetchedPrints = response.data.data.prints;
                prints = [...prints, ...fetchedPrints];

                return dispatch({
                    type: PRINTS_LIST_SUCCEEDED,
                    payload: prints,
                });
            })
            .catch((err) => {
                dispatchError(dispatch, err?.response?.data?.errors);
            });
    };
}

const dispatchError = (dispatch, errors) => {
    let strArray = errors.map((e) => {
        return e.message;
    });

    const strErr = strArray.join("\n");

    dispatch({
        type: NEW_TOAST_ERROR,
        payload: {
            id: uuid(),
            text: strErr || `Error fetching Prints. Please try again`,
        },
    });

    return dispatch({
        type: PRINTS_LIST_ERRORED,
    });
};
