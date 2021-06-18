import React from 'react';
import {render, screen} from '@testing-library/react';
import {GitHubProfile} from '../../pages';

describe('rendering', () => {
    it('renders without error', () => {
        render(<GitHubProfile />);
        expect(screen.getByTestId('GitHubProfile')).toBeInTheDocument();
    });

    it('renders the user data from mocked state', () => {
        render(<GitHubProfile />);
        expect(screen.getByTestId('GitHubProfile')).toHaveTextContent('Mister');
        expect(screen.getByTestId('GitHubProfile')).toHaveTextContent(
            'Mockman'
        );
        expect(screen.getByTestId('GitHubProfile')).toHaveTextContent(
            'test@doreply.com'
        );
        expect(screen.getByTestId('GitHubProfile')).toHaveTextContent(
            'GitHubMaster2000'
        );
    });
});
