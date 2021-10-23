import React from 'react';
import { connect } from 'react-redux';
import { Link } from "react-router-dom";
import { logout } from '../../actions/auth';

import { Heading,
    InputGroup,
    InputLeftElement,
    Button,
    Input,
    Flex,
    Avatar,
    Menu,
    MenuList,
    MenuButton,
    MenuItem,
    MenuGroup,
    MenuDivider
} from "@chakra-ui/react";
import { SearchIcon, ChevronDownIcon } from "@chakra-ui/icons";

const NavBM = ({logout, isAuthenticated}) => {
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
            <Flex align="center">
                <Link to={isAuthenticated ? "/createlistings" : "/signin"}>
                    <Button colorScheme="blue" variant="solid">
                    + Krijo nje njoftim
                    </Button>
                </Link>
                {/* If authenticated show profile menu */}
                {isAuthenticated && <Menu>
                    <MenuButton >
                        <Flex mx={8} align="center" cursor="pointer">
                            <Avatar size="sm" mx={1} src="https://bit.ly/broken-link" />
                            <ChevronDownIcon color="gray.600" boxSize={8}/>
                        </Flex>
                    </MenuButton>
                    <MenuList>
                        <MenuGroup title="Llogaria ime">
                            <MenuItem>Njoftimet</MenuItem>
                            <MenuItem onClick={logout}>Shkycuni</MenuItem>
                        </MenuGroup>
                        <MenuDivider />
                        <MenuGroup title="Ndihm">
                            <MenuItem>Discord</MenuItem>
                            <MenuItem>Email</MenuItem>
                        </MenuGroup>
                    </MenuList>
                </Menu>}
            </Flex>
        </Flex>
    )
}

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps, { logout })(NavBM);
