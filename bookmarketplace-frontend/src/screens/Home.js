import React from 'react';
import Filter from '../components/Filter/Filter';
import Listings from '../components/Listings/Listings';
import { Grid, GridItem } from "@chakra-ui/react"



const Home = () => {
    return (
        <div>
            <Grid templateColumns="repeat(8, 1fr)" gap={0}>
                <GridItem colSpan={2}>
                    <Filter/>
                </GridItem>
                <GridItem colSpan={6} bg="#F7FAFC">
                    <Listings/>
                </GridItem>
            </Grid>
        </div>
    )
}

export default Home
