import { onUpdateField, onSubmitForm, onSetError, onSetFormErrors, onSetValues } from '../../common/helpers';
import { formValidation } from './account.validation';
import { history } from '../../core/router';
import { getAccount, updateAccount, insertAccount } from './account.api';
import { mapAccountFromApiToViewModel, mapAccountFromViewModelToApi } from './account.mappers';

const params = history.getParams();
const isEditMode = Boolean(params.id);

if (isEditMode) {
    getAccount(params.id).then(apiAcoount => {
        account = mapAccountFromApiToViewModel(apiAcoount);
        onSetValues(account);
    });
}

let account = {
    id: '',
    type: '',
    alias: '',
};

onUpdateField('type', (event) => {
    const value = event.target.value;
    account = {
        ...account,
        type: value,
    };
    formValidation.validateField('type', account.type).then(result => {
        onSetError('type', result);
    });
});

onUpdateField('alias', (event) => {
    const value = event.target.value;
    account = {
        ...account,
        alias: value,
    };
    formValidation.validateField('alias', account.alias).then(result => {
        onSetError('alias', result);
    });
});

const onSave = () => {
    const apiAcoount = mapAccountFromViewModelToApi(account);
    return isEditMode ? updateAccount(apiAcoount) : insertAccount(apiAcoount);
};

onSubmitForm('save-button', () => {
    formValidation.validateForm(account).then(result => {
        onSetFormErrors(result);
        if (result.succeeded) {
            onSave().then(apiAcoount => {
                history.back();
            });
        }
    });
});