import {applyMiddleware, createStore} from "redux";
import thunk from "redux-thunk";
import {composeWithDevTools} from "redux-devtools-extension";
import rootReducer from "./rootReducer";

/* Creates a central state management here,
* rootReducer is a combination of all the reducers used
* composedWithDevTools give us a good debugging in browser if installed thunk extension
* applyMiddleware is used to manage async/await with dispatch
* here middleware is thunk
*
* Flow
* To fetch/update data we do a dispatch(action)
* action has type and payload in it which is used by reducer to identify
* this action goes to all reducer with state, which is a pure function
* reducer identifies the proper action with matching its type
* now reducer return new state, doesn't modify existing one returns new object
* this is turn is managed here in store. */
const store = createStore(rootReducer,composeWithDevTools(applyMiddleware(thunk)));
export default store;