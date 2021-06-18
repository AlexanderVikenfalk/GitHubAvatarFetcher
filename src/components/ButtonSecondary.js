import React from 'react';
import PropTypes from 'prop-types';

/**
 * Secondary button, used for navigating backwards.
 * @param text
 * @param onClick
 * @returns {JSX.Element}
 * @constructor
 */
const ButtonSecondary = ({text, onClick = () => {}}) => (
    <button
        type="button"
        onClick={onClick}
        className="button button--secondary button--enabled"
        data-testid="ButtonSecondary">
        {text}
    </button>
);

ButtonSecondary.propTypes = {
    text: PropTypes.string.isRequired,
    onClick: PropTypes.func
};

export default ButtonSecondary;
