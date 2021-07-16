import { getAccountList } from '../../common/helpers/account-list.api.js';
import { history } from '../../core/router';
import { setAccountOptions } from './transfer.helpers.js'
import { onUpdateField, onSubmitForm, onSetError, onSetFormErrors } from '../../common/helpers';
import { formValidations } from './transfer.validation.js'
import { insertTrasnfer, getAccount } from './transfer.api.js'

const params = history.getParams();
console.log(params);

getAccountList().then(datas => {
    console.log(datas);
    setAccountOptions(datas, params.id);
});

getAccount(params.id).then(data => formularyTransfer.originAccount = data.iban);

let formularyTransfer = {
    id: params.id,
    originAccount: "",
    iban: "",
    name: "",
    amount: "",
    concept: "",
    notes: "",
    day: "",
    month: "",
    year: "",
    date: "",
    email: "",
}

onUpdateField('select-account', (event) => {
    const value = event.target.value;
    getAccount(value).then(data => formularyTransfer.originAccount = data.iban)
    formularyTransfer = {
        ...formularyTransfer,
        id: value,
    };
    formValidations.validateField('select-account', formularyTransfer.id).then(result => {
        onSetError('select-accountiban', result);
    });
});
onUpdateField('iban', (event) => {
    const value = event.target.value;
    formularyTransfer = {
        ...formularyTransfer,
        iban: value,
    };
    formValidations.validateField('iban', formularyTransfer.iban).then(result => {
        onSetError('iban', result);
    });
});

onUpdateField('name', (event) => {
    const value = event.target.value;
    formularyTransfer = {
        ...formularyTransfer,
        name: value,
    };
    formValidations.validateField('name', formularyTransfer.name).then(result => {
        onSetError('name', result);
    });
});

onUpdateField('amount', (event) => {
    const value = event.target.value;
    formularyTransfer = {
        ...formularyTransfer,
        amount: value,
    };
    formValidations.validateField('amount', formularyTransfer.amount).then(result => {
        onSetError('amount', result);
    });
});

onUpdateField('concept', (event) => {
    const value = event.target.value;
    formularyTransfer = {
        ...formularyTransfer,
        concept: value,
    };
    formValidations.validateField('concept', formularyTransfer.concept).then(result => {
        onSetError('concept', result);
    });
});
onUpdateField('notes', (event) => {
    const value = event.target.value;
    formularyTransfer = {
        ...formularyTransfer,
        notes: value,
    };
    formValidations.validateField('notes', formularyTransfer.notes).then(result => {
        onSetError('notes', result);
    });

});

onUpdateField('day', (event) => {
    const value = event.target.value;
    formularyTransfer = {
        ...formularyTransfer,
        day: value,
        date: `${formularyTransfer.year}-${formularyTransfer.month}-${formularyTransfer.day}`,
    };
    formValidations.validateField('day', formularyTransfer.day).then(result => {
        onSetError('date', result);
    });
});

onUpdateField('month', (event) => {
    const value = event.target.value;
    formularyTransfer = {
        ...formularyTransfer,
        month: value,
        date: `${formularyTransfer.year}-${formularyTransfer.month}-${formularyTransfer.day}`,
    };
    formValidations.validateField('month', formularyTransfer.month).then(result => {
        onSetError('date', result);
    });
});

onUpdateField('year', (event) => {
    const value = event.target.value;
    formularyTransfer = {
        ...formularyTransfer,
        year: value,
        date: `${formularyTransfer.year}-${formularyTransfer.month}-${formularyTransfer.day}`,
    };
    formValidations.validateField('year', formularyTransfer.year).then(result => {
        onSetError('date', result);
    });
});

onUpdateField('email', (event) => {
    const value = event.target.value;
    formularyTransfer = {
        ...formularyTransfer,
        email: value,
    };
    formValidations.validateField('email', formularyTransfer.email).then(result => {
        onSetError('email', result);
    });
});

onSubmitForm('transfer-button', () => {
    formValidations.validateForm(formularyTransfer).then(result => {
        console.log(formularyTransfer);
        onSetFormErrors(result);
        if (result.succeeded) {
            insertTrasnfer(formularyTransfer).then(apiTransfer => {
                history.back();
            });
        }
    });
});