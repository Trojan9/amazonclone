import React from 'react'
import './product.css';
import Star from '@material-ui/icons/Star';
import {useStateValue} from './StateProvider';

function Product ({id,image,title,rating,price}) /*destructure the props*/{
    const[{basket},dispatch] = useStateValue();
    const addToBasket = () => {
        // add item to basket
        dispatch({
            type:"ADD_TO_BASKET",
            item: {
            id:id,
            title:title,
            price:price,
            image:image,
            rating:rating,
        },
    })
    };
   
    return (
        <div className="product">
            <div className="product__info">
            <p>{title}</p>
            <p className="product__price">
                <small>$</small>        {/*this enables us to write the money sign with the price*/}
                <strong>{price}</strong>
            </p>
            <div className="product__star">
                {/*to run the product star we use this code ,but we can check online for other ways to run it*/}
                {Array(rating)
                    .fill()
                    .map((_)=>(
                    <p><Star></Star>
                    </p>
                ))}
            </div>

            </div>
            
            <img src={image} alt="" className="product__image"></img>
            <button onClick={addToBasket}>Add to basket</button>
        </div>
    )
}

export default Product
