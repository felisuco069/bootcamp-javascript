import { Validators, createFormValidation } from '@lemoncode/fonk';
import { iban } from '@lemoncode/fonk-iban-validator';
import { positiveNumber } from '@lemoncode/fonk-positive-number-validator';
import { laterDate } from '@lemoncode/fonk-later-date-validator';

const validationSchema = {

    field: {
        id: [{
            validator: Validators.required,
            message: 'Cuenta seleccionada incorrecta',
        },],
        iban: [{
            validator: Validators.required,
            message: 'Campo requerido',
        }, {
            validator: iban.validator,
            message: 'Iban no válido',
        }],
        name: [{
            validator: Validators.required,
            message: 'Campo requerido',
        },],
        amount: [{
            validator: Validators.required,
            message: 'Campo requerido',
        }, {
            validator: positiveNumber.validator,
            customArgs: {
                allowZero: false,
            },
            message: 'Debe ser un número válido y mayor o igual que cero',
        }],
        concept: [{
            validator: Validators.required,
            message: 'Campo requerido',
        },],
        observation: [{
            validator: Validators.minLength,
            customArgs: { length: 25 },
        },],
        day: [{
            validator: Validators.required,
            message: 'Campo requerido',
        }, {
            validator: Validators.pattern,
            customArgs: { pattern: /^([1-9]|[1-2]\d|3[01])$/ },
            message: 'El día tiene que estar comprendido entre 1 y 31',
        },

        ],
        month: [{
            validator: Validators.required,
            message: 'Campo requerido',
        }, {
            validator: Validators.pattern,
            customArgs: { pattern: /^([1-9]|1[012])$/ },
            message: 'El mes tiene que estar comprendido entre 1 y 12',
        },

        ],
        year: [{
            validator: Validators.required,
            message: 'Campo requerido',
        }, {
            validator: Validators.pattern,
            customArgs: { pattern: /^2[0-9][2-9](\d{1})$/ },
            message: 'Año introducido incorrecto',
        }
        ],
        email: [{
            validator: Validators.required,
            message: 'Campo requerido',
        },
        {
            validator: Validators.email,
            message: 'Email no válido',
        }
        ],
        date: [{
            validator: laterDate.validator,
            customArgs: {
                parseStringToDateFn: (value) => new Date(value),
                date: new Date(),
            },
            message: 'Fecha introducida incorrecta',
        }
        ]
    },
};


export const formValidations = createFormValidation(validationSchema);