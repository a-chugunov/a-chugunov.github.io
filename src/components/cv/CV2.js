import React, { useState, useEffect } from 'react';
import yaml from 'js-yaml';

import { makeStyles } from '@material-ui/core/styles';
import { Grid, Paper } from '@material-ui/core';

import Work2 from './Work2';
import Education2 from './Education2';

import './CV.css';
import CvSection from '../basic/CvSection';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        '& > *': {
            margin: theme.spacing(1),
            width: theme.spacing(16),
            height: theme.spacing(16)
        }
    },
    gridRoot: {
        flexGrow: 1
    },
    cvPaper: {
        maxWidth: '800px',
        padding: theme.spacing(2),
        [theme.breakpoints.up('md')]: {
            marginRight: theme.spacing(5),
            marginLeft: theme.spacing(5)
        },
        [theme.breakpoints.down('sm')]: {
            marginRight: theme.spacing(2),
            marginLeft: theme.spacing(2)
        }
    }
}));

const CV = () => {
    const classes = useStyles();
    const [cvData, setCvData] = useState({});

    useEffect(() => {
        fetch('/data/CV.yaml')
            .then((response) => response.text())
            .then((datastring) => {
                const yamldata = yaml.loadAll(datastring);
                setCvData(yamldata[0]);
            });
    }, []);

    return (
        <div>
            <Grid
                container
                className={classes.gridRoot}
                direction="column"
                alignItems="center"
                justify="center"
            >
                <Grid item xs={12}>
                    <Paper className={classes.cvPaper} elevation={3}>
                        <CvSection title="Experience">
                            <Work2 work={cvData.work} />
                        </CvSection>
                        <CvSection title="Education">
                            <Education2 education={cvData.education} />
                        </CvSection>
                        <CvSection title="Skills">{JSON.stringify(cvData.skills)}</CvSection>
                        <CvSection title="Skills">{JSON.stringify(cvData.skills)}</CvSection>
                    </Paper>
                </Grid>
            </Grid>
        </div>
    );
};

export default CV;
