import {combineReducers} from "redux";

import {intlReducer} from "react-intl-redux";
import ToastReducer from "./Modules/Core/Toast/ToastReducers";
import PrintsReducers from "./Modules/Prints/PrintsReducer";
const RootReducer = combineReducers({
    intl: intlReducer,
    toast: ToastReducer,
    prints: PrintsReducers,
});

export default RootReducer;
