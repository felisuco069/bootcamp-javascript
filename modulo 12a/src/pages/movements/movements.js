import { history } from '../../core/router';
import { getAccountList } from '../../common/helpers/account-list.api';
import { getMovementList } from './movements.api.js';
import { mapAccountFromApiToViewModel } from './movements.mappers.js';
import { addMovementRows } from './movements.helpers.js';


const params = history.getParams();

getAccountList().then(accountLists => {
    accountLists.find(accountList => {
        if (accountList.id === params.id) {
            const ccc = document.getElementById("balance");
            ccc.innerText = `${accountList.balance} €`;
            const alias = document.getElementById("alias")
            alias.innerText = accountList.name;
            const ibanNumber = document.getElementById("iban");
            ibanNumber.innerText = accountList.iban;
        }
    });
});

getMovementList().then(movements => {
    let results = movements.filter(movement => movement.accountId === params.id);
    let arrayMovements = results.map(result => mapAccountFromApiToViewModel(result));
    addMovementRows(arrayMovements);
});



