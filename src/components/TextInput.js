import React from 'react';
import PropTypes from 'prop-types';

/**
 * Smart component for standardizing the standard text input.
 * Is responsible for showing a corresponding error message when input field
 * criteria haven't been satisfied.
 * @param register
 * @param name
 * @param label
 * @param errors
 * @param isRequired
 * @param pattern
 * @returns {JSX.Element}
 * @constructor
 */
const TextInput = ({
    register,
    name,
    label,
    errors = {},
    isRequired = true,
    pattern = ''
}) => (
    <div className="text-input" data-testid="TextInput">
        <label htmlFor={name}>{label}</label>
        <input
            {...register(name, {
                required: isRequired,
                pattern: {
                    value: pattern
                }
            })}
            type="text"
            name={name}
            id={name}
            aria-label={label}
        />
        {errors && errors.type === 'required' && (
            <span className="validation-error" role="alert" aria-relevant="all">
                {label} is required
            </span>
        )}
        {errors && errors.type === 'pattern' && (
            <span className="validation-error" role="alert" aria-relevant="all">
                Has to be a valid email address
            </span>
        )}
    </div>
);

TextInput.propTypes = {
    register: PropTypes.func.isRequired,
    name: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    errors: PropTypes.shape({
        message: PropTypes.string,
        ref: PropTypes.shape({}),
        type: PropTypes.string
    }),
    isRequired: PropTypes.bool,
    pattern: PropTypes.instanceOf(RegExp)
};
export default TextInput;
