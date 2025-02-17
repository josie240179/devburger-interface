import { createBrowserRouter } from "react-router-dom";
import { Register } from "../containers/Register";
import { Home, Login, Menu, Cart } from "../containers";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
export const router = createBrowserRouter([
    {
        path: '/',
        element: (
            <>
                <Header />
                <Home />
                <Footer />  </>
        ),
    },
    {
        path: '/Login',
        element: <Login />
    },
    {
        path: '/Cadastro',
        element: <Register />
    },
    {
        path: '/Cardapio',
        element:
            <>
                <Header />
                <Menu />
                <Footer />  </>
    },
    {
        path: '/Carrinho',
        element:
            <>
                <Cart />             
            </>
    },
]);