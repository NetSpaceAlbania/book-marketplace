import React from 'react';
import { Heading,
    InputGroup,
    InputLeftElement,
    Button,
    Input,
    Flex
} from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons"

const NavBM = () => {
    return (
        <Flex bg="white" pos="sticky" top="0" z-index="1" borderBottom="1px solid #CED4DA" w="100%" h="80px" justify="space-around" align="center">
            <Heading>Book Marketplace</Heading>
            <Flex w="35%">
                <InputGroup>
                    <InputLeftElement
                    pointerEvents="none"
                    children={<SearchIcon color="gray.400" />}
                    />
                    <Input placeholder="Search" mr={3} />
                </InputGroup>
                <Button colorScheme="blue" variant="outline">Search</Button>
            </Flex>
            <Button colorScheme="blue" variant="solid">
            + Krijo nje njoftim
            </Button>
        </Flex>
    )
}

export default NavBM;
