import {observable, action, computed} from "mobx";

export default class {
    @observable formData = {
        name: {
            value: '',
            name: 'name',
            errorText: 'The message must be more than 2 characters',
            validator: (val) => /^[a-zA-Z]{3,}$/.test(val),
            valid: null
        },
        phone: {
            value: '',
            name: 'phone',
            errorText: 'The message must have from 2 to 6 characters',
            validator: (val) => /^[0-9]{2,6}$/.test(val),
            valid: null
        },
        email: {
            value: '',
            name: 'email',
            errorText: 'The message must have @ symbol',
            validator: (val) => /^.+@.+$/.test(val),
            valid: null
        }
    };

    @computed get isFormValid() {
        return Object.values(this.formData).every(field => field.validator(field.value));
    }

    @computed get data() {
        let data = {};
        for (name in this.formData) {
            data[name] = this.formData[name].value;
        }
        return data;
    }

    @action change(name, value) {
        const field = this.formData[name];
        field.value = value;
        field.valid = field.validator(value);
    }
}
