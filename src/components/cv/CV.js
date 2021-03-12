import React, { useState, useEffect } from 'react';
import yaml from 'js-yaml';

import { makeStyles } from '@material-ui/core/styles';
import { Divider, Grid, Paper } from '@material-ui/core';

import Work from './Work';
import Education from './Education';
import Skills from './Skills';

import CvSection from '../basic/CvSection';
import CvTitle from './CvTitle';
import Summary from './Summary';

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
        minWidth: '400px',
        padding: theme.spacing(2),
        [theme.breakpoints.up('md')]: {
            marginRight: theme.spacing(5),
            marginLeft: theme.spacing(5)
        },
        [theme.breakpoints.down('sm')]: {
            marginRight: theme.spacing(2),
            marginLeft: theme.spacing(2)
        }
    },
    divider: {
        marginBottom: theme.spacing(3),
        marginTop: theme.spacing(3)
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
                        <CvTitle name={cvData.name} contacts={cvData.contacts} />
                        <Summary summary={cvData.summary} />
                        <Divider className={classes.divider} />
                        <CvSection title="Experience">
                            <Work work={cvData.work} />
                        </CvSection>
                        <Divider className={classes.divider} />
                        <CvSection title="Education">
                            <Education education={cvData.education} />
                        </CvSection>
                        <Divider className={classes.divider} />
                        <CvSection title="Skills">
                            <Skills skills={cvData.skills} />
                        </CvSection>
                    </Paper>
                </Grid>
            </Grid>
        </div>
    );
};

export default CV;
