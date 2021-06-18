import React from 'react';
import {act, fireEvent, render, screen, cleanup} from '@testing-library/react';
import {EmailAndConsent} from '../../pages';

describe('rendering', () => {
    afterEach(() => cleanup());

    describe('form is valid', () => {
        it('renders without error', () => {
            render(<EmailAndConsent />);
            expect(screen.getByTestId('EmailAndConsent')).toBeInTheDocument();
        });

        it('shows the "submit" button as disabled by default', () => {
            render(<EmailAndConsent />);
            expect(screen.getByText('submit')).toBeDisabled();
        });

        it('should enable "submit" button if all fields have been filled out', async () => {
            render(<EmailAndConsent />);
            expect(screen.getByText('submit')).toBeDisabled();
            await act(async () => {
                fireEvent.change(screen.getByLabelText('Email'), {
                    target: {value: 'test@email.com'}
                });

                fireEvent.click(
                    screen.getByLabelText('Agree with terms and services')
                );
            });
            expect(screen.getByText('submit')).not.toBeDisabled();
        });
    });
    describe('form is invalid', () => {
        it(`should display an error message when Email field is empty after being touched`, async () => {
            render(<EmailAndConsent />);

            expect(screen.getByLabelText('Email')).toBeInTheDocument();

            await act(async () => {
                fireEvent.change(screen.getByLabelText('Email'), {
                    target: {value: 'Test@internet.com'}
                });
            });

            await act(async () => {
                fireEvent.change(screen.getByLabelText('Email'), {
                    target: {value: ''}
                });
            });

            expect(screen.getByRole('alert')).toHaveTextContent(
                'Email is required'
            );
        });

        it('should display an error message when email address has the wrong format', async () => {
            render(<EmailAndConsent />);

            expect(
                screen.getByLabelText('Agree with terms and services')
            ).toBeInTheDocument();

            await act(async () => {
                fireEvent.change(screen.getByLabelText('Email'), {
                    target: {value: 'not an email address'}
                });
            });

            expect(screen.getByRole('alert')).toHaveTextContent(
                'Has to be a valid email address'
            );
        });

        it('should display an error message when "Agree with terms and services" field is empty after being touched', async () => {
            render(<EmailAndConsent />);

            expect(
                screen.getByLabelText('Agree with terms and services')
            ).toBeInTheDocument();

            await act(async () => {
                fireEvent.click(
                    screen.getByLabelText('Agree with terms and services')
                );
            });

            expect(
                screen.getByLabelText('Agree with terms and services')
            ).toBeChecked();

            await act(async () => {
                fireEvent.click(
                    screen.getByLabelText('Agree with terms and services')
                );
            });

            expect(
                screen.getByLabelText('Agree with terms and services')
            ).not.toBeChecked();

            expect(screen.getByRole('alert')).toHaveTextContent(
                'Agree with terms and services is required'
            );
        });
    });
});
