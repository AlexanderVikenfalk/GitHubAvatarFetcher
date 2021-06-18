import React from 'react';
import PropTypes from 'prop-types';

/**
 * Will display provided error message together with an error text and
 * instructions of how to proceed.
 * @param error
 * @returns {JSX.Element}
 * @constructor
 */
const Error = ({error}) => (
    <div role="alert" aria-relevant="all" className="error" data-testid="Error">
        <h3>
            The image could not be retrieved. The request failed with error:
        </h3>
        <h2>{error}</h2>
        <h3>Please try again</h3>
    </div>
);

Error.propTypes = {
    error: PropTypes.string.isRequired
};

export default Error;
