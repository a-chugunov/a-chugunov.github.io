import React from 'react';
import PropTypes from 'prop-types';

const Skills = (props) => {
    const { skills = [] } = props;

    const skillList = skills.map(({ category, skill }) => (
        <dd key={category}>
            <h2>{category}</h2>
            <p>
                <ul>
                    {skill.map((item) => (
                        <li key={item}>{item}</li>
                    ))}
                </ul>
            </p>
        </dd>
    ));

    return (
        <div>
            <dt>Skills</dt>
            {skillList}
        </div>
    );
};

export default Skills;

Skills.propTypes = {
    skills: PropTypes.arrayOf(
        PropTypes.shape({
            category: PropTypes.string.isRequired,
            skill: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired
        })
    ).isRequired
};
