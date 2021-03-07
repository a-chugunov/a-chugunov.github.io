import React from 'react';
import PropTypes from 'prop-types';

const Education = (props) => {
    const { education = [] } = props;

    const edList = education.map(({ institution, degree, years, highlights }) => (
        <dd key={institution}>
            <h2>
                {institution}
                <span>{years}</span>
            </h2>
            <p>
                {degree}
                <br />
                {highlights}
            </p>
        </dd>
    ));

    return (
        <div>
            <dt>Education</dt>
            {edList}
        </div>
    );
};

export default Education;

Education.propTypes = {
    education: PropTypes.arrayOf(
        PropTypes.shape({
            institution: PropTypes.string.isRequired,
            degree: PropTypes.string.isRequired,
            years: PropTypes.string.isRequired,
            highlights: PropTypes.string.isRequired
        })
    ).isRequired
};
