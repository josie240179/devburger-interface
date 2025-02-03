import styled from "styled-components";


export const Container = styled.div `
 .carousel-item {
padding-right: 40px;
}
padding-left: 40px;
.react-multiple-carousel__arrow--left{
left: 15px;
top:  10px;
}
.react-multiple-carousel__arrow--rigth{
right: 15px;
top:  10px;
}

`;
export const Title = styled.h2 `
font-size: 32px;
padding-bottom: 12px;
color: #9558A6;
position: relative;
font-weight: 700;
text-align: center;
margin-bottom:30px;
margin-top: 20px;

&::after{
    content:"";
    position: absolute;
    width: 56px;
    height: 4px;
    background-color: #9558A6;
    bottom:0;
    left: calc(50% - 28px);
}
`;
export const ContainerItems = styled.div `
background: url('${(props) => props.imageurl}');
background-size: cover;
display: flex;
width: 100%;
padding: 20px 10px;
align-items: center;
height: 250px; 
border-radius: 20px;

p {
    color: #fff;
    background-color: rgba(0, 0, 0, 0.5);
    padding: 10px 30px;
    border-radius: 30px;
    font-size: 22.5px;
    font-weight: bold;
    margin-top: 40px;
    
}
`;



