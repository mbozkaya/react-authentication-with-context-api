import React from 'react';
import {
    Container,
    Grid,
    makeStyles
} from '@material-ui/core';
import Page from '../components/Page';
import DashboardLayout from '../layouts/DashboardLayout/index';

const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: theme.palette.background.dark,
        minHeight: '100%',
        paddingBottom: theme.spacing(3),
        paddingTop: theme.spacing(3)
    }
}));

const Dashboard = () => {

    const classes = useStyles();

    return (
        <DashboardLayout>
            <Page
                className={classes.root}
                title="Dashboard"
            >
                <Container maxWidth={false}>
                    <Grid
                        container
                        spacing={3}
                    >
                        <Grid
                            item
                            lg={3}
                            sm={6}
                            xl={3}
                            xs={12}
                        >
                            <p>Welcome to Dashboard</p>
                        </Grid>
                    </Grid>
                </Container>
            </Page>
        </DashboardLayout>
    );
}

export default Dashboard;