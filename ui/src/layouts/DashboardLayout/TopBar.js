import React, { useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import {
  AppBar,
  Badge,
  Box,
  Hidden,
  IconButton,
  Toolbar,
  makeStyles,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Button,
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import NotificationsIcon from '@material-ui/icons/NotificationsOutlined';
import InputIcon from '@material-ui/icons/Input';
import logo from '../../logo.svg';
import { AuthContext } from '../../contexts/AuthContext';

const useStyles = makeStyles(() => ({
  root: {},
  avatar: {
    width: 60,
    height: 60
  }
}));

const TopBar = ({
  className,
  onMobileNavOpen,
  ...rest
}) => {
  const classes = useStyles();
  const [notifications] = useState([]);
  const [dialogOpen, setDialogOpen] = useState(false);

  return (
    <AuthContext.Consumer>
      {
        ({ authorize, onLogin, onLogout }) => (
          <AppBar
            className={clsx(classes.root, className)}
            elevation={0}
            {...rest}
          >
            <Toolbar>
              <RouterLink to="/"><img src={logo} alt="logo" /></RouterLink>
              <Box flexGrow={1} />
              <Hidden mdDown>
                <IconButton color="inherit">
                  <Badge
                    badgeContent={notifications.length}
                    color="primary"
                    variant="dot"
                  >
                    <NotificationsIcon />
                  </Badge>
                </IconButton>
                <IconButton color="inherit" onClick={() => setDialogOpen(true)}>
                  <InputIcon />
                </IconButton>
              </Hidden>
              <Hidden lgUp>
                <IconButton
                  color="inherit"
                  onClick={onMobileNavOpen}
                >
                  <MenuIcon />
                </IconButton>
              </Hidden>
            </Toolbar>
            <Dialog fullWidth open={dialogOpen} onClose={() => setDialogOpen(false)}>
              <DialogTitle>Are you sure?</DialogTitle>
              <DialogContent>
                <DialogContentText>Are you want to quit?</DialogContentText>
              </DialogContent>
              <DialogActions>
                <Button onClick={() => setDialogOpen(false)}>
                  Cancel
            </Button>
                <Button color="primary" onClick={() =>{
                  setDialogOpen(false);
                  onLogout();
                }}>
                  Yes
            </Button>
              </DialogActions>
            </Dialog>
          </AppBar>
        )
      }
    </AuthContext.Consumer>
  );
};

TopBar.propTypes = {
  className: PropTypes.string,
  onMobileNavOpen: PropTypes.func
};

export default TopBar;
