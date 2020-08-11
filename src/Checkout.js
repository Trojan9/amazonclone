import React from 'react'
import './Checkout.css';
import { useStateValue } from './StateProvider';
import Checkoutproduct from './Checkoutproduct';
import Subtotal from './Subtotal';

function Checkout() {
    const[{basket}] = useStateValue();
    return (
        <div className="checkout">
            <div>
            <img 
            className="checkout__ad"
            src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
            alt=""
            ></img>
            {basket?.length ===0 ? (<div>
                    <h2>Your Shopping Basket Is Empty</h2>
                    <p>You have no item in your basket.To buy one or more items,click "Add to basket" next to the item.</p>
            </div>):(<div>
                    <h2>Your Shopping Basket</h2>
                    {/*list out all of the products in basket*/}
                    {basket?.map(item=>(
                        // the ? prevents the page from breaking if basket is not accessible
                        <Checkoutproduct 
                        id={item.id}
                        title={item.title}
                        image={item.image}
                        rating={item.rating}
                        price={item.price}
                        />
                    ))}
                     </div>)}
            </div>
            <div className="checkout__div2">
                <Subtotal></Subtotal>
            </div>
            
           

            
        </div>
    )
}

export default Checkout
