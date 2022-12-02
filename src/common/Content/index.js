import React from 'react';
import { makeStyles } from '@mui/styles';

import { styles } from './styles';

const useStyles = makeStyles(styles);

const Content = props => {
    const classes = useStyles();
    const children = props.children;

    // Context

    // Methods

    return (
        <div className={classes.root}>
            {children}
        </div>
    );
}

export default Content;