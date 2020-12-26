import React, { useState } from 'react';
import { Link, Redirect } from "react-router-dom";
import { connect } from 'react-redux';
import { signup } from '../actions/auth';
import {
    Formik,
    Field,
    Form,
    useField,
    FieldAttributes,
    FieldArray
  } from "formik";

import * as yup from "yup";

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
    Text
} from "@chakra-ui/react";
import bookIllustation from "../assets/bookIllustation.svg";

const SignUp = ({ signup, isAuthenticated }) => {

    const { isOpen, onOpen, onClose } = useDisclosure();

    const [formData, setFormData] = useState({
          username: '',
          email: '',
          password: '',
          re_password: ''
      });

    const [accountCreated, setAccountCreated] = useState(false);

    const { username, email, password, re_password } = formData;

    const onChange = e => setFormData({ ...formData, [e.target.id]: e.target.value });

    const onSubmit = e => {
        e.preventDefault();

        if (password === re_password) {
            signup({ username, email, password, re_password });
            setAccountCreated(true);
        }
    };

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
                            initialValues={{ username, email, password, re_password }} 
                            // onSubmit={e => onSubmit(e)}
                            onSubmit={e => console.log(e)}
                            >
                            {({ values, handleChange, handleBlur, handleSubmit }) => (
                                <Form method="POST" onSubmit={handleSubmit}>
                                    <Flex my={8} textAlign='left' flexDir="column">
                                        <Heading mb={8} fontSize={40} fontWeight="500">Regjistrohu</Heading>
                                        <FormControl>
                                                <FormLabel>Username</FormLabel>
                                                <Input value={values.username} onChange={handleChange} onBlur={handleBlur} type='username' placeholder='Vendosni usernamin tuaj'/>
                                        </FormControl>
                                        <FormControl>
                                                <FormLabel mt={4}>Email</FormLabel>
                                                <Input onChange={e => onChange(e)} type='email' id='email' placeholder='Vendosni adresen tuaj te emailit' />
                                        </FormControl>
                                        <FormControl mt={4}>
                                            <FormLabel>Password</FormLabel>
                                            <Input onChange={e => onChange(e)} type='password' id='password' placeholder='Vendosni passwordin tuaj' />
                                        </FormControl>
                                        <FormControl mt={4}>
                                            <FormLabel>Konfirmoni Passwordin</FormLabel>
                                            <Input onChange={e => onChange(e)} type='password' id='re_password' placeholder='Konfirmoni passwordin tuaj' />
                                        </FormControl>
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
                                    <pre>{JSON.stringify(values, null, 2)}</pre>
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
