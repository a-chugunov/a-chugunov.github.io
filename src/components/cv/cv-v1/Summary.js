import React from 'react';
import PropTypes from 'prop-types';

const Summary = (props) => {
    const { summary } = props;
    return (
        <div id="objective">
            <p>{summary}</p>
        </div>
    );
};

Summary.propTypes = {
    summary: PropTypes.string.isRequired
};

export default Summary;
