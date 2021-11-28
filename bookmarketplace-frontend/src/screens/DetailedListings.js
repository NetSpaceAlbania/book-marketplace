import React from 'react';
import { Flex, 
    Image,
    Button,
    Box,
    Text
} from "@chakra-ui/react";
import { WarningIcon, QuestionIcon, TriangleDownIcon } from "@chakra-ui/icons";
import { useGetDetailedListingQuery } from '../redux/services/api/listings';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';


const DetailedListings = () => {

    let { bookId } = useParams();
    const {data, error, isLoading} = useGetDetailedListingQuery(bookId);

    const listings = useSelector(state => state.listings.listings);

    const librat = [1,2,3,4];

    return (
        <>
            {isLoading ? (<div>Loading...</div>) : (
                <Box bg="#F7FAFC">
                        <Flex justify="space-evenly" pt="50px">
                            
                            <Flex flexDir="column" justify="space-between">
                                <Image w="600px" h="450px" border="1px solid #D4D4D4" 
                                src="gibbresh.png" 
                                fallbackSrc="https://via.placeholder.com/600x450" 
                                borderRadius="lg"
                                />
                                <Flex justify="space-between">
                                    <Image border="1px solid #D4D4D4" 
                                    src="gibbresh.png" 
                                    fallbackSrc="https://via.placeholder.com/80x60" 
                                    borderRadius="lg"
                                    />
                                    <Image border="1px solid #D4D4D4" 
                                    src="gibbresh.png" 
                                    fallbackSrc="https://via.placeholder.com/80x60" 
                                    borderRadius="lg"
                                    />
                                    <Image border="1px solid #D4D4D4" 
                                    src="gibbresh.png" 
                                    fallbackSrc="https://via.placeholder.com/80x60" 
                                    borderRadius="lg"
                                    />
                                    <Image border="1px solid #D4D4D4" 
                                    src="gibbresh.png" 
                                    fallbackSrc="https://via.placeholder.com/80x60" 
                                    borderRadius="lg"
                                    />
                                    <Button colorScheme="blue" variant="link">
                                        <Flex flexDir="column" justify="space-evenly" align="center">
                                            <WarningIcon boxSize={6} color="blue.600" />
                                            Raporto njoftimin
                                        </Flex>
                                    </Button>
                                </Flex>
                                
                            </Flex>

                            <Flex w="550px"
                            h="555px" 
                            bg="white" 
                            border="1px solid #D4D4D4" 
                            boxShadow="0px 2px 3px rgba(0, 0, 0, 0.1)"
                            borderRadius="lg"
                            >
                                <Flex m="50px" flexDir="column" justify="space-between" w="full">
                                    <Text fontSize="3xl">{data.title}</Text>
                                    <Text fontWeight="semibold" fontSize="3xl">{data.price}</Text>
                                    <Text fontSize="md">{data.description}</Text>
                                    <Text alignSelf="center" fontWeight="semibold" fontSize="2xl" marginTop={4}>Emri</Text>
                                    <Text alignSelf="center" fontWeight="semibold" fontSize="2xl">Numri</Text>
                                    <Flex alignSelf="center" marginBottom={4}>
                                        <QuestionIcon mx={4} boxSize={8} color="blue.600" />
                                        <QuestionIcon mx={4} boxSize={8} color="blue.600" />
                                        <QuestionIcon mx={4} boxSize={8} color="blue.600" />
                                    </Flex>
                                    <Flex justifyContent="space-between">
                                        <Text fontSize="xl"><TriangleDownIcon mx={4} boxSize={6} color="blue.600" />Tirana</Text>
                                        <Text fontSize="xl">15:30 28/10/2020</Text>
                                    </Flex>

                                </Flex>
                            </Flex>
                        </Flex>

                        <Box my="50px" mx="auto" alignSelf="center" w="80%" borderBottom="1px solid #D4D4D4"></Box>

                        {listings === null ? <></> : 
                            <Flex justifyContent="center" alignItems="center" w="full" flexDir="column">
                                <Flex justifyContent="space-around" wrap="wrap" w="90%">
                                    {listings.slice(0,4).map(e => <Box borderWidth="1px" borderRadius="lg" w="300px" h="500px" bg="white" my="5" key={e}>
                                        <Image src="https://via.placeholder.com/300x400" alt="https://via.placeholder.com/300x400" borderTopRadius="lg" cursor="pointer"/>
                                        <Box m="6" cursor="pointer">
                                            <Box fontWeight="semibold" as="h4" isTruncated>
                                                <Text fontSize="xl" >{e.title}</Text>
                                            </Box>
                                            <Box>
                                                <Text fontSize="xl">ALL {e.price}</Text>
                                            </Box>
                                        </Box>
                                    </Box>)}
                                </Flex>
                            </Flex>
                        }  
                </Box>
            )}
        </>
    )
}

export default DetailedListings



