import React, { useState, useEffect } from 'react';
import yaml from 'js-yaml';

import Title from './Title';
import Summary from './Summary';
import Work from './Work';
import Education from './Education';
import Skills from './Skills';

const CV = () => {
    const [cvData, setCvData] = useState({});

    useEffect(() => {
        fetch('/data/CV.yaml')
            .then((response) => response.text())
            .then((datastring) => {
                const yamldata = yaml.loadAll(datastring);
                setCvData(yamldata[0]);
            });
    }, []);

    return (
        <div id="page-wrap">
            <div className="clear" />
            <Title name={cvData.name} contacts={cvData.contacts} />
            <div className="clear" />
            <Summary summary={cvData.summary} />
            <div className="clear" />
            <dl>
                <Work work={cvData.work} />
                <div className="clear" />
                <Education education={cvData.education} />
                <div className="clear" />
                <Skills skills={cvData.skills} />
                <div className="clear" />
            </dl>
        </div>
    );
};

export default CV;
