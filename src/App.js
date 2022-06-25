import React from "react";
import {BrowserRouter as Router} from "react-router-dom";
import "./App.css";
import PageFooter from "./Modules/Core/Footer/FooterComponent";
import MainContent from "./Modules/Core/MainContent/MainContentComponent";
import ToastOverride from "./Modules/Core/Toast/ToastOverride";
import {ToastProvider} from "react-toast-notifications";
import BootstrapProvider from "@bootstrap-styled/provider";
import {connect} from "react-redux";

function App() {
    return (
        <ToastProvider components={{Toast: ToastOverride}}>
            <BootstrapProvider>
                <Router>
                    <div className="App">
                        <MainContent />
                        <PageFooter />
                    </div>
                </Router>
            </BootstrapProvider>
        </ToastProvider>
    );
}

export default connect(null)(App);
