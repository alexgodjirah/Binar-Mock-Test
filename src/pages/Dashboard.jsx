import { Grid } from '@mui/material';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import ProductCard from '../components/ProductCard';

export default function Dashboard () {
    const [data, setData] = useState([]);
    const navigate = useNavigate();
    const token = localStorage.getItem('access_token');
    
    const fetchData = async () => {
        try {
            const fetchData = await fetch(
                `https://test-binar.herokuapp.com/v1/products`,
                {
                    method: 'GET',
                    headers: {
                        'Authorization': token,
                        'Content-Type': 'application/json'
                    },
                }
            )

            const response = await fetchData.json();
            console.log(response.result[0].imageurl)
            setData(response.result)
        } catch (error) {
            console.log(error)
        }
    };

    useEffect(() => {
        fetchData();
    }, [])

    return (
        <>
            <Navbar />

            <Grid container justifyContent='center' marginTop='50px' gap={5}>
                {
                    data.map((datum, idx) => (
                        <ProductCard data={datum} key={idx} />
                    ))
                }
            </Grid>
        </>
    )
}