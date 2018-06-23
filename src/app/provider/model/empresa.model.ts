import {CicloEmpresaParam} from '../common/cicloEmpresaParam.model';

export class Empresa {

    private _codigoEmpresa: number;
    private _nomeFantasia: string;

    public fillByParameter(parameter: CicloEmpresaParam) {
        this.codigoEmpresa = parameter.empresaId;
        this.nomeFantasia = parameter.nomeFantasia;
    }

    get codigoEmpresa(): number {
        return this._codigoEmpresa;
    }

    set codigoEmpresa(codigoEmpresa: number) {
        this._codigoEmpresa = codigoEmpresa;
    }

    set nomeFantasia(nomeFantasia: string) {
        this._nomeFantasia = nomeFantasia;
    }

    get nomeFantasia(): string {
        return this._nomeFantasia;
    }

}