import React from 'react';
import {shallow} from 'enzyme';
import {screen, render, fireEvent, act, cleanup} from '@testing-library/react';
import {PersonalData} from '../../pages';
import {findByTestAttr} from '../testUtils';

const mockHistoryPush = jest.fn();
const mockHistoryGoBack = jest.fn();

jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useHistory: () => ({
        push: mockHistoryPush,
        goBack: mockHistoryGoBack
    })
}));

describe('navigation', () => {
    it('calls the goBack function when clicking secondary button', () => {
        const wrapper = shallow(<PersonalData />);
        wrapper.find('ButtonSecondary').simulate('click');
        expect(mockHistoryGoBack).toHaveBeenCalled();
    });
});

describe('rendering', () => {
    const setup = () => render(<PersonalData />);

    describe('form is valid', () => {
        afterEach(() => cleanup());

        it('render the "next" button disabled by default', () => {
            setup();
            expect(screen.getByTestId('PersonalData')).toBeInTheDocument();
        });

        it('render the "next" button disabled by default', () => {
            setup();
            expect(screen.getByText('next')).toBeDisabled();
        });

        it('should enable "next" button if all fields have been filled out', async () => {
            setup();
            expect(screen.getByText('next')).toBeDisabled();

            expect(screen.getByLabelText('First name')).toBeInTheDocument();
            await act(async () => {
                fireEvent.change(screen.getByLabelText('First name'), {
                    target: {value: 'Mister'}
                });
                fireEvent.change(screen.getByLabelText('Last name'), {
                    target: {value: 'Mustermann'}
                });
                fireEvent.change(screen.getByLabelText('Github User Name'), {
                    target: {value: 'githubname'}
                });
            });

            expect(screen.getByTestId('ButtonPrimary')).not.toBeDisabled();
        });
    });

    describe('form is invalid', () => {
        afterEach(() => cleanup());
        const inputLabels = ['First name', 'Last name', 'Github User Name'];

        inputLabels.forEach((label) => {
            it(`should display an error message when ${label} field is empty after being touched`, async () => {
                setup();

                expect(screen.getByLabelText(label)).toBeInTheDocument();
                await act(async () => {
                    fireEvent.change(screen.getByLabelText(label), {
                        target: {value: 'Test'}
                    });
                });

                await act(async () => {
                    fireEvent.change(screen.getByLabelText(label), {
                        target: {value: ''}
                    });
                });

                expect(screen.getByRole('alert')).toHaveTextContent(
                    `${label} is required`
                );
            });
        });
    });
});
