import React from 'react';
import PropTypes from 'prop-types';

const Title = (props) => {
    const { name, contacts: { phone, email } = {} } = props;

    return (
        <div id="contact-info" className="vcard">
            <h1 className="fn">{name}</h1>
            <p>
                Cell: <span className="tel">{phone}</span>
                <br />
                Email:{' '}
                <a className="email" href={`mailto:${email}`}>
                    {email}
                </a>
            </p>
        </div>
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
