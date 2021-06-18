import store from '../../globalState/store';
import backupInitialStore from './helperData/data';

it('should match backup store', () => {
    expect(store).toStrictEqual(backupInitialStore);
});
