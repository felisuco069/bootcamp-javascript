import { Validators, createFormValidation } from "@lemoncode/fonk";

const validationSchema = {
    field: {
        type: [Validators.required], // Es solo un validador indicando que es un campo requerido.
        alias: [Validators.required], // Es solo un validador indicando que es un campo requerido.
    }
};
export const formValidation = createFormValidation(validationSchema);