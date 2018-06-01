import {Ciclo} from '../ciclo.model';

export class CicloProcessoSeletivoParam {

    private _cicloId: number;
    private _processoSeletivoId: number;
    private _nomeFantasia: string;
    private _nomeProcessoSeletivo: string;
    private _cicloFull: Ciclo;

    get cicloFull(): Ciclo {
        return this._cicloFull;
    }

    get nomeProcessoSeletivo(): string {
        return this._nomeProcessoSeletivo;
    }

    set nomeProcessoSeletivo(value: string) {
        this._nomeProcessoSeletivo = value;
    }

    set cicloFull(value: Ciclo) {
        this._cicloFull = value;
    }

    get cicloId(): number {
        return this._cicloId;
    }

    set cicloId(value: number) {
        this._cicloId = value;
    }

    get processoSeletivoId(): number {
        return this._processoSeletivoId;
    }

    set processoSeletivoId(value: number) {
        this._processoSeletivoId = value;
    }

    get nomeFantasia(): string {
        return this._nomeFantasia;
    }

    set nomeFantasia(value: string) {
        this._nomeFantasia = value;
    }
}