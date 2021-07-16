import { history } from '../../core/router';
import { onSetValues } from '../../common/helpers/element.helpers';
import { getMovementList, getAccountList } from './movements.api.js';
import { mapMovementstFromApiToViewModel, mapAccountFromApiToViewModel } from './movements.mappers.js';
import { addMovementRows } from './movements.helpers.js';


const params = history.getParams();
console.log(params.id);

getAccountList(params.id).then(accountLists => {

    const account = mapAccountFromApiToViewModel(accountLists);
    onSetValues(account);
});

getMovementList(params.id).then(movements => {
    let arrayMovements = movements.map(movement => mapMovementstFromApiToViewModel(movement));
    addMovementRows(arrayMovements);
});



