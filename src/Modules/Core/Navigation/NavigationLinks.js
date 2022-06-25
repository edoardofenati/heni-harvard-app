import {Route, Switch, withRouter} from "react-router-dom";
import React, {Component} from "react";
import {connect} from "react-redux";
import Prints from "../../Prints/PrintsComponent";

class NavigationLinks extends Component {
    render() {
        return (
            <Switch>
                <Route exact={true} path="/" component={Prints} />
            </Switch>
        );
    }
}

export default withRouter(connect(null, null)(NavigationLinks));
