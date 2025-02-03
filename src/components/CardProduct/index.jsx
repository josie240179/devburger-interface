import propTypes from "prop-types"
import { Container, CardImage } from "./styles";
import CartButton  from "../CartButton";
import { formatPrice } from "../../utils/formatPrice";

export function CardProduct({product}) {

    return(
        <Container>
            <CardImage src={product.url} alt={product.name}/>

            <div>
            <p>{product.name}</p>
            <strong>{formatPrice (product.price)}</strong>

            </div>
           <CartButton/>
        </Container>
    );
}
CardProduct.propTypes={
    product: propTypes.object,
};