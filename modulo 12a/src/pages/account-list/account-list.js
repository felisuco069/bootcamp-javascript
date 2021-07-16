import { getAccountList } from '../../common/helpers/account-list.api';
import { addAccountRows } from './account-list.helpers';
import { mapAcoountListFromApiToViewModel } from './account-list.mappers';
import { onUpdateField } from '../../common/helpers';
import { history } from '../../core/router';

getAccountList().then(accountList => {
    const viewModelAccountList = mapAcoountListFromApiToViewModel(accountList);
    addAccountRows(viewModelAccountList);

    viewModelAccountList.forEach(account => {
        onUpdateField(`select-${account.id}`, (event) => {
            const route = event.target.value;
            history.push(route);
        });
    });
});