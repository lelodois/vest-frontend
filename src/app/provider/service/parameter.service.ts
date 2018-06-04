import {Injectable} from '@angular/core';
import {CicloEmpresaParam} from '../model/param/cicloEmpresaParam.model';
import {CicloService} from './ciclo.service';
import {Params} from '@angular/router';
import {CicloProcessoSeletivoParam} from '../model/param/cicloProcessoSeletivoParam.model';
import 'rxjs/add/operator/map';
import {Ciclo} from '../model/ciclo.model';


@Injectable()
export class ParameterService {

    constructor(private _cicloService: CicloService) {
    }

    public getCicloEmpresa(params: Params): CicloEmpresaParam {
        const parameter: CicloEmpresaParam = new CicloEmpresaParam();
        parameter.cicloId = params.cicloId;
        parameter.empresaId = params.empresaId;

//        const ciclo: Ciclo = this._cicloService.getById(parameter.cicloId)
//            .map(result => {return result } );

        parameter.cicloFull = null;
        parameter.cicloFull.empresa.nomeFantasia = params.nomeFantasia;

        return parameter;
    }

    public getCicloProcessoSeletivo(params: Params): CicloProcessoSeletivoParam {
        const parameter: CicloProcessoSeletivoParam = new CicloProcessoSeletivoParam();
        parameter.cicloId = params.cicloId;
        parameter.processoSeletivoId = params.processoSeletivoId;
        this._cicloService.getById(parameter.cicloId)
            .subscribe(result => {
                parameter.cicloFull = result;
                parameter.cicloFull.empresa.nomeFantasia = params.nomeFantasia;
            });

        return parameter;
    }
}