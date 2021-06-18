import React from 'react';
import {shallow} from 'enzyme';
import {checkProps, findByTestAttr} from '../testUtils';
import {CheckBox} from '../../components';

const defaultProps = {
    register: () => {},
    name: 'any name',
    label: 'dummy field',
    errors: {
        message: 'a message',
        ref: {},
        type: 'any type'
    }
};

const setup = (props = {}) => {
    const setupProps = {...defaultProps, ...props};
    return shallow(<CheckBox {...setupProps} />);
};

describe('rendering', () => {
    it('renders without error', () => {
        const wrapper = setup();
        const component = findByTestAttr(wrapper, 'checkBox');
        expect(component.length).toBe(1);
    });

    it('renders with a validation error', () => {
        const wrapper = setup({
            errors: {
                type: 'required'
            }
        });
        expect(wrapper.find('span').text()).toEqual('dummy field is required');
    });
});

describe('prop validation', () => {
    it('sets all props values correctly in rendered CheckBox component', () => {
        const mockRegister = jest.fn();

        const checkBoxValues = {
            register: mockRegister,
            name: 'dummy name',
            label: 'dummy field'
        };

        const expectedProps = {
            'aria-label': 'dummy field',
            'data-testid': 'checkBox-input',
            id: 'dummy name',
            name: 'dummy name',
            type: 'checkbox'
        };

        const wrapper = setup(checkBoxValues);
        expect(wrapper.find('input').props()).toStrictEqual(expectedProps);
    });

    const expectedProps = {
        register: () => {},
        name: 'a name',
        label: 'a label',
        errors: {
            message: 'in a bottle',
            ref: {},
            type: 'a type'
        },
        required: true
    };

    it('does not throw warning with expected props', () => {
        checkProps(CheckBox, expectedProps);
    });
});
