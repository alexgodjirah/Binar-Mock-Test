import { Typography } from "@material-ui/core";
import { Button, Grid, Link } from "@mui/material";
import { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import CreateForm from "./CreateForm";

export default function Navbar () {
    const [cookie, setCookie, removeCookie] = useCookies(['access_token']);
    // const [isToggle, setIsToggle] = useState(false);

    const removeAccessToken = () => {
        // window.localStorage.clear();
        removeCookie('access_token');
    };

    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);

    return (
        <>
            <Grid container spacing={3} justifyContent='space-evenly' alignItems='baseline' margin>
                <Grid item md={2}>
                    <Typography variant='h5'>Product List</Typography>
                </Grid>

                <Grid item md={5}>
                    <CreateForm />
                </Grid>

                <Grid item>
                    <Link>Logout</Link>
                </Grid>
            </Grid>
        </>
    )
}