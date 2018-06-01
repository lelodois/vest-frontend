import {FormControl} from '@angular/forms';

export class DateValidator {

    public static date(formControl: FormControl) {
        const regex = new RegExp(/^\d{1,2}\.\d{1,2}\.\d{4}$/);
        return regex.test(formControl.value) ? null : {date: true};
    }
}