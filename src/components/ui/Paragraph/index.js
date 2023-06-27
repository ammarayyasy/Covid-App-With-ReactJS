import styled, { css } from "styled-components";

const Paragraph = styled.p`
    ${(props) => {
        if (props.mb) {
            return `margin-bottom: ${props.theme.margin[props.mb]}`;
        } else {
            return `margin-bottom: ${props.theme.margin["1"]}`;
        }
    }};

    ${(props) => {
        if (props.mt) {
            return `margin-top: ${props.theme.margin[props.mt]}`;
        } else {
            return `margin-top: ${props.theme.margin["1"]}`;
        }
    }};

    ${(props) => {
        if (props.color) {
            return `color: ${props.theme.colors[props.color]}`;
        } else {
            return `color: ${props.theme.colors["webku"]}`;
        }
    }};

    ${(props) => {
        if(props.center && css){
           return "text-align: center";
        } else if (props.left){
            return "text-align: left";
        } else if (props.right){
            return "text-align: right";
        } else if (props.justify){
            return "text-align: justify";
        }
    }};
`

export default Paragraph;