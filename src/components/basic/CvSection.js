/* eslint-disable */
import React from 'react';
import PropTypes from 'prop-types';

import { makeStyles } from '@material-ui/core/styles';
import { Box, Card, CardContent, Typography } from '@material-ui/core';

const useStyles = makeStyles({
    root: {
        minWidth: 275
    }
});

const CvSection = (props) => {
    const { title, children } = props;

    const classes = useStyles();

    return (
        <Card className={classes.root} variant="outlined">
            <CardContent>
                <Typography variant="h5">{title}</Typography>
                <Typography variant="body2" component="p">
                    {children}
                </Typography>
            </CardContent>
        </Card>
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
