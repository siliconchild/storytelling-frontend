import React, { useEffect, useRef, useState } from 'react';
import { makeStyles } from '@mui/styles';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import DataService from "../../services/DataService";
import styles from './styles';
const useStyles = makeStyles(styles);


const Blank = (props) => {
    const classes = useStyles();

    console.log("================================== Blank ======================================");


    // Component States


    // Setup Component
    useEffect(() => {

    }, []);

    // Handlers



    return (
        <div className={classes.root}>
            <main className={classes.main}>
                <Container maxWidth={false} className={classes.container}>
                    <Typography>This is a blank page...</Typography>
                </Container>
            </main>
        </div>
    );
};

export default Blank;