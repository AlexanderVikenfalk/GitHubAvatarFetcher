import React from 'react';
import PropTypes from 'prop-types';
import {useApi, apiStates} from '../api';
import Error from './Error';
import Loader from './Loader';

/**
 * Tries to fetch Github avatar from external API and will display a Loader
 * until either an error message or the retrieved image can be shown.
 * @param githubUserName
 * @returns {JSX.Element}
 * @constructor
 */
const Avatar = ({githubUserName}) => {
    const {state, error, data} = useApi(githubUserName);

    const Content = () => {
        switch (state) {
            case apiStates.ERROR:
                return <Error error={error} />;
            case apiStates.SUCCESS:
                return (
                    <figure className="avatar" data-testid="Avatar">
                        <img src={data.avatar_url} alt="Github user avatar" />
                    </figure>
                );
            default:
                return <Loader />;
        }
    };
    return <Content />;
};

Avatar.propTypes = {
    githubUserName: PropTypes.string.isRequired
};

export default Avatar;
