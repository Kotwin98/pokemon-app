import React from 'react';

import './Spinner.scss';

const spinner = () => (
    <div className="lds-ring">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
    </div>
);

export default spinner;