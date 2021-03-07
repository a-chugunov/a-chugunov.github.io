import React from 'react';
import PropTypes from 'prop-types';

import { Link as RouterLink } from 'react-router-dom';

import { AppBar, Toolbar, Typography, Button, Icon, useScrollTrigger } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1
    },
    menuButton: {
        marginRight: theme.spacing(1),
        marginLeft: theme.spacing(1)
    },
    title: {
        alignItems: 'center'
    },
    myToolbar: {
        justifyContent: 'space-between'
    }
}));

const Navigation = (props) => {
    const { themeClick, isThemeLight } = props;
    const classes = useStyles();

    const trigger = useScrollTrigger({
        disableHysteresis: true,
        threshold: 0
    });

    return (
        <div className={classes.root}>
            <AppBar elevation={trigger ? 4 : 0} color={trigger ? 'default' : 'transparent'}>
                <Toolbar className={classes.myToolbar}>
                    <Typography variant="h6" color="inherit" className={classes.title}>
                        chugunov.dev
                    </Typography>

                    <div>
                        <Button
                            className={classes.menuButton}
                            color="inherit"
                            component={RouterLink}
                            to="/"
                        >
                            Home
                        </Button>

                        <Button
                            className={classes.menuButton}
                            color="inherit"
                            component={RouterLink}
                            to="/cv"
                        >
                            CV
                        </Button>
                    </div>

                    <div>
                        <Button
                            color="inherit"
                            target="_blank"
                            href="https://github.com/a-chugunov/"
                        >
                            <Icon className="fab fa-github" />
                        </Button>
                        <Button
                            color="inherit"
                            target="_blank"
                            href="https://www.linkedin.com/in/alexeychugunov/"
                        >
                            <Icon className="fab fa-linkedin-in" />
                        </Button>
                        <Button color="inherit" onClick={themeClick}>
                            {isThemeLight ? (
                                <Icon className="fas fa-moon" />
                            ) : (
                                <Icon className="fas fa-sun" />
                            )}
                        </Button>
                    </div>
                </Toolbar>
            </AppBar>
            <Toolbar className={classes.myToolbar} />
        </div>
    );
};

Navigation.propTypes = {
    themeClick: PropTypes.func.isRequired,
    isThemeLight: PropTypes.bool.isRequired
};

export default Navigation;
