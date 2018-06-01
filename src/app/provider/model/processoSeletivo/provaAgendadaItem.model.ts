export class ProvaAgendadaItem {

    private _diaSemana: number;
    private _hora?: string;

    get diaSemana(): number {
        return this._diaSemana;
    }

    set diaSemana(value: number) {
        this._diaSemana = value;
    }

    get hora(): string {
        return this._hora;
    }

    set hora(value: string) {
        this._hora = value;
    }


}

