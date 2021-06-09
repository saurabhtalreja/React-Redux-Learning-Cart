import {combineReducers} from "redux";
import productsReducer from "./reducers/products.reducers";
import cartReducer from "./components/Cart/Cart.reducer";

const rootReducer = combineReducers({
    products:productsReducer,
    cart:cartReducer
})

export default rootReducer