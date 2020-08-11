import React from 'react'
import './Header.css';
import {Link} from 'react-router-dom';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket'
// to use the react context api we import the {useStateValue} from stateprovider
import { useStateValue } from './StateProvider';



function Header() {
    // then we initialize and destructure the object here
    //const [state,dispatch]=useStateValue(); we get state and dispatch but we destructure state to access basket
    const [{basket}]=useStateValue();{/* the dispatch is used to add and remove items from the state*/}
    return (
        <nav className="header"> {/*<nav> means navigation bar i.e like appbar in flutter*/}
            {/*logo on the left side */}
            {/*search box*/}
            {/*3 links*/}
            {/*order basket with numbers*/}
           <Link to='/'>{/*makes the image clickable*/}
           <img className="header__logo" src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"></img>
           </Link> 
           <div className="header__search">
           <input type="text" className="header__searchInput"></input>
           {/*to add the search icon we use the material ui by installing it ,,just search material ui on google */}
            <SearchIcon  className="header__searchicon"/>
           </div>
           <div className="header__nav">
               {/*1st nav*/}
               <Link to="/Login" className="hearder__link"> 
               <div className="header__option">
                   <span className="header__optionlineone">Hello Timmy</span>
                   <span className="header__optionlinetwo">Sign In</span>
               </div>
               </Link>
                {/*2nd nav*/}
                <Link to="/"className="hearder__link"> 
               <div className="header__option">
                   <span className="header__optionlineone">Returns</span>
                   <span className="header__optionlinetwo">&Orders</span>
               </div>
               </Link>
                {/*3rd nav*/}
                <Link to="/" className="hearder__link"> 
               <div className="header__option">
                   <span className="header__optionlineone">Your</span>
                   <span className="header__optionlinetwo">Prime</span>
               </div>
               </Link>
                {/*4th nav*/}
                <Link to="/checkout" className="hearder__link">
                    <div className="header__optionbasket">
                        <ShoppingBasketIcon></ShoppingBasketIcon>
    <span className="header__optionlinetwo header__optionbaskr">{basket?.length}</span>{/*the ? prevents the page from breaking when we press the add to basket and basket is not accessible*/}
                    </div>
                </Link>
            
           </div>
        </nav>
            
    
    )
}

export default Header
