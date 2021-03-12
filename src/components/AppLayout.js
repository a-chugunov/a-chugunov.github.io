import React from 'react';
import PropTypes from 'prop-types';

import { Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import Navigation from './Navigation';
import Routes from './Routes';

const useStyles = makeStyles((theme) => ({
    mainWrapperBox: {
        backgroundColor: theme.palette.background.default,
        minHeight: '100vh'
    }
}));

const AppLayout = (props) => {
    const { themeToggler, themeType } = props;
    const classes = useStyles();
    return (
        <Box className={classes.mainWrapperBox}>
            <Navigation themeClick={themeToggler} isThemeLight={themeType} />
            {/* <Navigation /> */}
            <Routes />
            <div>
                <br />
                <br />
                <br />
            </div>
        </Box>
    );
};

AppLayout.propTypes = {
    themeToggler: PropTypes.func.isRequired,
    themeType: PropTypes.string.isRequired
};

export default AppLayout;
