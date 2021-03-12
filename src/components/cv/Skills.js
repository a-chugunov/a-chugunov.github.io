import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import { makeStyles } from '@material-ui/core/styles';
import { Box, Typography, Chip } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        justifyContent: 'left',
        flexWrap: 'wrap',
        '& > *': {
            margin: theme.spacing(0.5)
        }
    },
    skillLabel: {
        marginBottom: theme.spacing(0.5),
        marginTop: theme.spacing(1.5)
    }
}));

const Skills = (props) => {
    const { skills = [] } = props;
    const classes = useStyles();

    const skillList = skills.map(({ category, skill }) => (
        <Box key={category}>
            <Typography variant="body1" align="left" className={classes.skillLabel}>
                <Box fontWeight={500}>{category}</Box>
            </Typography>

            <Box className={classes.root}>
                {skill.map((item) => (
                    <Chip key={item} label={item} variant="outlined" />
                ))}
            </Box>
        </Box>
    ));

    return <Fragment key="skilllist">{skillList}</Fragment>;
};

Skills.propTypes = {
    skills: PropTypes.arrayOf(
        PropTypes.shape({
            category: PropTypes.string.isRequired,
            skill: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired
        })
    ).isRequired
};

export default Skills;
