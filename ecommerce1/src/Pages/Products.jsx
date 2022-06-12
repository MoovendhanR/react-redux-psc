// import { Box, Stack } from "@chakra-ui/react";
import {
    Box,
    Center,
    useColorModeValue,
    Heading,
    Text,
    Stack,
    Image,
    Flex,
  } from '@chakra-ui/react';
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useSearchParams } from 'react-router-dom';
import FilterComponents from "../Components/FilterComponents";
import { fetchData } from "../Redux/products/action";
import ProductSimple from './ProductSimple';


// const IMAGE =
//   'https://images.unsplash.com/photo-1518051870910-a46e30d9db16?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1350&q=80';

const Products=()=>{
    const products =useSelector((store)=>store.ecommerceData.products)
    const dispatch=useDispatch();
    const [searchParams]=useSearchParams();
    useEffect(()=>{
         if(products?.length===0){
           let params={
               category:searchParams.getAll("category"),
           }
            dispatch(fetchData(params))
        }
    },[dispatch,products?.length,searchParams])
    console.log("Products",products);
    return(
        <Box>
            <Stack display={{md:"flex"}} flexDirection={{md:"row"}}>

            <Box minWidth={"15rem"}>
                <FilterComponents/>
            </Box>
            <Box>
                <Heading as="h3">Products</Heading>
                <Flex flexWrap="wrap" justifyContent="space-around">
                    {products.map(pro=>{
                        return( 
                       <ProductSimple key={pro.id} image={pro.image} title={pro.title} price={pro.price}/>)
                    })}
                </Flex>
                
            </Box>
            </Stack>

        </Box>
    )
}

export  default Products;