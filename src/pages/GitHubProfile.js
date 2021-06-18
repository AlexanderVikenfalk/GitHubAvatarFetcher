import React from 'react';
import {useStateMachine} from 'little-state-machine';
import {useHistory} from 'react-router-dom';
import {Avatar, ButtonSecondary} from '../components';

/**
 * Page for displaying collected user data together with user avatar collected
 * from Github
 * @returns {JSX.Element}
 * @constructor
 */
const GitHubProfile = () => {
    const {state} = useStateMachine();
    const {firstName, lastName, emailAddress, githubUserName} = state.data;
    const history = useHistory();

    const goBack = () => history.goBack();

    return (
        <div
            className="content react-transition fade-in"
            data-testid="GitHubProfile">
            <Avatar githubUserName={githubUserName} />
            <ul className="personal-data-list">
                <li>
                    <h4>@{githubUserName}</h4>
                </li>
                <li>
                    <h5>
                        {firstName} {lastName}
                    </h5>
                </li>
                <li>
                    <h5>{emailAddress}</h5>
                </li>
            </ul>
            <ButtonSecondary onClick={goBack} text="back" />
        </div>
    );
};

export default GitHubProfile;
