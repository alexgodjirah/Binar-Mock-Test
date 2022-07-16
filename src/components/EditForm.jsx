import { Button, Box, Fade, Modal, TextField, Typography, Grid, Backdrop, IconButton } from "@mui/material";
import { useFormik } from 'formik';
import { useState } from "react";
import ModeEditOutlineOutlinedIcon from '@mui/icons-material/ModeEditOutlineOutlined';

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

export default function EditForm ({data}) {
    const [open, setOpen] = useState(false);

    const token = localStorage.getItem('access_token');

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const formik = useFormik({
        initialValues: {
            name: data.name,
            price: data.price,
            imageurl: data.imageurl,
        },
        onSubmit: async (values) => {
            try {
                const fetchData = await fetch(
                    `https://test-binar.herokuapp.com/v1/products/${data.id}`,
                    {
                        method: 'PUT',
                        headers: {
                            'Content-Type': 'application/json',
                            'Authorization': token
                        },
                        body: JSON.stringify(values)
                    }
                );

                const response = await fetchData.json();
                if (response) {
                    handleClose();
                    window.location.reload();
                }
            } catch (error) {
                console.log(error);
            }
        }
    })

    return (
        <>
            <IconButton aria-label="Edit" onClick={handleOpen}>
                <ModeEditOutlineOutlinedIcon />
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
                        <Typography variant='h6'>Update Product</Typography>

                        <form onSubmit={formik.handleSubmit}>
                            <Grid item mt={2}>
                                <TextField 
                                    id='name'
                                    name='name'
                                    label='Product Name'
                                    variant='standard'
                                    focused
                                    fullWidth

                                    // Value Handler
                                    value={formik.values.name}
                                    onChange={formik.handleChange}

                                    // Error Handler
                                    error={formik.touched.name && Boolean(formik.errors.name)}
                                    helperText={formik.touched.name && formik.errors.name}
                                />
                            </Grid>

                            <Grid item mt={2}>
                                <TextField 
                                    id='price'
                                    name='price'
                                    label='Price (Dollar USD)'
                                    type='number'
                                    variant='standard'
                                    focused
                                    fullWidth

                                    // Value Handler
                                    value={formik.values.price}
                                    onChange={formik.handleChange}

                                    // Error Handler
                                    error={formik.touched.price && Boolean(formik.errors.price)}
                                    helperText={formik.touched.price && formik.errors.price}
                                />
                            </Grid>

                            <Grid item mt={2}>
                                <TextField 
                                    id='imageurl'
                                    name='imageurl'
                                    label='Image URL'
                                    variant='standard'
                                    focused
                                    fullWidth

                                    // Value Handler
                                    value={formik.values.imageurl}
                                    onChange={formik.handleChange}

                                    // Error Handler
                                    error={formik.touched.imageurl && Boolean(formik.errors.imageurl)}
                                    helperText={formik.touched.imageurl && formik.errors.imageurl}
                                />
                            </Grid>

                            <Grid item sx={{ display: 'flex', justifyContent: 'flex-end', marginTop: 2, gap: 2}}>
                                <Button onClick={handleClose}>Back</Button>
                                <Button variant='contained' type='submit'>Update</Button>
                            </Grid>

                        </form>
                    </Box>
                </Fade>
            </Modal>
        </>
    )
}