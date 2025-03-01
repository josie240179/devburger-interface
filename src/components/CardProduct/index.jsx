import propTypes from "prop-types"
import { UseCart } from "../../hooks/CartContext";
import { Container, CardImage } from "./styles";
import CartButton  from "../CartButton";


export function CardProduct({product}) {
const {putProductInCart} = UseCart();
    return(
        <Container>
            <CardImage src={product.url} alt={product.name}/>

            <div>
            <p>{product.name}</p>
            <strong>{ product.currencyValue}</strong>

            </div>
           <CartButton onClick={()=> putProductInCart(product)}></CartButton>
        </Container>
    );
}
CardProduct.propTypes={
    product: propTypes.object,
};