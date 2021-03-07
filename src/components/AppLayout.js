import React from 'react';
import PropTypes from 'prop-types';

import Navigation from './Navigation';
import Routes from './Routes';

const AppLayout = (props) => {
    const { themeToggler, themeType } = props;
    return (
        <div>
            <Navigation themeClick={themeToggler} isThemeLight={themeType} />
            {/* <Navigation /> */}
            <Routes />
        </div>
    );
};

AppLayout.propTypes = {
    themeToggler: PropTypes.func.isRequired,
    themeType: PropTypes.string.isRequired
};

export default AppLayout;
