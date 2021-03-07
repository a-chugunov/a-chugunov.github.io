/* eslint-disable */
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';

import { Button, Icon, useScrollTrigger } from '@material-ui/core';

import MenuIcon from '@material-ui/icons/Menu';
import Brightness4Icon from '@material-ui/icons/Brightness4';
import Brightness7Icon from '@material-ui/icons/Brightness7';

// import { Brightness4Icon as MoonIcon, Brightness7Icon as SunIcon } from '@material-ui/icons';

import PropTypes from 'prop-types';
import { Link as RouterLink } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
    grow: {
        flexGrow: 1
    },
    menuButton: {
        marginRight: theme.spacing(1),
        marginLeft: theme.spacing(1)
    },
    title: {
        display: 'block',
        flexGrow: 1
    },

    myToolbar: {
        justifyContent: 'space-between'
    },

    centerMenuDesktop: {
        display: 'none',

        [theme.breakpoints.up('sm')]: {
            display: 'flex'
        }
    },
    centerMenuMobile: {
        display: 'flex',
        [theme.breakpoints.up('sm')]: {
            display: 'none'
        }
    },

    sectionDesktop: {
        display: 'none',
        [theme.breakpoints.up('sm')]: {
            display: 'flex'
        }
    },
    sectionMobile: {
        display: 'flex',
        [theme.breakpoints.up('sm')]: {
            display: 'none'
        }
    }
}));

const Navigation = (props) => {
    const { themeClick, isThemeLight } = props;

    const classes = useStyles();
    const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);
    const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

    const [mobileCenterMoreAnchorEl, setMobileCenterMoreAnchorEl] = React.useState(null);
    const isMobileCenterMenuOpen = Boolean(mobileCenterMoreAnchorEl);

    const trigger = useScrollTrigger({
        disableHysteresis: true,
        threshold: 0
    });

    const mobileCenterMenuId = 'primary-account-menu-mobile';
    const renderMobileCenterMenu = (
        <Menu
            anchorEl={mobileCenterMoreAnchorEl}
            anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
            id={mobileCenterMenuId}
            keepMounted
            transformOrigin={{ vertical: 'top', horizontal: 'right' }}
            open={isMobileCenterMenuOpen}
            onClose={() => {
                setMobileCenterMoreAnchorEl(null);
            }}
        >
            <MenuItem
                onClick={() => {
                    setMobileCenterMoreAnchorEl(null);
                }}
                component={RouterLink}
                to="/"
            >
                <Typography variant="button">Home</Typography>
            </MenuItem>
            <MenuItem
                onClick={() => {
                    setMobileCenterMoreAnchorEl(null);
                }}
                component={RouterLink}
                to="/cv"
            >
                <Typography variant="button">CV</Typography>
            </MenuItem>
        </Menu>
    );

    const mobileMenuId = 'primary-account-menu-mobile';
    const renderMobileMenu = (
        <Menu
            anchorEl={mobileMoreAnchorEl}
            anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
            id={mobileMenuId}
            keepMounted
            transformOrigin={{ vertical: 'top', horizontal: 'right' }}
            open={isMobileMenuOpen}
            onClose={() => {
                setMobileMoreAnchorEl(null);
            }}
        >
            <MenuItem
                onClick={() => {
                    setMobileMoreAnchorEl(null);
                }}
                component={Button}
                target="_blank"
                href="https://github.com/a-chugunov/"
            >
                <IconButton color="inherit">
                    <Icon className="fab fa-github" />
                </IconButton>
                Github
            </MenuItem>
            <MenuItem
                onClick={() => {
                    setMobileMoreAnchorEl(null);
                }}
                component={Button}
                target="_blank"
                href="https://www.linkedin.com/in/alexeychugunov/"
            >
                <IconButton color="inherit">
                    <Icon className="fab fa-linkedin-in" />
                </IconButton>
                Linkedin
            </MenuItem>
        </Menu>
    );

    return (
        <div className={classes.grow}>
            <AppBar elevation={trigger ? 4 : 0} color={trigger ? 'default' : 'transparent'}>
                <Toolbar className={classes.myToolbar}>
                    <Typography className={classes.title} variant="h6" noWrap>
                        chugunov.dev
                    </Typography>

                    <div className={classes.centerMenuDesktop}>
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

                    <div className={classes.centerMenuMobile}>
                        <IconButton
                            aria-label="show more"
                            aria-controls={mobileCenterMenuId}
                            aria-haspopup="true"
                            onClick={(event) => {
                                setMobileCenterMoreAnchorEl(event.currentTarget);
                            }}
                            color="inherit"
                        >
                            <MenuIcon />
                        </IconButton>
                    </div>

                    <div className={classes.grow} />

                    <div className={classes.sectionDesktop}>
                        <IconButton
                            color="inherit"
                            target="_blank"
                            href="https://github.com/a-chugunov/"
                        >
                            <Icon className="fab fa-github" />
                        </IconButton>

                        <IconButton
                            color="inherit"
                            target="_blank"
                            href="https://www.linkedin.com/in/alexeychugunov/"
                        >
                            <Icon className="fab fa-linkedin-in" />
                        </IconButton>
                        <IconButton color="inherit" onClick={themeClick}>
                            {isThemeLight ? <Brightness4Icon /> : <Brightness7Icon />}
                        </IconButton>
                    </div>
                    <div className={classes.sectionMobile}>
                        <IconButton
                            aria-label="show more"
                            aria-controls={mobileMenuId}
                            aria-haspopup="true"
                            onClick={(event) => {
                                setMobileMoreAnchorEl(event.currentTarget);
                            }}
                            color="inherit"
                        >
                            <Icon className="fas fa-user-circle" />
                        </IconButton>
                        <IconButton color="inherit" onClick={themeClick}>
                            {isThemeLight ? <Brightness4Icon /> : <Brightness7Icon />}
                        </IconButton>
                    </div>
                </Toolbar>
            </AppBar>
            <Toolbar />
            {renderMobileMenu}
            {renderMobileCenterMenu}
        </div>
    );
};

Navigation.propTypes = {
    themeClick: PropTypes.func.isRequired,
    isThemeLight: PropTypes.bool.isRequired
};

export default Navigation;
