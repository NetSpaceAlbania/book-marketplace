import React from 'react';
import { Box,
    Select,
    Flex,
    Text,
    Image
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

import libri from '../../assets/libri1.jpg';

const Listings = ({listings = []}) => {

    const navigate = useNavigate();

    const [sort, setSort] = React.useState(2);

    const handleClick = (e) => {
        navigate(e);
    }

    return (
        <Flex justifyContent="center" alignItems="center" w="full" flexDir="column">
            <Flex w="80%" justifyContent="space-between" alignItems="center" h={16} borderBottom="1px solid #D4D4D4">
                <Text fontSize="2xl" fontWeight="500">11 Libra</Text>
                <Flex alignItems="center">
                    <Text fontSize="lg" fontWeight="400" color="gray.500" w="150px">
                        Listo sipas:
                    </Text>
                    <Select placeholder=" " bg="white">
                        <option value={1} key={1} onchange>Dates: Me te rejat</option>
                        <option value={2} key={2}>Cmimit: Me te lirat</option>
                    </Select>
                </Flex>
            </Flex>
            <Flex justifyContent="space-around" wrap="wrap" w="90%">
                {listings.map(e => <Box borderWidth="1px" borderRadius="lg" w="300px" h="500px" bg="white" my="5" key={e.id} onClick={() => handleClick(e.id)}>
                    <Image src={libri} alt={libri} borderTopRadius="lg" cursor="pointer"/>
                    <Box m="6" cursor="pointer">
                        <Box fontWeight="semibold" as="h4" isTruncated>
                            <Text fontSize="xl">{e.title}</Text>
                        </Box>
                        <Box>
                            <Text fontSize="xl">ALL {e.price}</Text>
                        </Box>
                    </Box>
                </Box>)}
            </Flex>
        </Flex>
    )
}

export default Listings
