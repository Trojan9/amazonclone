import React from 'react';
import Star from '@material-ui/icons/Star';
import './Checkout.css';
import { useStateValue } from './StateProvider';

function Checkoutproduct({id,image,title,rating,price}) {
    const[{basket},dispatch] = useStateValue();
    const removeFromBasket=()=>{
        // remove item from basket
        dispatch({
            type:"REMOVE_FROM_BASKET",
            id:id,
        });
    };
    return (
        <div className="checkoutproduct">
            <img className="checkoutproduct__image"
            src={image}
            alt=""
            ></img>
        <div className="checkoutproduct__info"> 
            <p className="checkoutproduct__title">{title}</p>
            <p className="checkoutproduct__price">
                <small className="checkoutproduct__dollar">$</small>        {/*this enables us to write the money sign with the price*/}
                <strong>{price}</strong>
            </p>
            <div className="checkoutproduct__star">
                {/*to run the product star we use this code ,but we can check online for other ways to run it*/}
                {Array(rating)
                    .fill()
                    .map((_)=>(
                    <p><Star></Star>
                    </p>
                ))}
            </div>
            <button onClick={removeFromBasket}>Remove from basket</button>

        </div>
        </div>
    )
}

export default Checkoutproduct
