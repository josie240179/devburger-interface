import styled from "styled-components";
import BannerBurger from "../../assets/BannerBurger.png";
import backgroundLogin2 from "../../assets/backgroundLogin2.png";
import { Link } from "react-router-dom";

export const Container = styled.div`
width: 100%;
min-height: 100vh;
background: linear-gradient( rgba(255, 255, 255, 0.6), rgba(255, 255, 255, 0.6)),
 url('${backgroundLogin2}');
 background-size: 40%;

`;

export const Banner = styled.div`
display: flex;
height: 480px;
justify-content: center;
align-items: center;
background: url('${BannerBurger}') no-repeat;
background-position: center;
background-color: #1f1f1f;
background-size: cover;
width: 100%;
position: relative;

h1{
font-family:"Road Rage", serif;
font-size: 80px;
line-height: 65px;
color: #fff ;
position: absolute;
right: 20%;
top: 30%;

span{
    display:block;
    color: #fff;
    font-size: 20px;
}
}

`;

export const CategoryMenu = styled.div`
display: flex;
justify-content: center;
gap: 50px;
margin-top: 30px;
`;

export const CategoryButton = styled(Link)`
text-decoration: none;
cursor: pointer;
background: none;
color:${(props) => (props.$isActiveCategory ? '#9758a6' : '#696969')};
font-size: 24px;
font-weight: 500;
padding-bottom:5px;
line-height: 20px;
border: none;
border-bottom:${(props)=> props.$isActiveCategory && '3px solid #9758a6'};

`;

export const ProductsContainer = styled.div`
display: grid;
grid-template-columns: repeat(3, 1fr);
padding: 50px;
justify-content: center;
gap: 60px;
max-width: 1280px;
margin: 50px auto 0;
background: linear-gradient( rgba(255, 255, 255, 0.6), rgba(255, 255, 255, 0.6)),
 url('${backgroundLogin2}');
 background-size: 40%;
 
 
 

`;

