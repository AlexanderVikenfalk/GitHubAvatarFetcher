import React from 'react';
import {mount, shallow} from 'enzyme';
import {MemoryRouter} from 'react-router-dom';
import Routes from '../../routes/routes';
import {findByTestAttr} from '../testUtils';

const allRoutes = [
    {name: 'Intro', path: '/'},
    {name: 'PersonalData', path: '/PersonalData'},
    {name: 'GitHubProfile', path: '/GitHubProfile'},
    {name: 'EmailAndConsent', path: '/EmailAndConsent'},
    {name: 'NotFound', path: '/NotFound'}
];

describe('rendering', () => {
    it('renders without error', () => {
        const wrapper = shallow(<Routes />);

        const component = findByTestAttr(wrapper, 'routes');
        expect(component.length).toBe(1);
    });

    /**
     *  Iterates over all routes and makes sure that a component
     *  with corresponding test-id is present.
     */
    allRoutes.forEach(({name, path}) => {
        it(`should render ${name}`, () => {
            const wrapper = mount(
                <MemoryRouter initialEntries={[path]}>
                    <Routes />
                </MemoryRouter>
            );
            const component = findByTestAttr(wrapper, name);
            expect(component.length).toBe(1);
        });
    });
});
