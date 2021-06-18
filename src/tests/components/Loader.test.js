import React from 'react';
import {shallow} from 'enzyme';
import {Loader} from '../../components';
import {findByTestAttr} from '../testUtils';

const setup = (props = {}) => shallow(<Loader />);

describe('rendering', () => {
    let wrapper;

    beforeEach(() => {
        wrapper = setup();
    });

    it('renders without error', () => {
        const component = findByTestAttr(wrapper, 'Loader');
        expect(component.length).toBe(1);
    });

    it('renders with default text', () => {
        expect(wrapper.text()).toEqual('Loading');
    });
});
