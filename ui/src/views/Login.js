import React from 'react';
import { Navigate } from 'react-router';
import { AuthContext } from '../contexts/AuthContext';
import * as Yup from 'yup';
import { Formik } from 'formik';
import {
    Box,
    Button,
    Container,
    TextField,
    makeStyles
} from '@material-ui/core';
import { Alert, AlertTitle } from '@material-ui/lab';
import Page from '../components/Page';

const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: theme.palette.background.dark,
        height: '100%',
        paddingBottom: theme.spacing(3),
        paddingTop: theme.spacing(3),
    },
    alert: {
        width: '100%',
        '& > * + *': {
            marginTop: theme.spacing(2),
        },
    }
}));



const Login = () => {
    const classes = useStyles();
    return (
        <AuthContext.Consumer>
            {({ authorize, onLogin, error }) => (
                (authorize ? <Navigate to='/dashboard' /> :
                    <Page
                        className={classes.root}
                        title="Login"
                    >
                        <Box
                            display="flex"
                            flexDirection="column"
                            height="100%"
                            justifyContent="center"
                        >
                            <Container maxWidth="sm">
                                <Formik
                                    initialValues={{
                                        email: 'test@test.com',
                                        password: 'test123'
                                    }}
                                    validationSchema={Yup.object().shape({
                                        email: Yup.string().email('Must be a valid email').max(255).required('Email is required'),
                                        password: Yup.string().max(255).required('Password is required')
                                    })}
                                    onSubmit={model => {
                                        onLogin(model);
                                    }}
                                >
                                    {({
                                        errors,
                                        handleBlur,
                                        handleChange,
                                        handleSubmit,
                                        touched,
                                        values
                                    }) => (
                                            <form onSubmit={handleSubmit}>
                                                {
                                                    error && (<div className={classes.alert}>
                                                        <Alert severity="error"><AlertTitle>Error</AlertTitle>Your username or your password is <strong>incorrect!</strong></Alert>
                                                    </div>)
                                                }
                                                <TextField
                                                    error={Boolean(touched.email && errors.email)}
                                                    fullWidth
                                                    helperText={touched.email && errors.email}
                                                    label="Email Address"
                                                    margin="normal"
                                                    name="email"
                                                    onBlur={handleBlur}
                                                    onChange={handleChange}
                                                    type="email"
                                                    value={values.email}
                                                    variant="outlined"
                                                />
                                                <TextField
                                                    error={Boolean(touched.password && errors.password)}
                                                    fullWidth
                                                    helperText={touched.password && errors.password}
                                                    label="Password"
                                                    margin="normal"
                                                    name="password"
                                                    onBlur={handleBlur}
                                                    onChange={handleChange}
                                                    type="password"
                                                    value={values.password}
                                                    variant="outlined"
                                                />
                                                <Box my={2}>
                                                    <Button
                                                        color="primary"
                                                        fullWidth
                                                        size="large"
                                                        type="submit"
                                                        variant="contained"
                                                    >
                                                        Sign in now
                                                    </Button>
                                                </Box>
                                            </form>
                                        )}
                                </Formik>
                            </Container>
                        </Box>
                    </Page>
                )
            )}
        </AuthContext.Consumer>
    );
}

export default Login;