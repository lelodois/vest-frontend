import {FormGroup} from '@angular/forms';

export class MessagesUtil {

    public static getErrorMessages(formGroup: FormGroup, prefixName?: string): string[] {
        const prefix = prefixName ? prefixName : '';
        let messages: string[] = [];

        for (const item in formGroup.controls) {
            const controlItem = formGroup.controls[item];
            if (controlItem.invalid) {
                if (controlItem instanceof FormGroup) {
                    const subMessages = this.getErrorMessages(controlItem as FormGroup, item.concat('.'));
                    messages = messages.concat(subMessages);
                } else {
                    messages.push(prefix.concat(item));
                }
            }
        }
        return messages;
    }
}