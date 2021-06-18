import React from 'react';
import PropTypes from 'prop-types';

/**
 * Wrapper for standardizing headers.
 * @param text
 * @returns {JSX.Element}
 * @constructor
 */
const Header = ({text}) => (
    <header data-testid="Header">
        <h1>{text}</h1>
    </header>
);

Header.propTypes = {
    text: PropTypes.string.isRequired
};

export default Header;
