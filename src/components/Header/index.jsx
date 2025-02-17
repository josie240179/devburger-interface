import {
    Container,
    Navigation,
    HeaderLink,
    Options,
    Profile,
    LinkContainer,
    Logout,
    Content
} from "./styles";

import { useNavigate, useResolvedPath } from "react-router-dom";
import {UserCircle, ShoppingCart } from '@phosphor-icons/react';
import { useUser } from '../../hooks/UserContext';

export function Header() {
    const navigate = useNavigate();
    const { logout, userInfo } = useUser();
    const { pathname} = useResolvedPath();

    function logoutUser(){
        logout();
        navigate('/Login');
    };

    return (
        <Container>
            <Content>
            <Navigation>
                <div>
                    <HeaderLink to="/" $isActive={pathname === '/'}>
                        Home
                    </HeaderLink>
                    <hr></hr>
                    <HeaderLink to="/Cardapio" $isActive={pathname === '/Cardapio'}>
                        Cardapio
                    </HeaderLink>
                </div>
            </Navigation>
            <Options>
                <Profile>
                    <UserCircle color="#fff" size={25} />
                    <div>
                        <p>Ola, <span>{userInfo.name}</span></p>
                        <Logout onClick={logoutUser}>Sair</Logout>
                    </div>
                </Profile>
                <LinkContainer>
            <ShoppingCart color="#fff" size={25}/>
               <HeaderLink to="/Carrinho">Carrinho</HeaderLink>
            </LinkContainer>
            </Options>
           
            </Content>
        </Container>
    )
}