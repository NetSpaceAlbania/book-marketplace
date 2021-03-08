import React from 'react';
import { Flex, 
    Image,
    Button,
    Box,
    Text,
    AlertDialog,
    AlertDialogBody,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogContent,
    AlertDialogOverlay,
    AlertDialogCloseButton,
} from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";

const MyListings = () => {

    const lista = [1,2,3,4];

    const [isOpen, setIsOpen] = React.useState(false);
    const onClose = () => setIsOpen(false);
    const cancelRef = React.useRef();


    return (
        <Box bg="#F7FAFC">
            <Flex m="auto" flexDir="column" pt="50px" w="700px">
                <Text alignSelf="flex-start" fontWeight="semibold" fontSize="2xl" marginTop={4}>Njoftimet e mia</Text>

                {lista.map(e =>
                    <Flex w="700px"
                    h="150px" 
                    bg="white" 
                    border="1px solid #D4D4D4" 
                    boxShadow="0px 2px 3px rgba(0, 0, 0, 0.1)"
                    borderRadius="lg"
                    my="15px"
                    >
                        <Flex m="30px" align="center" w="inherit" justify="space-between" >

                            <Flex align="center">
                                <Image justifySelf="flex-start" border="1px solid #D4D4D4"
                                w="80px"
                                h="60px"
                                src="gibbresh.png" 
                                fallbackSrc="https://via.placeholder.com/80x60" 
                                borderRadius="lg"
                                />

                                <Flex mx={6} flexDir="column">
                                    <Text fontSize="xl">Lorem</Text>
                                    <Text fontSize="xl">1000 ALL</Text>
                                    <Text fontWeight="semibold" fontSize="lg"><ExternalLinkIcon boxSize={4} color="gray.600" /> 420</Text>
                                </Flex>
                            </Flex>
                            <Flex>
                                <Button colorScheme="blue" w="150px" variant="outline">Ndrysho njoftimin</Button>
                                <Button onClick={() => setIsOpen(true)} marginLeft={7} colorScheme="red" w="150px" variant="solid">Fshij njoftimin</Button>
                            </Flex>
                        </Flex>
                    </Flex>)}
            </Flex>
            <Box>
                <AlertDialog
                        motionPreset="slideInBottom"
                        leastDestructiveRef={cancelRef}
                        onClose={onClose}
                        isOpen={isOpen}
                        isCentered
                    >
                        <AlertDialogOverlay />
                        <AlertDialogContent>
                        <AlertDialogHeader>Discard Changes?</AlertDialogHeader>
                        <AlertDialogCloseButton />
                        <AlertDialogBody>
                            Are you sure you want to discard all of your notes? 44 words will be
                            deleted.
                        </AlertDialogBody>
                        <AlertDialogFooter>
                            <Button ref={cancelRef} onClick={onClose}>
                            No
                            </Button>
                            <Button ref={cancelRef} onClick={onClose} colorScheme="red" ml={3}>
                            Yes
                            </Button>
                        </AlertDialogFooter>
                        </AlertDialogContent>
                    </AlertDialog>
            </Box>
        </Box>
    )
}

export default MyListings

