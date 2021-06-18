import {shallow} from 'enzyme';
import React from 'react';
import {checkProps, findByTestAttr} from '../testUtils';
import {Error} from '../../components';

const defaultProps = {
    error: 'Dummy error'
};

const setup = (props = {}) => {
    const setupProps = {...defaultProps, ...props};
    return shallow(<Error {...setupProps} />);
};
describe('rendering', () => {
    let wrapper;

    beforeEach(() => {
        wrapper = setup();
    });

    it('renders without error', () => {
        const component = findByTestAttr(wrapper, 'Error');
        expect(component.length).toBe(1);
    });

    it('displays first static part of error message', () => {
        const component = findByTestAttr(wrapper, 'Error');
        expect(component.find('h3').first().text()).toEqual(
            'The image could not be retrieved. The request failed with error:'
        );
    });

    it('displays last static part of error message', () => {
        const component = findByTestAttr(wrapper, 'Error');
        expect(component.find('h3').last().text()).toEqual('Please try again');
    });

    it('displays error from props', () => {
        const component = findByTestAttr(wrapper, 'Error');
        expect(component.find('h2').text()).toEqual('Dummy error');
    });
});

describe('prop validation', () => {
    const expectedProps = {
        error: 'an error'
    };

    it('does not throw warning with expected props', () => {
        checkProps(Error, expectedProps);
    });
});
