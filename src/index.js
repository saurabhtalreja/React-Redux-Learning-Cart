import React from 'react';
import * as ReactDOM from "react-dom";
import {ThemeProvider} from "@material-ui/core";
import App from "./App";
import CssBaseline from "@material-ui/core/CssBaseline";
import { BrowserRouter } from "react-router-dom";
import theme from './theme'
ReactDOM.render(
    <ThemeProvider theme={theme}>
        <CssBaseline />
        <BrowserRouter>
            <App />
        </BrowserRouter>

    </ThemeProvider>, document.getElementById("root")
)
