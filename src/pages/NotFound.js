import React from 'react';
import {useHistory} from 'react-router-dom';
import {ButtonSecondary} from '../components';

/**
 * Page displayed when route is not matching
 * @returns {JSX.Element}
 * @constructor
 */
const NotFound = () => {
    const history = useHistory();

    const goBack = () => {
        history.push('/');
    };

    return (
        <div
            className="content react-transition fade-in"
            data-testid="NotFound">
            <h2 className="validation-error">Page Not Found</h2>
            <p>Please press the button to go back to the start page</p>
            <ButtonSecondary onClick={goBack} text="Home" />
        </div>
    );
};

export default NotFound;
