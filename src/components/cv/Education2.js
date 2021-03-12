/* eslint-disable */
import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import { makeStyles } from '@material-ui/core/styles';
import { Box, Grid, CardContent, Typography, Divider } from '@material-ui/core';

const useStyles = makeStyles({
    h2class: {
        fontSize: '20px',
        margin: '0 0 6px 0',
        position: 'relative'
    },
    h2span: {
        position: 'absolute',
        bottom: 0,
        right: 0,
        fontStyle: 'italic',
        fontFamily: 'Georgia, Serif',
        fontSize: '16px',
        color: '#999',
        fontWeight: 'normal'
    }
});

const Education2 = (props) => {
    const { education = [] } = props;

    const edList = education.map(({ institution, degree, years, highlights }) => (
        <Box key={institution}>
            <Grid container justify="space-between">
                <Typography variant="h6" align="left">
                    {institution}
                </Typography>
                <Typography variant="h6" align="right">
                    {years}
                </Typography>
            </Grid>

            <Typography variant="body1">
                {degree}
                <br />
                {highlights}
            </Typography>
        </Box>
    ));

    return <Fragment>{edList}</Fragment>;
};

export default Education2;

Education2.propTypes = {
    education: PropTypes.arrayOf(
        PropTypes.shape({
            institution: PropTypes.string.isRequired,
            degree: PropTypes.string.isRequired,
            years: PropTypes.string.isRequired,
            highlights: PropTypes.string.isRequired
        })
    ).isRequired
};
