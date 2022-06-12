import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Button,
    useDisclosure,
    Text,
    Box,
    useColorModeValue,
    Flex,
    Image,
    
  } from '@chakra-ui/react'

function CheckOut({cart,checkoutHandler}) {

    const { isOpen, onOpen, onClose } = useDisclosure()
  
    return (
      <Box>
          <Button
              rounded={'none'}
              w={'full'}
              mt={8}
              size={'lg'}
              py={'7'}
              bg={useColorModeValue('gray.900', 'gray.50')}
              color={useColorModeValue('white', 'gray.900')}
              textTransform={'uppercase'}
              _hover={{
                transform: 'translateY(2px)',
                boxShadow: 'lg',
              }}
              onClick={onOpen}
              >
                  check out
            </Button>

        {/* <Button onClick={onOpen}>Open Modal</Button> */}
  
        <Modal blockScrollOnMount={false} isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Confirm Order</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              {cart.map(product=>{
                  return(
                      <Flex>
                      <Box key={product.id} mb="1rem">
                          <Image 
                          border={"1px solid black"}
                           rounded={"lg"}
                           src={product.image}
                           objectFit={"contain"} 
                           alt="product image" 
                           boxSize="100px" />
                      </Box>
                      <Box maxW={"250px"} ml="1rem">
                          <Text fontSize="lg">{product.title}</Text>
                      </Box>
                      </Flex>
                  )
              })}
            </ModalBody>
  
            <ModalFooter>
              <Button colorScheme='blue' mr={3} onClick={checkoutHandler}>
                Confirm
              </Button>
              {/* <Button variant='ghost'>Secondary Action</Button> */}
            </ModalFooter>
          </ModalContent>
        </Modal>
      </Box>
    )
  }

  export default CheckOut;