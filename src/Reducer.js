export const initialState= {
    basket: [],
    user:null,
};
export const getBasketTotal=(
    // read on using reduce function
basket)=>basket?.reduce((amount,item)=>item.price+amount,0);

function reducer(state,action){
    console.log(action)
    switch(action.type){ 
        case 'ADD_TO_BASKET':
            // ADD ITEM TO BASKET LOGIC
            return{
                ...state, //we return the normal state with the changes to the object we wanna effect(basket)
                basket: [...state.basket,action.item],//i.e the normal basket state , plus new item to be added
            }
            break;
        case 'REMOVE_FROM_BASKET':
            // logic to remove item from basket
            // first we clone the present state of basket
            let newBasket=[...state.basket];
            // then we find the index of the item in the basket with the same id as the one we wanna delete
            const index=state.basket.findIndex((basketitem)=>basketitem.id===action.id);
            // then we remove the item from the basket using the index
            if(index >= 0){
                // item exits in basket remove it
                newBasket.splice(index,1);//the 1 is the number of elements to be removed an index is the position of item to be removed
            }
            else{
                console.warn(
                    'cant find product id :(${action.id})'
                )
            }

            return{...state,
            basket:newBasket,//it returns the state but with basket modified
            }
            break;
        default:
            return state;
    }
}
export default reducer;