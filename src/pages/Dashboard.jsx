import { Grid } from '@mui/material';
import Navbar from '../components/Navbar';
import ProductCard from '../components/ProductCard';

export default function Dashboard () {
    return (
        <>
            <Navbar />

            <Grid container justifyContent='center' marginTop='50px'>
                <ProductCard />
            </Grid>
        </>
    )
}