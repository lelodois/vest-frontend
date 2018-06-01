import {CicloEmpresaParam} from './param/cicloEmpresaParam.model';

export class Empresa {

    private _codigoEmpresa: number;
    private _default: boolean;
    private _nomeFantasia: string;

    public fillByParameter(parameter: CicloEmpresaParam){
        this.codigoEmpresa = parameter.empresaId;
        this.nomeFantasia = parameter.nomeFantasia;
    }

    get codigoEmpresa(): number {
        return this._codigoEmpresa;
    }

    set codigoEmpresa(codigoEmpresa: number) {
        this._codigoEmpresa = codigoEmpresa;
    }

    get default(): boolean {
        return this._default;
    }

    set default(isDefault: boolean) {
        this._default = isDefault;
    }

    set nomeFantasia(nomeFantasia: string) {
        this._nomeFantasia = nomeFantasia;
    }

    get nomeFantasia(): string {
        return this._nomeFantasia;
    }

}