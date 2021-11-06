import React, { useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { reset_password_confirm } from '../redux/actions/auth';

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

const ResetPasswordConfirm = (props) => {
    const [requestSent, setRequestSent] = useState(false);

    if (requestSent)
        return <Redirect to='/signin' />
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
                                    initialValues={{ new_password: '', re_new_password: '' }}
                                    onSubmit={e => {console.log(e); 
                                        const { new_password, re_new_password } = e;

                                        const uid = props.match.params.uid;
                                        const token = props.match.params.token;

                                        props.reset_password_confirm(uid, token, new_password, re_new_password);
                                        setTimeout(() => {
                                            setRequestSent(true);
                                        }, 5000);
                                    }}
                                    validate={values => {
                                        const errors = {};

                                        if(values.new_password.length < 8){
                                            errors.new_password = 'Fjalkalimi duhet te ket te pakten 10 karaktere.'
                                        }

                                        if (values.new_password !== values.re_new_password){
                                            errors.re_new_password = 'Fjalkalimet nuk jan te njejta.'
                                        }

                                        return errors;
                                    }}
                                    >
                                    {() => (
                                        <Form method="POST">
                                            <Flex my={8} textAlign='left' flexDir="column">
                                                <Heading mb={8} fontSize={40} fontWeight="500">Rikthe Fjalkalimin</Heading>

                                                <Field name="new_password">
                                                    {({field, form}) => (
                                                        <FormControl mt={4} isInvalid={form.errors.new_password && form.touched.new_password} isRequired>
                                                            <FormLabel>Fjalkalimi</FormLabel>
                                                            <Input {...field} id="new_password" type='password' placeholder='Vendosni fjalkalimin tuaj' />
                                                            <FormErrorMessage>{form.errors.new_password}</FormErrorMessage>
                                                        </FormControl>
                                                    )}
                                                </Field>

                                                <Field name="re_new_password">
                                                    {({field, form}) => (
                                                        <FormControl mt={4} isInvalid={form.errors.re_new_password && form.touched.re_new_password} isRequired>
                                                            <FormLabel>Konfirmoni fjalkalimin</FormLabel>
                                                            <Input {...field} id="re_new_password" type='password' placeholder='Konfirmoni fjalkalimin tuaj' />
                                                            <FormErrorMessage>{form.errors.re_new_password}</FormErrorMessage>
                                                        </FormControl>
                                                    )}
                                                </Field>

                                                <Button type='submit' mt={8} colorScheme="blue" variant="solid" width='full'>Konfirmoni ndryshimin</Button>
                                                <Flex align="center">
                                                    <Divider my={8}/>
                                                    <Text fontSize={16} color="gray.400" mx={6}>ose</Text>
                                                    <Divider my={8}/>
                                                </Flex>
                                                <Link to="/signin">
                                                    <Button colorScheme="blue" variant="outline" width='full'>Identifikohu</Button>
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
    );
};

export default connect(null, { reset_password_confirm })(ResetPasswordConfirm);
