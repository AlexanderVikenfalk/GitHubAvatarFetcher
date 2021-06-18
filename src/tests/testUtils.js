import {checkPropTypes} from 'prop-types';

/**
 * Returns an element matching the given data test name.
 * @param wrapper - Enzyme shallow wrapper.
 * @param name - Name of data-testid attribute for search.
 * @returns {ShallowWrapper}
 */
export const findByTestAttr = (wrapper, name) =>
    wrapper.find(`[data-testid="${name}"]`);

/**
 *  Matches given props with the actual prop-types for the component and asserts
 *  that there is no error thrown.
 * @param component - React component.
 * @param conformingProps - Object of conforming props.
 * @returns {undefined} - Throws error if props do not conform.
 */
export const checkProps = (component, conformingProps) =>
    checkPropTypes(
        component.propTypes,
        conformingProps,
        'prop',
        component.name
    );
