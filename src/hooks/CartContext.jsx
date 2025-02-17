import { useContext, createContext, useEffect, useState } from "react";

const CartContext = createContext(); 

// eslint-disable-next-line react/prop-types
export const CartProvider = ({children}) => {

const [cartProducts, setCartProducts] = useState([]);

const putProductInCart = (product) => {
 const cartIndex = cartProducts.findIndex((prd) => prd.id === product.id);

 let newProductsInCart = [];
 if (cartIndex >= 0) {
    newProductsInCart = cartProducts;

    newProductsInCart[cartIndex].quantity += 1;
    setCartProducts(newProductsInCart);
 } else {
    product.quantity = 1;
    newProductsInCart = [...cartProducts, product];
    setCartProducts(newProductsInCart);
 }
 updateLocalStorage(newProductsInCart);
};
// para verificar se apertando o botao dos produtos, 
// se os itens estao sendo acrescentados e suas quantidades:
//useEffect(() => {
//    console.log(cartProducts);
//     }, [cartProducts]);


const clearCart = () => {
setCartProducts([]);

updateLocalStorage([]);
};

const deleteProduct = (productId) => { //para deletar produto do carrinho
  const newCart = cartProducts.filter((prd)=> prd.id !== productId);

  setCartProducts(newCart);
  updateLocalStorage(newCart);
};

const increaseProduct = (productId) => { //para acrescentar produto no carrinho
   const newCart = cartProducts.map((prd) => {
    return prd.id === productId ? { ...prd, quantity: prd.quantity + 1} : prd;
   });
   setCartProducts(newCart);
   updateLocalStorage(newCart);
};

const decreaseProduct = (productId) => { //para subtrair a quantidade do mesmo produto no carrinho
    const cartIndex = cartProducts.findIndex((prd) => prd.id === productId);

    if (cartProducts[cartIndex].quantity > 1) {
        const newCart = cartProducts.map((prd) => {
            return prd.id === productId ? { ...prd, quantity: prd.quantity - 1} : prd;
           });

           setCartProducts(newCart);
           updateLocalStorage(newCart);
    } else { 
        deleteProduct(productId);

    }
    
};
function updateLocalStorage(products) {
    localStorage.setItem('devburger:cartInfo', JSON.stringify(products));
}

useEffect (()=> {
    const loadProducts = localStorage.getItem('devburger:cartInfo');
    if(loadProducts ) {
        setCartProducts(JSON.parse(loadProducts));
    }
}, []);

return ( <CartContext.Provider
 value={{cartProducts, putProductInCart, 
 clearCart, decreaseProduct, increaseProduct, deleteProduct}}>

    {children}
</CartContext.Provider>

)};

export const UseCart = () => {
    const context = useContext(CartContext);

    if (!context) {
       throw new Error('UseCart must be used with a context')
    }
    return context;
}

