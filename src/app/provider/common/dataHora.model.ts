import {FormControl, FormGroup, Validators} from '@angular/forms';

export class DataHora {

    constructor(private _data?: Date, private _hora?: string) {
    }

    public static builderFormControl(dataHora?: DataHora): FormGroup {
        return new FormGroup({
            data: new FormControl(dataHora.data, Validators.required),
            hora: new FormControl(dataHora.hora, Validators.required),
        });
    }

    public static buildHorasArray(): object[] {
        const horasArray = [];
        for (let hora = 0; hora <= 23; hora++) {
            const horaString = hora.toString().padStart(2, '0');
            horasArray.push({
                key: hora,
                value: horaString.concat(':').concat('00')
            });
        }
        return horasArray;
    }

    get data(): Date {
        return this._data;
    }

    set data(value: Date) {
        this._data = value;
    }

    get hora(): string {
        return this._hora;
    }

    set hora(value: string) {
        this._hora = value;
    }
}