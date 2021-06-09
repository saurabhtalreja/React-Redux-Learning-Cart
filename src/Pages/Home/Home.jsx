import React,{useEffect} from "react";
import {Box} from "@material-ui/core";
import {useDispatch} from "react-redux";
import ProductsGrid from "../../components/ProductsGrid/ProductsGrid.controller";
import { fetchProducts } from "../../actions/products.actions";

function Home(props) {
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(fetchProducts())
    })
    return (
        <Box>
            <ProductsGrid />
        </Box>
    );
}

export default Home;