import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import { Paper, Typography } from '@material-ui/core';
import { Link as RouterLink } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1
    },
    paper: {
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary
    }
}));

const NoPageFound = () => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Paper className={classes.paper}>
                <Typography variant="h1" component="h2">
                    404 - No such page.
                </Typography>
                <Typography variant="h5" component="h2">
                    <RouterLink to="/">Go to the home page</RouterLink>
                </Typography>
            </Paper>
        </div>
    );
};

export default NoPageFound;
