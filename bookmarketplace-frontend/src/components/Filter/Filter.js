import React, { useState } from 'react'
import { Button,
    FormControl,
    FormLabel,
    Select,
    Flex,
    Switch,
    Input, 
    InputGroup,
    InputLeftElement,
    Box
} from "@chakra-ui/react"



const Filter = () => {

    const [isShkollor, setIsShkollor] = useState(false);

    const rrethet = ["Berat", "Diber", "Durres", "Elbasan", "Fier", "Gjirokaster", "Korce", "Kukes", "Lezhe", "Shkoder", "Tirane", "Vlore"];
    const universitetet = ["Universiteti i Tiranes", "Universiteti Politeknik i Tiranes"];

    return (
        <div>
            <Flex
                flexDirection="column"
                alignItems="center"
                pos="sticky"
                top="0"
                left="0"
                h="calc(100vh - 80px - 88px);"
                >
                    <FormControl w="250px" pt={6}>
                        <FormLabel fontSize="xl" >Qyteti</FormLabel>
                        <Select placeholder="Gjithë Shqipëria" mt="8px">
                            {rrethet.map(e => (<option value={e} key={e}>{e}</option>))}
                        </Select>
                    </FormControl>
                    <FormControl display="flex" w="250px" pt={6} justifyContent="space-between">
                        <FormLabel fontSize="xl">Shkollor</FormLabel>
                        <Switch size="lg" onChange={() => setIsShkollor(isShkollor => !isShkollor)}/>
                    </FormControl>
                    {isShkollor && <Box>
                        <FormControl w="250px" pt={6}>
                            <FormLabel fontSize="xl" >Universiteti</FormLabel>
                            <Select placeholder="Gjithë Universitetet" mt="8px">
                                {universitetet.map(e => (<option value={e} key={e}>{e}</option>))}
                            </Select>
                        </FormControl>
                        <FormControl w="250px" pt={6}>
                            <FormLabel fontSize="xl" >Viti</FormLabel>
                            <Select placeholder="Gjithë Vitet" mt="8px">
                                <option value={1} key={1}>1</option>
                                <option value={2} key={2}>2</option>
                                <option value={2} key={2}>2</option>
                            </Select>
                        </FormControl>
                    </Box>
                    }
                    <FormControl w="250px" pt={6}>
                        <FormLabel fontSize="xl" >Cmimi</FormLabel>
                        <Flex display="flex" justifyContent="space-between">
                            <InputGroup w="118px">
                                <InputLeftElement
                                pointerEvents="none"
                                children="ALL"
                                color="gray.300"
                                />
                                <Input type="phone" placeholder="MIN" />
                            </InputGroup>
                            <InputGroup w="118px">
                                <InputLeftElement
                                pointerEvents="none"
                                children="ALL"
                                color="gray.300"
                                />
                                <Input type="phone" placeholder="MIN" />
                            </InputGroup>
                        </Flex>
                    </FormControl>
            </Flex>
            <Flex justifyContent="center">
                <Button colorScheme="blue" w="250px" mt={6} mb={6}>Filtro</Button>
            </Flex>
        </div>
    )
}

export default Filter
