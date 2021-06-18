import React from 'react';
import PropTypes from 'prop-types';

/**
 * Primary button, used for forward progression.
 * @param text
 * @param onClick
 * @param isEnabled
 * @param type
 * @returns {JSX.Element}
 * @constructor
 */
const ButtonPrimary = ({
    text,
    onClick = () => {},
    isEnabled = true,
    type = 'button'
}) => (
    <button
        type={type}
        onClick={onClick}
        disabled={!isEnabled}
        aria-disabled={!isEnabled}
        className={`button button--primary button--${
            isEnabled ? 'enabled' : 'disabled'
        }`}
        data-testid="ButtonPrimary">
        {text}
    </button>
);

ButtonPrimary.propTypes = {
    text: PropTypes.string.isRequired,
    onClick: PropTypes.func,
    isEnabled: PropTypes.bool,
    type: PropTypes.oneOf(['button', 'submit'])
};

export default ButtonPrimary;
