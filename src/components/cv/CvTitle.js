import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Typography, Link } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    titleMargin: {
        marginBottom: theme.spacing(1),
        marginTop: theme.spacing(1)
    }
}));

const Title = (props) => {
    const { name, contacts: { phone, email } = {} } = props;
    const classes = useStyles();

    return (
        <Fragment key="cvtitle">
            <Typography variant="h3" className={classes.titleMargin}>
                {name}
            </Typography>
            <Typography variant="body1">{phone}</Typography>
            <Typography variant="body1">
                <Link href={`mailto:${email}`} color="inherit">
                    {email}
                </Link>
            </Typography>
        </Fragment>
    );
};

Title.propTypes = {
    name: PropTypes.string.isRequired,
    contacts: PropTypes.shape({
        phone: PropTypes.string.isRequired,
        email: PropTypes.string.isRequired
    }).isRequired
};

export default Title;
