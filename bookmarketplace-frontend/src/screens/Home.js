import React from 'react';
import NavBM from '../components/Nav/NavBM';
import Filter from '../components/Filter/Filter';
import { Grid, GridItem } from "@chakra-ui/react"


const Home = () => {
    return (
        <div>
            <NavBM />
            <Grid h="calc(100vh - 80px);" templateColumns="repeat(8, 1fr)" gap={1}>
                <GridItem colSpan={2}>
                    <Filter/>
                </GridItem>
                <GridItem colSpan={6} bg="tomato">
                    AAAAAAAAAAAAAAAAAAAAAA
                </GridItem>
            </Grid>
        </div>
    )
}

export default Home
