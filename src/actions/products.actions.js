import {SET_PRODUCTS} from "../types/products.types";

/** Actions generally return an object with type & payload,
 * When an async func is called it returns a function.
 * Hence we use middleware like thunk to understand it as function*/
export const fetchProducts = () => {
    return async function (dispatch) {
        const res = await fetch("https://asos2.p.rapidapi.com/products/v2/list?country=US&currency=USD&sort=freshness&lang=en-US&sizeSchema=US&offset=0&categoryId=4209&limit=48&store=US", {
            method: "GET",
            headers: {
                "x-rapidapi-host": "asos2.p.rapidapi.com",
                "x-rapidapi-key":
                    "1949ed3468msh573f2b5adccd778p14beffjsn12e69f0cac40",
            }
        });
        const data = await res.json();

        dispatch(setProducts(data.products));
    }
}
/* It's an action creator here, which sets type and payload,
which in turn will be used by reducer to identify and update the state*/
export const setProducts = (products = null) => {
    if (products) {
        return {
            type: SET_PRODUCTS,
            payload: products,
        };
    }

    return {
        type: SET_PRODUCTS,
        payload: [],
    };
};