import React from 'react';
import {useHistory} from 'react-router-dom';
import {ButtonPrimary} from '../components';

/**
 * Page displaying welcome message and instructions.
 * @returns {JSX.Element}
 * @constructor
 */
const Intro = () => {
    const history = useHistory();

    const proceed = () => {
        history.push('/personaldata');
    };

    return (
        <div className="content react-transition fade-in" data-testid="Intro">
            <p>
                After filling out some data about yourself
                we will retrieve you Github profile avatar and display it
                together with your data.
            </p>
            <p>Press Next to get started.</p>
            <ButtonPrimary text="next" onClick={() => proceed()} />
        </div>
    );
};

export default Intro;
