import React from 'react';
import {shallow} from 'enzyme';
import {NotFound} from '../../pages';
import {findByTestAttr} from '../testUtils';

const setup = () => shallow(<NotFound />);

const mockHistoryPush = jest.fn();
jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useHistory: () => ({
        push: mockHistoryPush
    })
}));

describe('NotFound', () => {
    let wrapper;
    beforeEach(() => {
        wrapper = setup(<NotFound />);
    });
    describe('Rendering', () => {
        it('pushes the new route on button click', () => {
            wrapper.find('ButtonSecondary').simulate('click');
            expect(mockHistoryPush).toHaveBeenCalledWith('/');
        });

        it('renders without error', () => {
            const component = findByTestAttr(wrapper, 'NotFound');
            expect(component.length).toBe(1);
        });

        it('shows text for header', () => {
            expect(wrapper.find('h2').text()).toBe('Page Not Found');
        });

        it('shows text for paragraph', () => {
            expect(wrapper.find('p').text()).toBe(
                'Please press the button to go back to the start page'
            );
        });
    });
    describe('Props', () => {
        it('sets text prop', () => {
            expect(wrapper.find('ButtonSecondary').prop('text')).toBe('Home');
        });
    });
});
