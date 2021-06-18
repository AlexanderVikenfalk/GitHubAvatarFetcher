import React from 'react';
import {shallow} from 'enzyme';
import {checkProps, findByTestAttr} from '../testUtils';
import {TextInput} from '../../components';

const defaultProps = {
    register: () => {},
    name: 'a name',
    label: 'input field',
    errors: {
        message: '',
        ref: {},
        type: 'any type'
    }
};

const setup = (props = {}) => {
    const setupProps = {...defaultProps, ...props};
    return shallow(<TextInput {...setupProps} />);
};

describe('rendering', () => {
    it('renders without error', () => {
        const wrapper = setup();
        const component = findByTestAttr(wrapper, 'TextInput');
        expect(component.length).toBe(1);
    });

    it('renders with a validation error for required field', () => {
        const wrapper = setup({
            errors: {
                type: 'required'
            }
        });
        expect(wrapper.find('span').text()).toEqual('input field is required');
    });

    it('renders with a static error message for pattern validation', () => {
        const wrapper = setup({
            errors: {
                type: 'pattern'
            }
        });
        expect(wrapper.find('span').text()).toEqual(
            'Has to be a valid email address'
        );
    });
});

describe('prop validation', () => {

    it('sets all props values correctly in rendered TextInput component', () => {
        const mockRegister = jest.fn();

        const checkBoxValues = {
            register: mockRegister,
            name: 'dummy name',
            label: 'dummy field'
        };

        const expectedProps = {
            'aria-label': 'dummy field',
            id: 'dummy name',
            name: 'dummy name',
            type: 'text'
        };

        const wrapper = setup(checkBoxValues);
        expect(wrapper.find('input').props()).toStrictEqual(expectedProps);
    });

    it('does not throw warning with expected props', () => {
        const expectedProps = {
            register: () => {},
            name: 'this is a name',
            label: 'a label',
            errors: {
                message: 'in a bottle',
                ref: {},
                type: 'a type'
            },
            required: true,
            pattern: /^[A-Z0-9._%+-]/i
        };
        checkProps(TextInput, expectedProps);
    });
});
