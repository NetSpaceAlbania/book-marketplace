import React from 'react';
import Filter from '../components/Filter/Filter';
import Listings from '../components/Listings/Listings';
import { Grid, GridItem, Spinner, Flex } from "@chakra-ui/react";
import { useGetListingsQuery } from '../redux/services/api/api';
import { useDispatch, useSelector } from 'react-redux';
import { addListings } from '../redux/reducers/listings/listingsSlice';


const Home = () => {

    const {data, error, isLoading} = useGetListingsQuery("listings");
    const dispatch = useDispatch();
    
    React.useEffect(() => {
        dispatch(addListings(data));
    } , [data]);

    return (
        <div>
            <Grid templateColumns="repeat(8, 1fr)" gap={0}>
                <GridItem colSpan={2}>
                    <Filter/>
                </GridItem>
                <GridItem colSpan={6} bg="#F7FAFC">
                    {isLoading ? 
                        <Flex align="center" h="full">
                            <Spinner
                                margin="auto"
                                thickness="4px"
                                speed="0.65s"
                                emptyColor="gray.200"
                                color="blue.500"
                                size="xl"
                            />
                        </Flex> : <Listings listings={data}/>}
                </GridItem>
            </Grid>
        </div>
    )
}

export default Home
