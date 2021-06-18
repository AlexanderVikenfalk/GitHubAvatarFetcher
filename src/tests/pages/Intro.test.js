import React from 'react';
import {shallow} from 'enzyme';

import {Intro} from '../../pages';
import {findByTestAttr} from '../testUtils';

const mockHistoryPush = jest.fn();

jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useHistory: () => ({
        push: mockHistoryPush
    })
}));

const setup = () => shallow(<Intro />);

describe('rendering ', () => {
    let wrapper;

    beforeEach(() => {
        wrapper = setup();
    });

    it('shows text for first paragraph', () => {
        const component = findByTestAttr(wrapper, 'Intro');
        expect(component.find('p').first().text()).toBe(
            'After filling out some data about yourself we will retrieve you Github profile avatar and display it together with your data.'
        );
    });

    it('shows text for last paragraph', () => {
        const component = findByTestAttr(wrapper, 'Intro');
        expect(component.find('p').last().text()).toBe(
            'Press Next to get started.'
        );
    });

    it('renders without error', () => {
        const component = findByTestAttr(wrapper, 'Intro');
        expect(component.length).toBe(1);
    });

    it('pushes the new route on button click', () => {
        wrapper.find('ButtonPrimary').simulate('click');
        expect(mockHistoryPush).toHaveBeenCalledWith('/personaldata');
    });
});

describe('props', () => {
    let wrapper;
    beforeEach(() => {
        wrapper = setup();
    });

    it('sets the text prop of button', () => {
        expect(wrapper.find('ButtonPrimary').prop('text')).toBe('next');
    });
});
