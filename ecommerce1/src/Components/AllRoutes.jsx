import React from "react";
import {Routes,Route} from "react-router-dom";
import Cart from "../Pages/Cart";
import HomePage from "../Pages/HomePage";
import Orders from "../Pages/Order";
import Product from "../Pages/Product";
import Products from "../Pages/Products";
import AuthWrapper from "./AuthWrapper";
import Login from "./Login";

const AllRoutes=()=>{
    return(
        <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/products" element={<Products/>}/>
        <Route path="/products/:id" element={<Product/>}/>
        <Route path="/cart" element={<AuthWrapper><Cart/></AuthWrapper>}/>
        <Route path="/orders" element={<Orders/>}/>
        <Route path="/login" element={<Login/>}/>
        </Routes>
    )
}

export default AllRoutes;