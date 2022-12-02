import React, { useEffect, useRef, useState } from 'react';
import { makeStyles } from '@mui/styles';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import styles from './styles';
const useStyles = makeStyles(styles);


const Home = (props) => {
    const classes = useStyles();

    console.log("================================== Home ======================================");


    // Component States


    // Setup Component
    useEffect(() => {

    }, []);

    // Handlers



    return (
        <div className={classes.root}>
            <main className={classes.main}>
                <Container maxWidth={false} className={classes.container}>
                    <Typography variant="h6">
                        Home
                    </Typography>
                </Container>
            </main>
        </div>
    );
};

export default Home;