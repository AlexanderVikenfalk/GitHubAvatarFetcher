import React from 'react';
import PropTypes from 'prop-types';

/**
 * Smart component for standardizing the standard checkbox input.
 * Is responsible for showing an error message when input field criteria haven't
 * been satisfied.
 * @param register
 * @param name
 * @param label
 * @param errors
 * @param isRequired
 * @returns {JSX.Element}
 * @constructor
 */
const CheckBox = ({register, name, label, errors = {}, isRequired = true}) => (
    <div className="check-box" data-testid="checkBox">
        <input
            {...register(name, {required: isRequired})}
            type="checkbox"
            name={name}
            id={name}
            aria-label={label}
            data-testid="checkBox-input"
        />
        <label htmlFor={name}>{label}</label>
        {errors && errors.type === 'required' && (
            <span className="validation-error" role="alert" aria-relevant="all">
                {label} is required
            </span>
        )}
    </div>
);

CheckBox.propTypes = {
    register: PropTypes.func.isRequired,
    name: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    errors: PropTypes.shape({
        message: PropTypes.string,
        ref: PropTypes.shape({}),
        type: PropTypes.string
    }),
    isRequired: PropTypes.bool
};

export default CheckBox;
