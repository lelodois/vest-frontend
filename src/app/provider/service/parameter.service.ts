import {Injectable} from '@angular/core';
import {Ciclo} from '../model/ciclo.model';
import {CicloEmpresaParam} from '../model/param/cicloEmpresaParam.model';
import {CicloService} from './ciclo.service';
import {Params} from '@angular/router';
import {CicloProcessoSeletivoParam} from '../model/param/cicloProcessoSeletivoParam.model';

@Injectable()
export class ParameterService {

    constructor(private _cicloService: CicloService) {
    }

    public getCicloEmpresa(params: Params): CicloEmpresaParam {
        const parameter: CicloEmpresaParam = new CicloEmpresaParam();
        parameter.cicloId = params.cicloId;
        parameter.empresaId = params.empresaId;
        parameter.nomeFantasia = params.nomeFantasia;
        parameter.cicloFull = this.loadCiclo(parameter.cicloId, parameter.nomeFantasia);
        return parameter;
    }

    public getCicloProcessoSeletivo(params: Params): CicloProcessoSeletivoParam {
        const parameter: CicloProcessoSeletivoParam = new CicloProcessoSeletivoParam();
        parameter.cicloId = params.cicloId;
        parameter.processoSeletivoId = params.processoSeletivoId;
        parameter.nomeFantasia = params.nomeFantasia;
        parameter.cicloFull = this.loadCiclo(parameter.cicloId, parameter.nomeFantasia);
        return parameter;
    }

    private loadCiclo(cicloId: number, nomeFantasia: string): Ciclo {
        const ciclo: Ciclo = this._cicloService.getById(cicloId);
        ciclo.empresa.nomeFantasia = nomeFantasia;
        return ciclo;
    }
}