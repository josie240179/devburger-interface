import styled from "styled-components";

export const ProductImage = styled.img`
height: 90px;
width: 90px;
border-radius: 10px;
`;
export const ButtonGroup = styled.div`
display: flex;
align-items: center;
gap: 12px;
button{
    display:flex;
    align-items: center;
    justify-content: center;
    height:30px;
    width:30px;
    color: #fff;
    background-color: #9758a6;
    border-radius: 4px;

    &:hover{
        background-color: #6f357c;
    }
}
`;
export const EmptyCart = styled.p`
font-size: 20px;
text-align: center;
font-weight: bold;
`;
export const ProductTotalPrice = styled.p`
font-weight: bold;
`;
export const TrashImage = styled.img`
height: 20px;
width: 20px;
cursor: pointer;
color: #ff3205;
`