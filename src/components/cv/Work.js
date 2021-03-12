import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import { makeStyles } from '@material-ui/core/styles';
import { Box, Grid, Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    gridtitletop: {
        marginBottom: theme.spacing(0),
        marginTop: theme.spacing(1.5)
    },
    gridtitlebottom: {
        marginBottom: theme.spacing(1),
        marginTop: theme.spacing(0)
    }
}));

const Work = (props) => {
    const { work = [] } = props;
    const classes = useStyles();

    const workList = work.map(({ company, years, location, position, summary, highlights }) => (
        <Box key={company}>
            <Grid container justify="space-between" className={classes.gridtitletop}>
                <Box>
                    <Typography variant="h6" align="left">
                        {company}
                    </Typography>
                </Box>
                <Box fontWeight="fontWeightLight" align="right">
                    <Typography variant="h6">{years}</Typography>
                </Box>
            </Grid>
            <Grid container justify="space-between" className={classes.gridtitlebottom}>
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
        </Box>
    ));

    return <Fragment key="worklist">{workList}</Fragment>;
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
