import { Container,
         Banner, 
         Title,
        Content,
        
       
    } from "./styles";
    import {CartItems} from '../../components/index'
import Logo from '../../assets/logo.png';

export function Cart(){
    return(
        <Container>
            <Banner>
            <img src={Logo} alt="logo devburguer"/>
            </Banner>
            <Title>Chekout - Pedido </Title>
            <Content>
              <CartItems /> 
             {/* <CartResume /> */}
            </Content>
        </Container>
    );
}