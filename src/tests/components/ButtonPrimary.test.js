import React from 'react';
import {shallow} from 'enzyme';
import {ButtonPrimary} from '../../components';
import {findByTestAttr, checkProps} from '../testUtils';

const defaultProps = {text: 'a text'};

/**
 * Factory function to create shallow wrapper
 * @param props - Input props
 * @returns {*} - Shallow wrapper
 */
const setup = (props = {}) => {
    const setupProps = {...defaultProps, ...props};
    return shallow(<ButtonPrimary {...setupProps} />);
};

describe('rendering', () => {
    let wrapper;

    beforeEach(() => {
        wrapper = setup();
    });

    it('renders without error', () => {
        const component = findByTestAttr(wrapper, 'ButtonPrimary');
        expect(component.length).toBe(1);
    });

    it('displays default prop text', () => {
        const component = findByTestAttr(wrapper, 'ButtonPrimary');
        expect(component.text()).toEqual('a text');
    });
});

describe('user interaction behavior', () => {
    it('calls onClick prop upon click', () => {
        const mockOnClick = jest.fn();

        const wrapper = setup({onClick: mockOnClick});
        const button = findByTestAttr(wrapper, 'ButtonPrimary');

        button.simulate('click');

        expect(mockOnClick).toHaveBeenCalled();
    });
});

describe('prop validation', () => {
    const mockOnClick = jest.fn();

    it('sets all props values correctly', () => {
        const buttonValues = {
            isEnabled: false,
            type: 'submit',
            onClick: mockOnClick
        };

        const expectedProps = {
            'aria-disabled': true,
            children: 'a text',
            className: 'button button--primary button--disabled',
            'data-testid': 'ButtonPrimary',
            disabled: true,
            onClick: mockOnClick,
            type: 'submit'
        };

        const wrapper = setup(buttonValues);
        expect(wrapper.props()).toStrictEqual(expectedProps);
    });

    it('does not throw warning with expected props', () => {
        const expectedProps = {
            text: 'text',
            onClick: () => {},
            isEnabled: false,
            type: 'button'
        };

        checkProps(ButtonPrimary, expectedProps);
    });
});
