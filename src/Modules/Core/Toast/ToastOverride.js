import React from "react";
import {DefaultToast} from "react-toast-notifications";

const ToastOverride = ({children, ...props}) => (
    <DefaultToast {...props}>
        <div style={{overflowWrap: "anywhere"}}>{children}</div>
    </DefaultToast>
);

export default ToastOverride;
