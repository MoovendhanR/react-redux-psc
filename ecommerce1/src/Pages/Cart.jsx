import { Box, Button,useColorModeValue,Heading, Image, Stack, Text } from "@chakra-ui/react";
import React from "react";
import {DeleteIcon} from '@chakra-ui/icons'
import {useDispatch, useSelector} from "react-redux"
import { addOrder, deleteProductCart } from "../Redux/products/action";
import CheckOut from "../Components/Checkout";

//const image =  'https://images.unsplash.com/photo-1518051870910-a46e30d9db16?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1350&q=80';
const Cart=()=>{
    let cart=useSelector((store)=>store.ecommerceData.cart)
    const dispatch=useDispatch();
    const removeProduct = (id)=>{
         dispatch(deleteProductCart(id))
    };
    const checkoutHandler=()=>{
        //to add product to order
        dispatch(addOrder(cart))
    }

    return(
        <Box>
            <Heading as="h2" size="xl" textAlign="center">
                Cart
                </Heading>
                {cart.length && cart.map(product=>{
                    return <CartItem 
                     key={product.id}
                     id={product.id}
                      title={product.title} 
                      description={product.description} 
                      price={product.price} 
                      image={product.image}
                      removeProduct={removeProduct}
                      />
                })}
              
            <CheckOut cart={cart} checkoutHandler={checkoutHandler}/>
        </Box>
    )
}

function CartItem({id,title, description, price,image,removeProduct}){
    return(
        <Box border={"1px solid red"} rounded="lg" width={"fit-content"} margin="auto" marginBottom={"2rem"}>
            <Stack direction={{base:"column",md:"row"}} justifyContent="center" alignItems="center">

            <Box height={"300px"} width="300px" 
            position="relative"
            padding="0 1rem"
             _after={{
                transition: 'all .3s ease',
                content: '""',
                w: '80%',
                h: '80%',
                pos: 'absolute',
                top: "50%",
                left: "50%",
                transform: `translate(-50%,-50%)`,
                backgroundImage: `url(${image})`,
                filter: 'blur(15px)',
                zIndex: -1,
              }}>
                <Image 
                rounded={"lg"}
                height={300}
                width={300}
                objectFit={"contain"}
                src={image}
                />
            </Box>
            <Box height={"300px"} width="300px">
                <Stack p={4}>
                <Heading as="h3" size="lg">{title}</Heading>
                <Box overflow={"hidden"} whiteSpace="nowrap" >
                <Text textOverflow={"ellipsis"} width="100px">
                    {description}
                </Text>
                </Box>
                <Text 
                color={useColorModeValue("gray.900","gray.400")}
                fontWeight={300}
                fontSize={"2xl"}
                >
                    ₹{price}
                </Text>
                <Button variant={"outline"} leftIcon={<DeleteIcon/>} onClick={()=>removeProduct(id)}>Remove</Button>
                </Stack>
            </Box>
            </Stack>
        </Box>
    )
}

export default Cart;

//store the products
//remove the item from the cart