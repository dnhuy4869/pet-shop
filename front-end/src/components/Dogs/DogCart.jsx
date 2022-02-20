import React from 'react';
import { useContext } from 'react';
import { useState } from 'react';
import { CartContext } from '../../Contexts/CartContext';

const DogCart = (props) => {
    const { id, name, breed, description, price, imageUrl } = props;

    const [isAdded, setAdded] = useState(false);

    const { addToCart, setTotal } = useContext(CartContext);

    return (
        <div>
            <div className="dogs-info">
                <p>{name}</p>
                <p>{breed}</p>
            </div>

            <div className="dogs-img-container">
                <img className="dog-img" src={imageUrl} alt="dogs" />
            </div>

            <div className="dogs-desc">
                {description}
            </div>

            <div className="dogs-price">{price}$</div>

            {
                isAdded
                    ? <button disabled className="dogs-btn-disabled">ADDED</button>
                    : <button className="dogs-btn" onClick={() => {
                        setAdded(!isAdded);
                        const newItem = {
                            name: name,
                            price: price,
                            imageUrl: imageUrl
                        };
                        addToCart((item) => [...item, newItem]);
                        setTotal((total) => total += Number(price))
                    }}>ADD TO CART</button>
            }
        </div>
    )
}

export default DogCart;