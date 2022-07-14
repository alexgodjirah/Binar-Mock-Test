import { Card, CardContent, Typography, Grid, Button, Link, TextField } from "@mui/material";
import { useFormik } from "formik";
// import { useNavigate }  from 'react-router-dom';

export default function LoginPage () {
    // const navigate = useNavigate();

    const formik = useFormik({
        initialValues: {
            email: '',
            password: ''
        }, 
        onSubmit: values => {
            console.log(values, `this from login`);
        }
    });

    return (
        <>
            <Grid container marginTop='50px' alignItems='center' direction='column' gap={4}>
                <Grid item>
                    <Typography variant='h3'>Login</Typography>
                </Grid>

                <Grid item>
                    <Card sx={{ minWidth: 300, minHeight: 200 }}>
                        <CardContent>
                            <form onSubmit={formik.handleSubmit}>
                                <Grid container direction='column' alignItems='center' gap={3}>
                                    <Grid item>
                                        <TextField 
                                            id='email'
                                            name="email"
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
                                            variant="standard"

                                            // Value Handler
                                            value={formik.values.password}
                                            onChange={formik.handleChange}

                                            // Error Handler
                                            error={formik.touched.password && Boolean(formik.errors.password)}
                                            helperText={formik.touched.password && formik.errors.password}
                                        />
                                    </Grid>

                                    <Grid item>
                                        <Button variant='contained' type="submit" sx={{ minWidth: 200 }}>Login</Button>
                                    </Grid>
                                </Grid>
                            </form>
                        </CardContent>
                    </Card>

                    <Grid container marginTop='10px' gap={1} justifyContent='center'>
                        <Typography>Don't have an account?</Typography>
                        <Link>Register</Link>
                    </Grid>
                </Grid>
            </Grid>
        </>
    )
}