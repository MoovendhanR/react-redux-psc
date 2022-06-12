import { Box, Checkbox, CheckboxGroup, VStack, Text, MenuButton, MenuList, MenuOptionGroup, MenuItemOption, MenuDivider,Menu,Button } from "@chakra-ui/react";
import React,{useState,useEffect} from "react";
import { useDispatch } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { fetchData } from "../Redux/products/action";


const FilterComponents=()=>{
    const [searchParams,setSearchParams]=useSearchParams();
    const [categoryValues,setCategoryValues]=useState(searchParams.getAll("category")||[])//get and getall params
    const dispatch=useDispatch()
    // console.log(searchParams.get('category'))
    const categoryHandler=(value)=>{
        // console.log(value)
          setCategoryValues(value)
    }
    useEffect(() =>{
        if(categoryValues){
            setSearchParams({category:categoryValues});
            let params={
                category:searchParams.getAll("category"),
            }
            dispatch(fetchData(params));
        }
    },[categoryValues,searchParams,dispatch,setSearchParams])
    return(
  <Box>
      <Box display={{base:"none",md:"block"}} p="1rem 2rem">
          <Text fontSize="2xl">Filters</Text>
          <Text>Category</Text>
          <CheckboxGroup 
          colorScheme="green" 
          defaultValue={categoryValues} 
          onChange={categoryHandler} >
              <VStack alignItems={"baseline"}>
                  <Checkbox value="men's clothing">Men's clothing</Checkbox>
                  <Checkbox value="women's clothing">Women's clothing</Checkbox>
                  <Checkbox value="jewelery">Jewelry</Checkbox>
                  <Checkbox value="electronics">Electronics</Checkbox>
                  <Checkbox value="bags">Bags</Checkbox>
              </VStack>
          </CheckboxGroup>
      </Box>
      <Box display={{base:"block",md:"none"}} p="0rem 2rem">
          <Menu closeOnSelect={false}>
              <MenuButton as={Button} colorScheme="blue">
                  MenuItem
              </MenuButton>
              <MenuList minWidth="240px">
                  <MenuOptionGroup defaultValue="asc" title="Order" type="checkbox">
                      <MenuItemOption value="asc">Ascending</MenuItemOption>
                      <MenuItemOption value="desc">Descending</MenuItemOption>
                  </MenuOptionGroup>
                  <MenuDivider/>
                  <MenuOptionGroup title="Country" type="checkbox">
                      <MenuItemOption value="email">Email</MenuItemOption>
                      <MenuItemOption value="phone">Phone</MenuItemOption>
                      <MenuItemOption value="country">Country</MenuItemOption>
                  </MenuOptionGroup>
              </MenuList>
          </Menu>
      </Box>
  </Box>
 );
}

export default FilterComponents;