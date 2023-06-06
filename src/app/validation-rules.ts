import { AbstractControl, ValidationErrors } from "@angular/forms";
import { FormlyFieldConfig } from "@ngx-formly/core";

// Validation Rules

export const formlyValidationMessages = [
    {
        name: 'required',
        message: 'This field is required'
    },
    {
        name: 'email',
        message: 'This field should be a valid email'
    },
    {
        name: 'ip',
        message: IpValidatorMessage
    }
];

// Custom Validators

export const customValidators = [
    {
        name: 'ip',
        validation: IpValidator
    },
    {
        name: 'email',
        validation: EmailValidator
    }
];

export function IpValidator(control: AbstractControl): ValidationErrors | null {
    return !control.value || /(\d{1,3}\.){3}\d{1,3}/.test(control.value) ? null : { ip: true };
}

export function EmailValidator(control: AbstractControl): ValidationErrors | null {
    return !control.value || /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(control.value) ? null : { email: true };
}

// Messages for custom validators

export function IpValidatorMessage(error: any, field: FormlyFieldConfig) {

    return `"${field?.formControl?.value}" is not a valid IP Address`;
}