
import React, { useState } from 'react';
import { Link, Redirect } from "react-router-dom";
import { connect } from 'react-redux';
import { reset_password } from '../redux/actions/auth';

import { Grid,
    Image,
    Heading,
    Button,
    Input,
    Flex,
    FormControl,
    Box,
    FormLabel,
    Divider,
    Text,
    useToast
} from "@chakra-ui/react";
import bookIllustation from "../assets/bookIllustation.svg";

const ResetPassword = (props) => {
    const [requestSent, setRequestSent] = useState(false);

    const toast = useToast();

    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        email: ''
    });

    const { email } = formData;

    const onChange = e => {
        setFormData({ ...formData, [e.target.id]: e.target.value });
        console.log(e.target.id);
        console.log(e.target.value);
    };

    const onSubmit = e => {
        e.preventDefault();
        
        // props.reset_password(email);

        toast({
            title: "Kerkesa u dergua.",
            description: "Kontrolloni emailin per instruksionet se si te riktheni fjalkalimin tuaj.",
            status: "success",
            duration: 5000,
            isClosable: true,
        });

        console.log("Request sent");

        setTimeout(() => {
            setRequestSent(true);
        }, 5000);
        
    };

    if (requestSent){
        return navigate('/');
    }

    return (
        <Grid templateColumns="repeat(7, 1fr)" h="calc(100vh - 80px)" >
        <Flex gridColumn="span 3" bg="#263772" alignItems="center" justifyContent="center">
            <Image boxSize="450px" src={bookIllustation} alt="bookIllustation"/>
        </Flex>
        <Flex gridColumn="span 4" bg="#F7FAFC">
            <Flex minHeight='calc(100vh - 80px)' width='full' align='center' justifyContent='center'>
                <Box 
                    borderWidth={1}
                    px={4}
                    width='full'
                    maxWidth='500px'
                    borderRadius={4}
                    textAlign='center'
                    boxShadow='md'
                    bg="white"
                >
                    <Box p={4}>
                        <form method="POST" onSubmit={e => onSubmit(e)}>
                            <Flex my={8} textAlign='left' flexDir="column">
                                <FormControl isRequired>
                                    <Heading mb={8} fontSize={40} fontWeight="500">Rikthe Fjalkalimin</Heading>
                                    <FormLabel>Email</FormLabel>
                                    <Input isRequired 
                                    onChange={e => onChange(e)}
                                    id='email' 
                                    type='email' 
                                    placeholder='Vendosni adresen tuaj te emailit'/>
                                </FormControl>

                                <Button type='submit' mt={8} colorScheme="blue" variant="solid" width='full'>Rikthe Fjalkalimin</Button>
                                <Flex align="center">
                                    <Divider my={8}/>
                                    <Text fontSize={16} color="gray.400" mx={6}>ose</Text>
                                    <Divider my={8}/>
                                </Flex>
                                <Link to="/signin">
                                    <Button colorScheme="blue" variant="outline" width='full'>Identifikohu</Button>
                                </Link>
                            </Flex>
                        </form>
                    </Box>
                </Box>
            </Flex>
        </Flex>
    </Grid>
    );
};

export default ResetPassword;
