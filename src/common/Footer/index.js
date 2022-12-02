import React, { useEffect, useRef, useState } from 'react';
import { makeStyles } from '@mui/styles';

import styles from './styles';

const useStyles = makeStyles(styles);

const Footer = (props) => {
    const classes = useStyles();

    console.log("================================== Footer ======================================");

    // Component States

    // Setup Component
    useEffect(() => {

    }, []);

    return (
        <div className={classes.root}>

        </div>
    );
};

export default Footer;