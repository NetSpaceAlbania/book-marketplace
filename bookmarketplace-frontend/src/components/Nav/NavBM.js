import React from 'react';
import { Heading,
    InputGroup,
    InputLeftElement,
    Button,
    Input,
    Flex
} from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
import { Link } from "react-router-dom";

const NavBM = () => {
    return (
        <Flex bg="white" pos="sticky" top="0" zIndex="sticky" borderBottom="1px solid #E0E0E0" w="full" h="20" justify="space-around" align="center">
            <Heading>BMPlace</Heading>
            <Flex w="35%">
                <InputGroup>
                    <InputLeftElement
                    pointerEvents="none"
                    children={<SearchIcon color="gray.400" />}
                    />
                    <Input placeholder="Kerko" mr={3} />
                </InputGroup>
                <Button colorScheme="blue" variant="outline">Kerko</Button>
            </Flex>
            <Link to="/signin">
                <Button colorScheme="blue" variant="solid">
                + Krijo nje njoftim
                </Button>
            </Link>
        </Flex>
    )
}

export default NavBM;
