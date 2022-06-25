import React from "react";
import styled from "styled-components";

export const SmallSpinner = () => (
    <SmallSpinnerContainer role="status">
        <span className="sr-only">Loading...</span>
    </SmallSpinnerContainer>
);

const SmallSpinnerContainer = styled("div")`
    display: inline-block;
    width: 2rem;
    height: 2rem;
    vertical-align: text-bottom;
    border: 0.25em solid currentColor;
    border-right-color: transparent;
    border-radius: 50%;
    -webkit-animation: spinner-border 0.75s linear infinite;
    animation: spinner-border 0.75s linear infinite;
    margin-top: auto;
    margin-bottom: auto;
    margin-left: 10px;
    color: ${(props) => props.theme.primary};
`;
