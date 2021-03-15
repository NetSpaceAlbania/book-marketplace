import React from 'react';
import { Flex, 
    Image,
    Button,
    Box,
    Text,
    useColorModeValue,
    SimpleGrid,
    GridItem,
    chakra,
    Stack,
    FormControl,
    FormLabel,
    InputGroup,
    InputLeftAddon,
    Input,
    Textarea,
    FormHelperText,
    Icon,
    VisuallyHidden,
    Heading,
    FormErrorMessage,
    Link,
    Divider,
} from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";

import {
    Formik,
    Field,
    Form
  } from "formik";

const CreateListings = () => {

    const signin = (email, password) => {
        console.log(email, password)
    }

    return (
        <Box bg="#F7FAFC">
            <Flex m="auto" flexDir="column" pt="50px" w="700px">
                <Text alignSelf="flex-start" fontWeight="semibold" fontSize="2xl" marginTop={4}>Krijo nje njoftim</Text>
                
                    <Flex w="700px"
                    
                    bg="white" 
                    border="1px solid #D4D4D4" 
                    boxShadow="0px 2px 3px rgba(0, 0, 0, 0.1)"
                    borderRadius="lg"
                    my="15px"
                    >
                        <Flex m="30px" align="center" w="inherit" justify="space-between">
                            {/* <chakra.form
                            action="#"
                            method="POST"
                            shadow="base"
                            rounded={[null, "md"]}
                            overflow={{ sm: "hidden" }}
                            >
                                <Stack
                                    bg={useColorModeValue("white", "gray.700")}
                                    spacing={6}
                                    p={{ sm: 6 }}
                                >
                                    <SimpleGrid columns={3} spacing={6}>
                                    <FormControl as={GridItem} colSpan={[3, 2]}>
                                        <FormLabel
                                        fontSize="sm"
                                        fontWeight="md"
                                        color={useColorModeValue("gray.700", "gray.50")}
                                        >
                                        Website
                                        </FormLabel>
                                        <InputGroup size="sm">
                                        <InputLeftAddon
                                            children="http://"
                                            bg={useColorModeValue("gray.50", "gray.800")}
                                            color={useColorModeValue("gray.500", "gay.50")}
                                            rounded="md"
                                        />
                                        <Input
                                            type="tel"
                                            placeholder="www.example.com"
                                            focusBorderColor="brand.400"
                                            rounded="md"
                                        />
                                        </InputGroup>
                                    </FormControl>
                                    </SimpleGrid>

                                    <div>
                                    <FormControl id="email" mt={1}>
                                        <FormLabel
                                        fontSize="sm"
                                        fontWeight="md"
                                        color={useColorModeValue("gray.700", "gray.50")}
                                        >
                                        About
                                        </FormLabel>
                                        <Textarea
                                        placeholder="you@example.com"
                                        mt={1}
                                        rows={3}
                                        shadow="sm"
                                        focusBorderColor="brand.400"
                                        fontSize={{ sm: "sm" }}
                                        />
                                        <FormHelperText>
                                        Brief description for your profile. URLs are hyperlinked.
                                        </FormHelperText>
                                    </FormControl>
                                    </div>

                                    <FormControl>
                                    <FormLabel
                                        fontSize="sm"
                                        fontWeight="md"
                                        color={useColorModeValue("gray.700", "gray.50")}
                                    >
                                        Cover photo
                                    </FormLabel>
                                    <Flex
                                        mt={1}
                                        justify="center"
                                        px={6}
                                        pt={5}
                                        pb={6}
                                        borderWidth={2}
                                        borderColor={useColorModeValue("gray.300", "gray.500")}
                                        borderStyle="dashed"
                                        rounded="md"
                                    >
                                        <Stack spacing={1} textAlign="center">
                                        <Icon
                                            mx="auto"
                                            boxSize={12}
                                            color={useColorModeValue("gray.400", "gray.500")}
                                            stroke="currentColor"
                                            fill="none"
                                            viewBox="0 0 48 48"
                                            aria-hidden="true"
                                        >
                                            <path
                                            d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                                            strokeWidth="2"
                                            strokLeineCap="round"
                                            strokeLineJoin="round"
                                            />
                                        </Icon>
                                        <Flex
                                            fontSize="sm"
                                            color={useColorModeValue("gray.600", "gray.400")}
                                            alignItems="baseline"
                                        >
                                            <chakra.label
                                            for="file-upload"
                                            cursor="pointer"
                                            rounded="md"
                                            fontSize="md"
                                            color={useColorModeValue("brand.600", "brand.200")}
                                            pos="relative"
                                            _hover={{
                                                color: useColorModeValue("brand.400", "brand.300"),
                                            }}
                                            >
                                            <span>Upload a file</span>
                                            <VisuallyHidden>
                                                <input
                                                id="file-upload"
                                                name="file-upload"
                                                type="file"
                                                />
                                            </VisuallyHidden>
                                            </chakra.label>
                                            <Text pl={1}>or drag and drop</Text>
                                        </Flex>
                                        <Text
                                            fontSize="xs"
                                            color={useColorModeValue("gray.500", "gray.50")}
                                        >
                                            PNG, JPG, GIF up to 10MB
                                        </Text>
                                        </Stack>
                                    </Flex>
                                    </FormControl>
                                </Stack>
                                
                            </chakra.form> */}
                                <Formik 
                                initialValues={{ email: '', password: '' }}
                                onSubmit={e => {
                                    const { email, password } = e;

                                    signin(email, password);
                                }}
                                validate={values => {
                                    const errors = {};

                                    return errors;
                                }}
                                >
                                {() => (
                                    <Form method="POST">
                                        <Flex textAlign='left' flexDir="column">
                                            <Field name="email">
                                                {({field, form}) => (
                                                    <FormControl mt={4} isInvalid={form.errors.email && form.touched.email} isRequired>
                                                        <FormLabel>Email</FormLabel>
                                                        <Input {...field} id="email" type='email' placeholder='Vendosni adresen tuaj te emailit' />
                                                        <FormErrorMessage>{form.errors.email}</FormErrorMessage>
                                                    </FormControl>
                                                )}
                                            </Field>

                                            <Field name="password">
                                                {({field, form}) => (
                                                    <FormControl mt={4} isInvalid={form.errors.password && form.touched.password} isRequired>
                                                        <FormLabel>Fjalkalimin</FormLabel>
                                                        <Input {...field} id="password" type='password' placeholder='Vendosni fjalkalimin tuaj' />
                                                        <FormErrorMessage>{form.errors.password}</FormErrorMessage>
                                                    </FormControl>
                                                )}
                                            </Field>
                                            <Button type='submit' colorScheme="blue" variant="solid" width='full' >Identifikohu</Button>
                                            <Flex align="center">
                                                <Divider my={8}/>
                                                <Text fontSize={16} color="gray.400" mx={6}>ose</Text>
                                                <Divider my={8}/>
                                            </Flex>
                                            <Link to="/signup">
                                                <Button colorScheme="blue" variant="outline" width='full' >Regjistrohu</Button>
                                            </Link>
                                        </Flex>
                                        {/* <pre>{JSON.stringify(values, null, 2)}</pre>
                                        <pre>{JSON.stringify(errors, null, 2)}</pre> */}
                                        <Box
                                px={{ base: 4, sm: 6 }}
                                py={3}
                                bg={useColorModeValue("gray.50", "gray.900")}
                                textAlign="right"
                                    >
                                    
                                    </Box>
                                    <Box bg={useColorModeValue("gray.50", "inherit")} p={10}>
                                    <Box>
                                        <SimpleGrid
                                        display={{ base: "initial", md: "grid" }}
                                        columns={{ md: 3 }}
                                        spacing={{ md: 6 }}
                                        >
                                        <GridItem mt={[5, null, 0]} colSpan={{ md: 2 }}>

                                        </GridItem>
                                        </SimpleGrid>
                                    </Box>
                                </Box>
                                    </Form>
                                    
                                )}
                                
                            </Formik>
                        </Flex>
                        
                    </Flex>

            </Flex>

            {/* CHOC CODE */}

            
        </Box>
    )
}

export default CreateListings

