import {
    ADD_TO_CART,
    SHOW_PRODUCTS_IN_CART,
    HIDE_PRODUCTS_IN_CART,
    REMOVE_PRODUCT_FROM_CART,
} from "./Cart.types";
import cartInitialstate from "./Cart.initialstate";

const cartReducer = (state = cartInitialstate, action) => {
    switch (action.type) {
        /* never changing cart, always in a new object overwriting existing property*/
        case ADD_TO_CART:
            return { ...state, products: [...state.products, action.payload] };
        case SHOW_PRODUCTS_IN_CART:
            return { ...state, show_products: true };
        case HIDE_PRODUCTS_IN_CART:
            return { ...state, show_products: false };
        case REMOVE_PRODUCT_FROM_CART: {
            const products = state.products.filter(
                (product) => product.id !== action.payload
            );
            return { ...state, products };
        }
        default:
            return state;
    }
};

export default cartReducer;