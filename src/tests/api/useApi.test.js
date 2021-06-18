import React from 'react';
import {renderHook, act} from '@testing-library/react-hooks';
import useApiFetch from '../../api/useApi';

const useApiFetchMock = [{avatar_url: 'http://gh.com/profilename'}];

/**
 * Mocking successful fetch
 * @param mockData
 */
const mockFetch = (mockData) => {
    global.fetch = jest.fn().mockImplementation(() =>
        Promise.resolve({
            ok: true,
            json: () => Promise.resolve(mockData)
        } )
    );
};

/**
 * Mocking rejected fetch
 * @param error
 */
const mockFetchError = (error) => {
    global.fetch = jest.fn().mockImplementation(() => Promise.reject(error));
};

/**
 * cleanup function
 */
const mockFetchCleanUp = () => {
    global.fetch.mockClear();
    delete global.fetch;
};

describe('useApiFetch states', () => {
    afterEach(() => mockFetchCleanUp());

    it('should set success state', async () => {
        mockFetch(useApiFetchMock);
        const {result, waitForNextUpdate} = renderHook(() =>
            useApiFetch('profilename')
        );
        await act(async () => {
            await waitForNextUpdate();
        });
        expect(result.current).toMatchObject({
            data: useApiFetchMock,
            error: '',
            state: 'SUCCESS'
        });
    });

    it('sets error state', async () => {
        mockFetchError('Network Error');

        const {result, waitForNextUpdate} = renderHook(() =>
            useApiFetch('test')
        );
        await act(async () => {
            await waitForNextUpdate();
        });
        expect(result.current).toMatchObject({
            data: [],
            error: 'an unknown error has occurred',
            state: 'ERROR'
        });
    });
});
