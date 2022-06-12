import {
    Flex,
    Box,
    FormControl,
    FormLabel,
    Input,
    Checkbox,
    Stack,
    Link,
    Button,
    Heading,
    Text,
    useColorModeValue,
  } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import { signIn} from '../Redux/auth/action';
  
  export default function Login() {
    const dispatch=useDispatch(); 
    const location=useLocation();
    const authStatus=useSelector(store=>store.authReducer.auth)

    console.log(location)
    const navigate=useNavigate()
    const [userEmail,setUserEmail] =useState('eve.holt@reqres.in');
    const [userPassword,setUserPassword]=useState('');

    const handleUserEmailChange =(e)=>{
      setUserEmail(e.target.value);
    }

    const handleUserPasswordChange=(e)=>{
      setUserPassword(e.target.value);
    }
  const submitHandler = (e)=>{
       e.preventDefault();
       dispatch(signIn({email: userEmail, password: userPassword}))
  }

    useEffect(()=>{
      if(location?.state && authStatus){
        navigate(location.state,{replace:true});
      }
    },[location?.state,navigate,{replace:true}])


    // console.log(userEmail,userPassword)
    return (
      <Flex
        minH={'100vh'}
        align={'center'}
        justify={'center'}
        bg={useColorModeValue('gray.50', 'gray.800')}>
        <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
          <Stack align={'center'}>
            <Heading fontSize={'4xl'}>Sign in to your account</Heading>
            <Text fontSize={'lg'} color={'gray.600'}>
              to enjoy all of our cool <Link color={'blue.400'}>features</Link> ✌️
            </Text>
          </Stack>
          <Box
            rounded={'lg'}
            bg={useColorModeValue('white', 'gray.700')}
            boxShadow={'lg'}
            p={8}>
            <Stack spacing={4}>
              <form onSubmit={submitHandler}>
              <FormControl id="email" isRequired>
                <FormLabel>Email address</FormLabel>
                <Input type="email" value={userEmail} onChange={handleUserEmailChange} />
              </FormControl>
              <FormControl id="password" isRequired>
                <FormLabel>Password</FormLabel>
                <Input type="password" value={userPassword} onChange={handleUserPasswordChange} />
              </FormControl>
              <Stack spacing={10}>
                <Stack
                  direction={{ base: 'column', sm: 'row' }}
                  align={'start'}
                  justify={'space-between'}>
                  <Checkbox>Remember me</Checkbox>
                  <Link color={'blue.400'}>Forgot password?</Link>
                </Stack>
                <Button
                  bg={'blue.400'}
                  color={'white'}
                  _hover={{
                    bg: 'blue.500',
                  }}
                  // onClick={submitHandler}
                  type="submit"
                  >
                  Sign in
                </Button>
              </Stack>
            </form>
            </Stack>
          </Box>
        </Stack>
      </Flex>
    );
  }