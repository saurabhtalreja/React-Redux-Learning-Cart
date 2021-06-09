import React from 'react';
import {Provider} from "react-redux";
import Header from "./components/Header/Header"
import store from './store'
import Main from "./Main";

function App(props) {
    return (
        <Provider store={store}>
            <Header/>
            <Main />
        </Provider>


    );
}

export default App;