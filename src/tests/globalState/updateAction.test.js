import UpdateState from '../../globalState/updateState';
import backupInitialStore from './helperData/data';
import {checkProps} from '../testUtils';

describe('UpdateState', () => {
    describe('state assertion', () => {
        it('should return new state', () => {
            const assertionState = {
                firstName: 'test',
                lastName: 'a name',
                emailAddress: '',
                githubUserName: '',
                isConsenting: false
            };
            const payload = {firstName: 'test', lastName: 'a name'};

            const wrapper = UpdateState(backupInitialStore, payload);
            expect(wrapper.data).toEqual(assertionState);
        });
    });

    describe('prop validation', () => {

        const expectedProps = {
            state: backupInitialStore,
            payload: {name: 123}
        };
        it('does not throw warning with expected props', () => {
            checkProps(UpdateState, expectedProps);
        });
    });
});
