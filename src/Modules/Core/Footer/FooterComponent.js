import React, {Component} from "react";

import styled from "styled-components";

export default class PageFooter extends Component {
    render() {
        return (
            <FooterContainer>
                <div className={"col-xs-auto"}>
                    <div className={"float-right"}>&copy; Edoardo Fenati</div>
                </div>
            </FooterContainer>
        );
    }
}

const FooterContainer = styled("div")`
    height: 60px;
    padding: 15px;
`;
