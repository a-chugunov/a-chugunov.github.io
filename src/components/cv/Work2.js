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

const Work = (props) => {
    const { work = [] } = props;

    const workList = work.map(({ company, years, location, position, summary, highlights }) => (
        <Grid item key={company}>
            <Grid container justify="space-between">
                <Box>
                    <Typography variant="h6" align="left">
                        {company}
                    </Typography>
                </Box>
                <Box fontWeight="fontWeightLight" align="right">
                    <Typography variant="h6">{years}</Typography>
                </Box>
            </Grid>
            <Grid container justify="space-between">
                <Typography variant="body1" align="left">
                    <Box fontWeight={500}>{position}</Box>
                </Typography>

                <Typography variant="body1" align="right">
                    <Box fontStyle="italic">{location}</Box>
                </Typography>
            </Grid>
            <Typography variant="body1">
                {summary}
                <ul>
                    {highlights.map((item) => (
                        <li key={item}>{item}</li>
                    ))}
                </ul>
            </Typography>
        </Grid>
    ));

    return <Fragment>{workList}</Fragment>;
};

export default Work;

Work.propTypes = {
    work: PropTypes.arrayOf(
        PropTypes.shape({
            company: PropTypes.string.isRequired,
            years: PropTypes.string.isRequired,
            location: PropTypes.string.isRequired,
            position: PropTypes.string.isRequired,
            summary: PropTypes.string.isRequired,
            highlights: PropTypes.string.isRequired
        })
    ).isRequired
};
