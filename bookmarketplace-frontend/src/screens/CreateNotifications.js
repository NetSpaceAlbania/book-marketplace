import React from 'react'
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
    InputRightAddon,
    Input,
    Textarea,
    FormHelperText,
    Icon,
    VisuallyHidden,
    Heading,
    FormErrorMessage,
    Link,
    Divider,
    Checkbox
} from "@chakra-ui/react";
import {
    Formik,
    // Label,
    Field,
    Form
  } from "formik";

function CreateNotifications() {
    return (
        <Box bg="#F7FAFC">
            <Flex m="auto" flexDir="column" pt="50px" w="700px">
                <Text alignSelf="flex-start" fontWeight="semibold" fontSize="2xl" marginTop={4}>Krijo nje njoftim</Text>
                    <Formik 
                    initialValues={{ photo:'', title: '', description: '', price: '', phoneNumber: '', whatsapp: '', viber: '', instaUsername: '' }}
                    onSubmit={e => {
                        console.log(e);
                    }}
                    // validate={values => {
                    //     const errors = {};

                    //     return errors;
                    // }}
                    >
                        <Form method="POST">
                        <Flex w="700px"
                                        bg="white" 
                                        border="1px solid #D4D4D4" 
                                        boxShadow="0px 2px 3px rgba(0, 0, 0, 0.1)"
                                        borderRadius="lg"
                                        my="15px"
                                    >
                                        <Flex m="30px" align="center" w="inherit" justify="space-between" direction="column">
                                            
                                    
                                                    <FormControl mt={4} >
                                                        <FormLabel>Vendos Fotot</FormLabel>
                                                        <input id="photo" type='file' />
                                                        <FormHelperText>Deri ne 5 foto*</FormHelperText>
                                                    </FormControl>
                                       
                                        </Flex>
                                    </Flex>


                                    <Flex w="700px"
                                        bg="white" 
                                        border="1px solid #D4D4D4" 
                                        boxShadow="0px 2px 3px rgba(0, 0, 0, 0.1)"
                                        borderRadius="lg"
                                        my="15px"
                                    >
                                        <Flex m="30px" align="center" w="inherit" justify="space-between" direction="column">
                                            <Field name="title">
                                                {({field, form}) => (
                                                    <FormControl mt={4} isInvalid={form.errors.title && form.touched.title} isRequired>
                                                        <FormLabel>Titulli</FormLabel>
                                                        <Input {...field} id="title" type='text' placeholder='' />
                                                        <FormErrorMessage>{form.errors.title}</FormErrorMessage>
                                                    </FormControl>
                                                )}
                                            </Field>

                                            <Field name="description">
                                                {({field, form}) => (
                                                    <FormControl mt={4} isInvalid={form.errors.description && form.touched.description} isRequired>
                                                        <FormLabel>Pershkrimi</FormLabel>
                                                        <Input {...field} id="description" as='textarea' h="100px" placeholder='' />
                                                        <FormErrorMessage>{form.errors.description}</FormErrorMessage>
                                                    </FormControl>
                                                )}
                                            </Field>

                                            <Field name="price">
                                                {({field, form}) => (
                                                    <FormControl mt={4} isInvalid={form.errors.price && form.touched.price} isRequired>
                                                        <FormLabel>Cmimi</FormLabel>
                                                        <InputGroup>
                                                            <Input {...field} id="price" type='number' placeholder='' />
                                                            <InputRightAddon children="ALL" />
                                                        </InputGroup>
                                                        <FormErrorMessage>{form.errors.price}</FormErrorMessage>
                                                    </FormControl>
                                                )}
                                            </Field>
                                        </Flex>
                                    </Flex>


                                    <Flex w="700px"
                                        bg="white" 
                                        border="1px solid #D4D4D4" 
                                        boxShadow="0px 2px 3px rgba(0, 0, 0, 0.1)"
                                        borderRadius="lg"
                                        my="15px"
                                    >
                                        <Flex m="30px" align="center" w="inherit" justify="space-between" direction="column">
                                            <Field name="phoneNumber">
                                                {({field, form}) => (
                                                    <FormControl mt={4} isInvalid={form.errors.phoneNumber && form.touched.phoneNumber} isRequired>
                                                        <FormLabel>Numri i telefonit</FormLabel>
                                                        <Input {...field} id="phoneNumber" type='text' placeholder='' />
                                                        <FormErrorMessage>{form.errors.phoneNumber}</FormErrorMessage>
                                                    </FormControl>
                                                )}
                                            </Field>

                                            <FormControl  mt={4}>
                                                <Flex justify="space-between">
                                                    <FormLabel>Whatsapp</FormLabel>
                                                    <Checkbox id="whatsapp" name="whatsapp" value="whatsapp"></Checkbox>
                                                </Flex>
                                            </FormControl>

                                            <FormControl  mt={4}>
                                                <Flex justify="space-between">
                                                    <FormLabel>Viber</FormLabel>
                                                    <Checkbox id="viber" name="viber" value="viber"></Checkbox>
                                                </Flex>
                                            </FormControl>

                                            <Field name="instaUsername">
                                                {({field, form}) => (
                                                    <FormControl mt={4} isInvalid={form.errors.instaUsername && form.touched.instaUsername} isRequired>
                                                        <FormLabel>Instagram Username</FormLabel>
                                                        <Input {...field} id="instaUsername" type='number' placeholder='' />
                                                        <FormErrorMessage>{form.errors.instaUsername}</FormErrorMessage>
                                                    </FormControl>
                                                )}
                                            </Field>

                                            <Field name="instaUsername">
                                                {({field, form}) => (
                                                    <FormControl mt={4} isInvalid={form.errors.instaUsername && form.touched.instaUsername} isRequired>
                                                        <FormLabel>Instagram Username</FormLabel>
                                                        <Input {...field} id="instaUsername" type='number' placeholder='' />
                                                        <FormErrorMessage>{form.errors.instaUsername}</FormErrorMessage>
                                                    </FormControl>
                                                )}
                                            </Field>
                                        </Flex>
                                    </Flex>
                            {/* </Flex> */}
                                <Button mt={4} mb={100} type='submit' colorScheme="blue" variant="solid" width='full' >Krijo</Button>
                        </Form>
                    </Formik>
            </Flex>
            
        </Box>
    )
}

export default CreateNotifications
