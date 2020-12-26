import React from 'react';
import { Box,
    Select,
    Flex,
    Text,
    Image
} from "@chakra-ui/react";

import libri from '../../assets/libri1.jpg';

const Listings = () => {

    const librat = [1,2,3,4,5,6,7,8,9,10,11];

    return (
        <Flex justifyContent="center" alignItems="center" w="full" flexDir="column">
            <Flex w="80%" justifyContent="space-between" alignItems="center" h={16} borderBottom="1px solid #D4D4D4">
                <Text fontSize="2xl" fontWeight="500">11 Libra</Text>
                <Flex alignItems="center">
                    <Text fontSize="lg" fontWeight="400" color="gray.500" w="150px">
                        Listo sipas:
                    </Text>
                    <Select placeholder="Dates: Me te rejat" bg="white">
                        <option value={2} key={2}>Cmimit: Me te lirat</option>
                    </Select>
                </Flex>
            </Flex>
            <Flex justifyContent="space-around" wrap="wrap" w="90%">
                {librat.map(e => <Box borderWidth="1px" borderRadius="lg" w="300px" h="500px" bg="white" my="5" key={e}>
                    <Image src={libri} alt={libri} borderTopRadius="lg" cursor="pointer"/>
                    <Box m="6" cursor="pointer">
                        <Box fontWeight="semibold" as="h4" isTruncated>
                            <Text fontSize="xl" >Matematika 1</Text>
                        </Box>
                        <Box>
                            <Text fontSize="xl">ALL 1500</Text>
                        </Box>
                    </Box>
                </Box>)}
            </Flex>
        </Flex>
    )
}

export default Listings
