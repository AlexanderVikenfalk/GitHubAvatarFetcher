import React from 'react';
import {shallow} from 'enzyme';
import {checkProps, findByTestAttr} from '../testUtils';
import {Header} from '../../components';

const defaultProps = {text: 'dummy text'};

const setup = (props = {}) => {
    const setupProps = {...defaultProps, ...props};
    return shallow(<Header {...setupProps} />);
};
describe('rendering', () => {
    let wrapper;

    beforeEach(() => {
        wrapper = setup();
    });

    it('renders without error', () => {
        const component = findByTestAttr(wrapper, 'Header');
        expect(component.length).toBe(1);
    });

    it('renders with text prop', () => {
        expect(wrapper.text()).toEqual('dummy text');
    });
});

describe('prop validation', () => {
    const expectedProps = {
        text: 'test'
    };

    it('does not throw warning with expected props', () => {
        checkProps(Header, expectedProps);
    });
});
