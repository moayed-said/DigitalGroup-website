import * as validators from '@vuelidate/validators';

export const useI18nValidators = () => {
    const { $i18n } = useNuxtApp();
    const { createI18nMessage, helpers } = validators
    // const messagePath = ({ validator }) => `form.validations.${validator}`;

    const withI18nMessage = createI18nMessage({ t: $i18n.t.bind($i18n) });

    const stringValidator = (value) => Boolean(value.match(/^[\u0621-\u064AA-Za-z ]+$/))

    const string =  withI18nMessage(stringValidator)
    const required = withI18nMessage(validators.required)
    const minLength = withI18nMessage(validators.minLength, { withArguments: true })
    const maxLength = withI18nMessage(validators.maxLength, { withArguments: true })
    const integer = withI18nMessage(validators.integer)
    const email = withI18nMessage(validators.email)

    return {
        required,
        email,
        integer,
        maxLength,
        minLength,
        string
    }
};