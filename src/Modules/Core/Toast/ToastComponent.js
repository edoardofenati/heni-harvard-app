import {Component} from "react";
import {connect} from "react-redux";
import {withToastManager} from "react-toast-notifications";

class Toast extends Component {
    addToast = (type, message) => {
        this.props.toastManager.add(message, {
            appearance: type,
            autoDismissTimeout: 15000,
            autoDismiss: ["error", "warning"].indexOf(type) === -1,
        });
    };

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.props.successMessage && this.props.successMessage !== prevProps.successMessage) {
            this.addToast("success", this.props.successMessage.text);
        }

        if (this.props.infoMessage && this.props.infoMessage !== prevProps.infoMessage) {
            this.addToast("info", this.props.infoMessage.text);
        }

        if (this.props.warningMessage && this.props.warningMessage !== prevProps.warningMessage) {
            this.addToast("warning", this.props.warningMessage.text);
        }

        if (this.props.errorMessage && this.props.errorMessage !== prevProps.errorMessage) {
            this.addToast("error", this.props.errorMessage.text);
        }
    }

    render() {
        return null;
    }
}

const mapStateToProps = (state) => {
    return {
        successMessage: state.toast.successMessage,
        infoMessage: state.toast.infoMessage,
        warningMessage: state.toast.warningMessage,
        errorMessage: state.toast.errorMessage,
    };
};

export default withToastManager(connect(mapStateToProps, null)(Toast));
