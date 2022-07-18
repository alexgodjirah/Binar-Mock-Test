import { useState } from "react";
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import { Button, Box, Fade, Modal, Typography, Grid, Backdrop, IconButton } from "@mui/material";

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 350,
    bgcolor: 'background.paper',
    // border: `2px solid #000`,
    boxShadow: 24,
    p: 4
};

export default function DeleteForm ({data}) {
    // console.log(data.id)
    const [open, setOpen] = useState(false);

    const token = localStorage.getItem('access_token')
    
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const handleDelete = async () => {
        try {
            const fetchData = await fetch(
                `https://test-binar.herokuapp.com/v1/products/${data.id}`,
                {
                    method: 'DELETE',
                    headers: {
                        'Authorization': token,
                        'Content-Type': 'application/json',
                    },
                }
            );

            const response = await fetchData.json();
            
            if (response) {
                setOpen(false);
                window.location.reload();
            }
        } catch (error) {
            console.log(error)
        }
    }
    
    return (
        <>
            <IconButton aria-label="Delete" onClick={handleOpen}>
                <DeleteOutlineOutlinedIcon />
            </IconButton>

            <Modal
                open={open}
                onClose={handleClose}
                closeAfterTransition
                aria-labelledby='transition-modal-title'
                aria-describedby='transition-model-description'
                components={Backdrop}
                componentsProps={{
                    timeout: 500
                }}
            >
                <Fade in={open}>
                    <Box sx={style}>
                        <Typography variant='body1'>Are you sure want to delete {data.name}?</Typography>

                        <Grid item sx={{ display: 'flex', justifyContent: 'flex-end', marginTop: 2, gap: 2}}>
                            <Button onClick={handleClose}>No</Button>
                            <Button variant='contained' type='submit' onClick={handleDelete}>Yes, delete it</Button>
                        </Grid>
                    </Box>
                </Fade>
            </Modal>
        </>
    )
}