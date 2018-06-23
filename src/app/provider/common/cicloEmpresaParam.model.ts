import {Ciclo} from '../model/ciclo.model';

export class CicloEmpresaParam {

    private _cicloId: number;
    private _empresaId: number;
    private _nomeFantasia: string;
    private _cicloFull: Ciclo;

    get cicloFull(): Ciclo {
        return this._cicloFull;
    }

    set cicloFull(value: Ciclo) {
        this._cicloFull = value;
    }

    get cicloId(): number {
        return this._cicloId;
    }

    get empresaId(): number {
        return this._empresaId;
    }

    set empresaId(empresaId: number) {
        this._empresaId = empresaId;
    }

    set cicloId(cicloId: number) {
        this._cicloId = cicloId;
    }

    get nomeFantasia(): string {
        return this._nomeFantasia;
    }

    set nomeFantasia(nomeFantasia: string) {
        this._nomeFantasia = nomeFantasia;
    }

}