import React from 'react';
import Filter from '../components/Filter/Filter';
import Listings from '../components/Listings/Listings';
import { Grid, GridItem } from "@chakra-ui/react";
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';


const Home = () => {

    // const count = useSelector((state) => state.counter.value)
    const dispatch = useDispatch();

    const [listings, setListings] = React.useState([]);
    const [isLoading, setIsLoading] = React.useState(true);

    const getListings = async () => {
        try{
            let res = await axios.get('http://localhost:3001/listings');
            setListings(res.data);
        }
        catch(error){
            console.log(error)
        }finally {
            setIsLoading(false);
        }
    }

    React.useEffect(() => {
        getListings();
    }, [])

    return (
        <div>
            <Grid templateColumns="repeat(8, 1fr)" gap={0}>
                <GridItem colSpan={2}>
                    <Filter/>
                </GridItem>
                <GridItem colSpan={6} bg="#F7FAFC">
                    {!isLoading && <Listings listings={listings}/>}
                </GridItem>
            </Grid>
        </div>
    )
}

export default Home
