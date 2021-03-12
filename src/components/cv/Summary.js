import React from 'react';
import PropTypes from 'prop-types';
import { Typography, Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    summary: {
        marginBottom: theme.spacing(2),
        marginTop: theme.spacing(2)
    }
}));

const Summary = (props) => {
    const { summary } = props;
    const classes = useStyles();
    return (
        <Box>
            <Typography variant="body1" id="objective" className={classes.summary}>
                {summary}
            </Typography>
        </Box>
    );
};

Summary.propTypes = {
    summary: PropTypes.string.isRequired
};

export default Summary;
