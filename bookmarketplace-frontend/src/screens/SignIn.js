import React from 'react';
import { Link, useNavigate } from "react-router-dom";

import {
    Formik,
    Field,
    Form
  } from "formik";

import { Grid,
    Image,
    Heading,
    Button,
    Input,
    Flex,
    FormControl,
    Box,
    FormLabel,
    Divider,
    Text,
    FormErrorMessage
} from "@chakra-ui/react";
import bookIllustation from "../assets/bookIllustation.svg";

const SignIn = ({signin, isAuthenticated}) => {

    const navigate = useNavigate();

    if (isAuthenticated)
        return navigate('/');

    return (
        <Grid templateColumns="repeat(7, 1fr)" h="calc(100vh - 80px)" >
            <Flex gridColumn="span 3" bg="#263772" alignItems="center" justifyContent="center">
                <Image boxSize="450px" src={bookIllustation} alt="bookIllustation"/>
            </Flex>
            <Flex gridColumn="span 4" bg="#F7FAFC">
                <Flex minHeight='calc(100vh - 80px)' width='full' align='center' justifyContent='center'>
                    <Box 
                        borderWidth={1}
                        px={4}
                        width='full'
                        maxWidth='500px'
                        borderRadius={4}
                        textAlign='center'
                        boxShadow='md'
                        bg="white"
                    >
                        <Box p={4}>
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
                                        <Flex my={8} textAlign='left' flexDir="column">
                                            <Heading mb={8} fontSize={40} fontWeight="500">Identifikohu</Heading>

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

                                            <Box alignSelf="flex-end" w="inherit">
                                                <Link to="/resetpassword">
                                                    <Button my={6} colorScheme="blue" variant="link">Keni harruar fjalkalimin?</Button>
                                                </Link>
                                            </Box>
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
                                    </Form>
                                )}
                            </Formik>
                        </Box>
                    </Box>
                </Flex>
            </Flex>
        </Grid>
    )
}


export default SignIn;