import React from 'react';
import { useContext } from 'react';
import { CartContext } from '../../Contexts/CartContext';
import './cart.css';

const Cart = () => {
    const { myCart, total, addToCart, setTotal } = useContext(CartContext);

    return (
        <section className="cart-container">
            <div className="cart-header">CHECKOUT: </div>
            <div className="cart-item">
                {
                    myCart.slice(1).map((cart, index) => {
                        return (
                            <div className="cart-item" key={index}>
                                <img src={cart.imageUrl} className="cart-item-img" />
                                {cart.name} : {cart.price}
                            </div>
                        )
                    })
                }

                <div className="cart-total" onClick={() => {
                    setTotal(0);
                    addToCart([{}]);
                }}>{total}</div>
            </div>
        </section>
    )
}

export default Cart;