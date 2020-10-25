import React, { useContext, useEffect, useState } from 'react';
import Backdrop from '@material-ui/core/Backdrop';
import CircularProgress from '@material-ui/core/CircularProgress';
import { makeStyles } from '@material-ui/core/styles';
import { AuthContext } from '../contexts/AuthContext';

const useStyles = makeStyles((theme) => ({
    backdrop: {
        zIndex: theme.zIndex.drawer + 1,
        color: '#fff',
    },
}));

const Blockui = () => {
    const authProvider = useContext(AuthContext);
    const classes = useStyles();
    const [open, setOpen] = useState(false);
    useEffect(() => {
        setOpen(authProvider.backdrop);
    }, [authProvider.backdrop])
    return (
        <div>
            <Backdrop className={classes.backdrop} open={open}>
                <CircularProgress color="inherit" />
            </Backdrop>
        </div>
    );
}

export default Blockui;

