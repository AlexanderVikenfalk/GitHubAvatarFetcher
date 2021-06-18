import React from 'react';
import {shallow} from 'enzyme';
import {ButtonSecondary} from '../../components';
import {findByTestAttr, checkProps} from '../testUtils';

const defaultProps = {text: 'a text'};

const setup = (props = {}) => {
    const setupProps = {...defaultProps, ...props};
    return shallow(<ButtonSecondary {...setupProps} />);
};

describe('rendering', () => {
    let wrapper;

    beforeEach(() => {
        wrapper = setup();
    });

    it('renders without error', () => {
        const component = findByTestAttr(wrapper, 'ButtonSecondary');
        expect(component.length).toBe(1);
    });

    it('displays default prop text', () => {
        const component = findByTestAttr(wrapper, 'ButtonSecondary');
        expect(component.text()).toEqual('a text');
    });
});

describe('user interaction behavior', () => {
    it('calls onClick prop upon click', () => {
        const mockOnClick = jest.fn();

        const wrapper = setup({onClick: mockOnClick});
        const button = findByTestAttr(wrapper, 'ButtonSecondary');

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
            children: 'a text',
            className: 'button button--secondary button--enabled',
            'data-testid': 'ButtonSecondary',
            onClick: mockOnClick,
            type: 'button'
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

        checkProps(ButtonSecondary, expectedProps);
    });
});
