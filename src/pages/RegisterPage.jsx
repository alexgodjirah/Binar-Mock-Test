import { Card, Grid, Typography, TextField, Link, CardContent, Button } from "@mui/material";
import { useFormik } from 'formik'
import { useNavigate } from "react-router-dom";

export default function RegisterPage () {
    const navigate = useNavigate();
    
    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            password: ''
        }, 
        onSubmit: async (values) => {
            try {
                const fetchData = await fetch(
                    `https://test-binar.herokuapp.com/auth/signup`,
                    {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/x-ww-form-urlencoded'
                        },
                        body: JSON.stringify(values)
                    }
                );
    
                const response = await fetchData.json();
    
                if (response) {
                    navigate('/');
                }
            } catch (error) {
                console.log(error);
            }
        }
    });

    return (
        <>
            <Grid container marginTop='50px' alignItems='center' direction='column' gap={4}>
                <Grid item>
                    <Typography variant='h3'>Register</Typography>
                </Grid>

                <Grid item>
                    <Card sx={{ minWidth: 300, minHeight: 200 }}>
                        <CardContent>
                            <form onSubmit={formik.handleSubmit}>
                                <Grid container direction='column' alignItems='center' gap={4}>
                                    <Grid item>
                                        <TextField 
                                            id='name'
                                            name='name'
                                            label='Name'
                                            variant='standard'

                                            // Value Handler
                                            value={formik.values.name}
                                            onChange={formik.handleChange}

                                            // Error Handler
                                            error={formik.touched.name && Boolean(formik.errors.name)}
                                            helperText={formik.touched.name && formik.errors.name}
                                        />
                                    </Grid>

                                    <Grid item>
                                        <TextField 
                                            id='email'
                                            name='email'
                                            label='Email'
                                            type={'email'}
                                            variant='standard'

                                            // Value Handler
                                            value={formik.values.email}
                                            onChange={formik.handleChange}

                                            // Error Handler
                                            error={formik.touched.email && Boolean(formik.errors.email)}
                                            helperText={formik.touched.email && formik.errors.email}
                                        />
                                    </Grid>

                                    <Grid item>
                                        <TextField 
                                            id='password'
                                            name='password'
                                            label='Password'
                                            type={'password'}
                                            variant='standard'

                                            // Value Handler
                                            value={formik.values.password}
                                            onChange={formik.handleChange}

                                            // Error Handler
                                            error={formik.touched.password && Boolean(formik.errors.password)}
                                            helperText={formik.touched.password && formik.errors.password}
                                        />
                                    </Grid>

                                    <Grid item>
                                        <Button variant='contained' type='submit' sx={{ minWidth: 200 }}>Register</Button>
                                    </Grid>
                                </Grid>
                            </form>
                        </CardContent>
                    </Card>

                    <Grid container marginTop='10px' gap={1} justifyContent='center'>
                        <Typography>Already have account?</Typography>
                        <Link href='/'>Login</Link>
                    </Grid>
                </Grid>
            </Grid>
        </>
    )
}