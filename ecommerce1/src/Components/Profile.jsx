import { Avatar, Button, Flex, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import React from "react";

function Profile(){
    return(
         <Flex>
             <Menu>
                 <MenuButton 
                 as={Button}
                rounded="full"
                variant="link"
                cursor="pointer"
                minW={0} 
                 >
                 <Avatar src="https://i.pravatar.cc/300"/>
                 </MenuButton>
                 <MenuList zIndex={100000}>
                     <MenuItem>Cart</MenuItem>
                     <MenuItem>Your Orders</MenuItem>
                     <MenuItem>Login</MenuItem>
                     <MenuItem>Logout</MenuItem>
                     {/* <MenuItem>Delete</MenuItem>
                     <MenuItem>Attend a Workshop</MenuItem> */}

                 </MenuList>
             </Menu>

         </Flex>
    )
}
export default Profile;