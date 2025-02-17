import { Link as ReactLink } from "react-router-dom";
import styled from "styled-components";
import backgroundLogin1 from "../../assets/backgroundLogin1.jpeg";
import backgroundLogin2 from "../../assets/backgroundLogin2.png";


export const Container = styled.div`
display: flex;
width: 100vw ;
height: 100vh;
`;

export const LeftContainer = styled.div`
background: url('${backgroundLogin1}');
background-size: cover;
background-position:center;
width: 100%;
height:100%;
max-width:50%;
display: flex;
align-items: center;
justify-content:center;

img { width: 70%}
`;

export const RightContainer = styled.div`

display: flex;
align-items: center;
justify-content:center;
flex-direction: column;
width: 100%;
height:100%;
max-width:50%;
background: url('${backgroundLogin2}');
background-color: #1e1e1e;
background-size: 80%;

p {
    color: #fff;
    font-size: 18px;
    font-weight: 300;

a{
    text-decoration: underline;
    cursor: pointer;
    color: #9558A6;
}
}
`;

export const Title = styled.h2`
font-family: "Road Rage", serif;
font-size: 40px;
color: #fff;
span { color: #9558A6};
font-family: "Road Rage", serif;
`;

export const Form = styled.form`
display: flex;
flex-direction: column;
gap: 20px;
padding: 20px;
width: 100%;
max-width: 400px;
align-items:left;
`;

export const InputContainer = styled.div`
display: flex;
flex-direction: column;
gap: 5px;
width:100%;
input {
    width: 100%;
    border: none;
    height: 32px;
    border-radius: 5px;
    padding: 0 16px;
}
    label {
        font-size: 18px;
        font-weight: 600;
        color: #fff;

    }

    p{
        font-size:14 px;
        line-height: 80%;
        color: #cf3057;
        font-weight: 600;
        height: 10px;
    }

`;
export const Link = styled(ReactLink)`
text-decoration: none;
color: #fff;
`
;