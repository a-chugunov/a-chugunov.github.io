import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import { makeStyles } from '@material-ui/core/styles';
import { Box, Grid, Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    gridtitle: {
        marginBottom: theme.spacing(0.5),
        marginTop: theme.spacing(1.5)
    }
}));

const Education = (props) => {
    const { education = [] } = props;
    const classes = useStyles();

    const edList = education.map(({ institution, degree, years, highlights }) => (
        <Box key={institution}>
            <Grid container justify="space-between" className={classes.gridtitle}>
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

    return <Fragment key="cvEducation">{edList}</Fragment>;
};

export default Education;

Education.propTypes = {
    education: PropTypes.arrayOf(
        PropTypes.shape({
            institution: PropTypes.string.isRequired,
            degree: PropTypes.string.isRequired,
            years: PropTypes.string.isRequired,
            highlights: PropTypes.string.isRequired
        })
    ).isRequired
};
