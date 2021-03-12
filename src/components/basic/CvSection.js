/* eslint-disable */
import React from 'react';
import PropTypes from 'prop-types';

import { makeStyles } from '@material-ui/core/styles';
import { Box, Card, CardContent, Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
        minWidth: 275
    },
    title: {
        marginBottom: theme.spacing(1.5),
        marginTop: theme.spacing(1.5)
    }
}));

const CvSection = (props) => {
    const { title, children } = props;

    const classes = useStyles();

    return (
        <React.Fragment>
            <Typography variant="h5" className={classes.title}>
                {title}
            </Typography>
            <Typography variant="body2" component="p">
                {children}
            </Typography>
        </React.Fragment>

        // <Card>
        //     <Typography variant="h5" component="h2">
        //         {title}
        //     </Typography>
        //     <Typography variant="body2" component="p">
        //         {children}
        //     </Typography>
        // </Card>
    );
};

CvSection.propTypes = {
    title: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired
};

export default CvSection;
