import { Typography } from "@material-ui/core";
import { Button, Grid, Link } from "@mui/material";
import { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";
import CreateForm from "./CreateForm";

export default function Navbar () {
    const navigate = useNavigate();

    const removeAccessToken = () => {
        window.localStorage.removeItem('access_token');
        navigate('/')
    };

    // const [open, setOpen] = useState(false);
    // const handleOpen = () => setOpen(true);

    return (
        <>
            <Grid container spacing={3} justifyContent='space-evenly' alignItems='center' margin>
                <Grid item md={2}>
                    <Typography variant='h5'>Product List</Typography>
                </Grid>

                <Grid item md={5}>
                    <CreateForm />
                </Grid>

                <Grid item>
                    <Button onClick={removeAccessToken}>Logout</Button>
                </Grid>
            </Grid>
        </>
    )
}