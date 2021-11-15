import React from 'react';
import { Link } from 'react-router-dom';

import { CheckCircleIcon } from "@chakra-ui/icons";

import { Heading,
    Flex,
    Button
} from "@chakra-ui/react";



const Activate = ({ verify, match }) => {

    const uid = match.params.uid;
    const token = match.params.token;

    // verify(uid, token);

    return (
        <Flex h="calc(100vh - 80px)" w="100%" align="center" justify="center">
            <Flex align="center" 
            borderWidth="1px" 
            borderRadius="lg" 
            w="400px" 
            h="600px" 
            bg="white"
            justify="space-around"
            direction="column">
                <CheckCircleIcon  color="green.500" boxSize={44} zIndex="9999"/>
                <Heading w="350px" textAlign="center" color='gray.600'>Adresa juaj u verifikua me sukses.</Heading>
                <Link to="/signin">
                    <Button type='submit' colorScheme="blue" variant="solid" width={44} >Identifikohu</Button>
                </Link>
            </Flex>
        </Flex>
    );
};

export default Activate;
