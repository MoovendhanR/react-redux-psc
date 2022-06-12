import { Box, Heading } from "@chakra-ui/react";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchOrders } from "../Redux/products/action";
import ProductSimple from "./ProductSimple";


function Orders(){
    const dispatch =useDispatch();
    const orders=useSelector((store)=>store.ecommerceData.orders)
    console.log(orders);

    useEffect(()=>{
        dispatch(fetchOrders())
    },[dispatch])
    return(
        <Box>
            <Heading as="h2" size="xl" textAlign="center">
             Your orders
            </Heading>
            <Box>
            {orders.map(pro=>{
                        return( 
                       <ProductSimple key={pro.id} image={pro.image} title={pro.title} price={pro.price}/>)
                    })}
            </Box>
        </Box>
    )
}

export default Orders;