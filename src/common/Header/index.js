import React, { useState } from 'react';
import { makeStyles } from '@mui/styles';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Icon from '@mui/material/Icon';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import { Link } from 'react-router-dom';

import { styles } from './styles';

const useStyles = makeStyles(styles);

const Header = (props) => {
    const classes = useStyles();

    console.log("================================== Header ======================================");

    // Get Context


    // State
    const [settingsMenuOpen, setSettingsMenuOpen] = useState(false);
    const [settingsMenuAnchorEl, setSettingsMenuAnchorEl] = useState(null);

    const errorTitles = {
        "error": "Error",
        "info": "Info",
        "warning": "Warning"
    }

    // Handlers
    const toggleDrawer = (open) => () => {

    };
    const openSettingsMenu = (event) => {
        setSettingsMenuAnchorEl(event.currentTarget);
    };
    const closeSettingsMenu = (event) => {
        setSettingsMenuAnchorEl(null);
    };
    const closeNotificationAlert = () => {

    };

    return (
        <div className={classes.root}>
            <AppBar position="relative" elevation={0} className={classes.appBar}>
                <Toolbar variant="dense">
                    <IconButton className={classes.menuButton} color="inherit" aria-label="Menu" onClick={toggleDrawer()}>
                        <Icon>menu</Icon>
                    </IconButton>
                    <Link to="/" className={classes.appLink}>
                        <Typography className={classes.appTitle} >
                            📖 Storytelling AI
                        </Typography>
                    </Link>
                    <div className={classes.grow} />
                    <div>
                        <IconButton color="inherit" component={Link} to="/login">
                            <Icon>login</Icon>
                            <Typography variant="caption">&nbsp;Login</Typography>
                        </IconButton>
                    </div>
                </Toolbar>
            </AppBar>
        </div>
    );
}

export default Header;
