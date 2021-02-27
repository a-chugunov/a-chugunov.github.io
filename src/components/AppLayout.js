import React from 'react';

import './AppLayout.css';

const AppLayout = () => {
    return (
        <body>
            <div id="page-wrap">
                <div id="contact-info" className="vcard">
                    <h1 className="fn">Alexey Chugunov</h1>

                    <p>
                        Cell: <span className="tel">+44 (0) 7532 609248</span>
                        <br />
                        Email:{' '}
                        <a className="email" href="mailto:achugunov@nes.ru">
                            achugunov@nes.ru
                        </a>
                    </p>
                </div>

                <div id="objective">
                    <p>Quant Dev with a focus on delivering Big Data Cloud Financial Solutions.</p>
                </div>

                <div className="clear" />

                <dl>
                    <dd className="clear" />

                    <dt>Education</dt>
                    <dd>
                        <h2>New Economic School</h2>
                        <p>
                            <strong>MA</strong> in Economics
                            <br />
                            <strong>Thesis:</strong> Copula-marginals parametrization trade-off in
                            models for financial returns
                        </p>
                    </dd>
                    <dd>
                        <h2>Moscow State University</h2>
                        <p>
                            <strong>Specialist</strong> in Mathematics and Computer Science
                            <br />
                            <strong>Thesis:</strong> Pareto frontier visualisation in complex
                            potential assessment systems
                        </p>
                    </dd>

                    <dd className="clear" />

                    <dt>Skills</dt>
                    <dd>
                        <h2>Financial skills</h2>
                        <p>Derivatives, Commodities, Equities, Structured Finance</p>

                        <h2>Computer skills</h2>
                        <p>Python, R, C++, Matlab, Javascript, SQL</p>
                    </dd>

                    <dd className="clear" />

                    <dt>Experience</dt>
                    <dd>
                        <h2>
                            Citi <span>2020-Present</span>
                        </h2>
                        <ul>
                            <li>Commodities Model Validation</li>
                            <li>Quant Development</li>
                        </ul>

                        <h2>
                            EY <span>2017-2020</span>
                        </h2>
                        <ul>
                            <li>Technical Validation</li>
                            <li>Solution Architect</li>
                            <li>DevOps</li>
                        </ul>
                    </dd>

                    <dd className="clear" />
                </dl>

                <div className="clear" />
            </div>
        </body>
    );
};

export default AppLayout;
