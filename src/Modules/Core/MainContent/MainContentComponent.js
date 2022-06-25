import {connect} from "react-redux";
import React, {Component} from "react";
import {withRouter} from "react-router-dom";

import NavigationLinks from "../Navigation/NavigationLinks";
import Toast from "../Toast/ToastComponent";

class MainContent extends Component {
    render() {
        return (
            <div>
                <Toast />
                <NavigationLinks routes={this.props.routes} />
            </div>
        );
    }
}

export default withRouter(connect(null)(MainContent));
