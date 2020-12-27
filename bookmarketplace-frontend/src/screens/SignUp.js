import React, { useState } from 'react';
import { Link, Redirect } from "react-router-dom";
import { connect } from 'react-redux';
import { signup } from '../actions/auth';
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
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalCloseButton,
    ModalBody,
    ModalFooter,
    useDisclosure,
    Text,
    FormErrorMessage
} from "@chakra-ui/react";
import bookIllustation from "../assets/bookIllustation.svg";

const SignUp = ({ signup, isAuthenticated }) => {

    const { isOpen, onOpen, onClose } = useDisclosure();

    const [accountCreated, setAccountCreated] = useState(false);

    if (isAuthenticated)
        return <Redirect to='/' />;
    if (accountCreated)
        return <Redirect to='/signin' />;

    return (
        <Grid templateColumns="repeat(7, 1fr)" h="calc(100vh - 80px)" >
            <Flex gridColumn="span 3" bg="#263772" alignItems="center" justifyContent="center">
                <Image boxSize="450px" src={bookIllustation} alt="bookIllustation"/>
            </Flex>
            <Flex gridColumn="span 4" bg="#FBFBFB">
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
                            initialValues={{ username: '', email: '', password: '', re_password: '' }}
                            onSubmit={e => {console.log(e); 
                                const { username, email, password, re_password } = e;
                                signup({ username, email, password, re_password });
                                setAccountCreated(true);
                            }}
                            validate={values => {
                                const errors = {};

                                if (values.password !== values.re_password){
                                    errors.re_password = 'Fjalkalimet nuk jan te njejta.'
                                }

                                if(values.password.length < 8){
                                    errors.password = 'Fjalkalimi duhet te ket te pakten 10 karaktere.'
                                }

                                return errors;
                            }}
                            >
                            {() => (
                                <Form method="POST">
                                    <Flex my={8} textAlign='left' flexDir="column">
                                        <Heading mb={8} fontSize={40} fontWeight="500">Regjistrohu</Heading>
                                        <Field name="username">
                                            {({field, form}) => (
                                                <FormControl isRequired>
                                                    <FormLabel>Username</FormLabel>
                                                    <Input {...field} id="username" type='text' placeholder='Vendosni usernamin tuaj'/>
                                                    <FormErrorMessage>{form.errors.username}</FormErrorMessage>
                                                </FormControl>
                                            )}
                                        </Field>
                                        
                                        <Field name="email">
                                            {({field, form}) => (
                                                <FormControl mt={4} isRequired>
                                                    <FormLabel>Email</FormLabel>
                                                    <Input {...field} id="email" type='email' placeholder='Vendosni adresen tuaj te emailit'/>
                                                    <FormErrorMessage>{form.errors.email}</FormErrorMessage>
                                                </FormControl>
                                            )}
                                        </Field>

                                        <Field name="password">
                                            {({field, form}) => (
                                                <FormControl mt={4} isInvalid={form.errors.password && form.touched.password} isRequired>
                                                    <FormLabel>Fjalkalimi</FormLabel>
                                                    <Input {...field} id="password" type='password' placeholder='Vendosni fjalkalimin tuaj' />
                                                    <FormErrorMessage>{form.errors.password}</FormErrorMessage>
                                                </FormControl>
                                            )}
                                        </Field>

                                        <Field name="re_password">
                                            {({field, form}) => (
                                                <FormControl mt={4} isInvalid={form.errors.re_password && form.touched.re_password} isRequired>
                                                    <FormLabel>Konfirmoni fjalkalimin</FormLabel>
                                                    <Input {...field} id="re_password" type='password' placeholder='Konfirmoni fjalkalimin tuaj' />
                                                    <FormErrorMessage>{form.errors.re_password}</FormErrorMessage>
                                                </FormControl>
                                            )}
                                        </Field>

                                        <Button onClick={onOpen} my={6} colorScheme="blue" variant="link" w="inherit">
                                            <Text fontSize={14} isTruncated w="500px">Duke u regjistruar ju pranoni Kushtet e Shërbimit, Politikat e Privatësisë dhe Politikat e Përdorimit.</Text>
                                        </Button>
            
                                        <Modal isOpen={isOpen} onClose={onClose} scrollBehavior={'inside'}>
                                            <ModalOverlay />
                                            <ModalContent>
                                            <ModalHeader>Modal Title</ModalHeader>
                                            <ModalCloseButton />
                                            <ModalBody>
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque sollicitudin velit eget leo malesuada, eu tempor mi rutrum. Ut a ante in mi venenatis convallis a auctor turpis. Donec sed imperdiet ligula. Aenean hendrerit orci quis egestas sagittis. Nam pulvinar felis lacus, lobortis bibendum augue interdum a. Mauris mollis, purus sed euismod tincidunt, urna mi efficitur quam, eget ultricies enim lectus sed massa. Sed urna nulla, bibendum quis metus eu, auctor auctor nibh. Sed id feugiat ante. Aenean ultricies lorem enim, sagittis pellentesque lectus cursus vitae. Etiam vel diam purus. Maecenas aliquet non nisl non feugiat. Etiam ornare eget arcu ac eleifend. Vestibulum a ipsum eu quam iaculis feugiat sagittis non neque.
                                                Quisque ut posuere nulla, non pretium nunc. Ut imperdiet a felis sed viverra. Phasellus nec neque sed risus rhoncus varius sit amet at lectus. Nam non pretium lacus, id consequat nisi. Quisque imperdiet, lorem sit amet iaculis pulvinar, libero lectus placerat ligula, in tempus justo sem vitae nisi. Quisque suscipit nisi ante, ac pharetra nunc condimentum ac. Donec sit amet orci sit amet metus ullamcorper vulputate eget a magna. Proin sodales pellentesque mauris, eget malesuada tortor accumsan ac. Praesent consequat magna id neque mollis, in tempor tellus mollis. Donec at rutrum velit, vel porta justo. Praesent est sem, fringilla eget dolor ac, condimentum egestas tellus. Cras et malesuada enim. Curabitur finibus feugiat quam, vitae interdum nulla hendrerit vel. Morbi et convallis elit.
                                            </ModalBody>
                                    
                                            <ModalFooter>
                                                <Button colorScheme="blue" mr={3} onClick={onClose}>
                                                Close
                                                </Button>
                                            </ModalFooter>
                                            </ModalContent>
                                        </Modal>

                                        <Button type='submit' colorScheme="blue" variant="solid" width='full' >Regjistrohu</Button>
                                        <Flex align="center">
                                            <Divider my={8}/>
                                            <Text fontSize={16} color="gray.400" mx={6}>ose</Text>
                                            <Divider my={8}/>
                                        </Flex>
                                        <Link to="/signin">
                                            <Button colorScheme="blue" variant="outline" width='full' >Identifikohu</Button>
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

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
})

export default connect(mapStateToProps, { signup })(SignUp);
