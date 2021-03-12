import React from 'react';
import PropTypes from 'prop-types';

const Work = (props) => {
    const { work = [] } = props;

    const workList = work.map(({ company, years, location, position, summary, highlights }) => (
        <dd key={company}>
            <h2>
                {company}
                <span>{years}</span>
            </h2>
            <h2>
                {position}
                <span>{location}</span>
            </h2>
            <p>
                {summary}
                <br />
                <ul>
                    {highlights.map((item) => (
                        <li key={item}>{item}</li>
                    ))}
                </ul>
            </p>
        </dd>
    ));

    return (
        <div>
            <dt>Experience</dt>
            {workList}
        </div>
    );
};

export default Work;

Work.propTypes = {
    work: PropTypes.arrayOf(
        PropTypes.shape({
            company: PropTypes.string.isRequired,
            years: PropTypes.string.isRequired,
            location: PropTypes.string.isRequired,
            position: PropTypes.string.isRequired,
            summary: PropTypes.string.isRequired,
            highlights: PropTypes.string.isRequired
        })
    ).isRequired
};
