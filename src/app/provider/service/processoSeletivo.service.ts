import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Ciclo} from '../model/ciclo.model';
import {ProcessoSeletivoItem} from '../model/processoSeletivo/processoSeletivo.model';
import {TipoProcessoSeletivoService} from './tipoProcessoSeletivo.service';

@Injectable()
export class ProcessoSeletivoService {
    private _processosSeletivos: ProcessoSeletivoItem[] = [];

    constructor(private _http: HttpClient,
                private _tipoProcessoSeletivoService: TipoProcessoSeletivoService) {
    }

    save(processoSeletivo: ProcessoSeletivoItem, ciclo: Ciclo): ProcessoSeletivoItem {
        processoSeletivo.ciclo = ciclo;

        if (processoSeletivo.codigo > 0) {
            const existsIndex = this._processosSeletivos.indexOf(this.getById(processoSeletivo.codigo));
            this._processosSeletivos[existsIndex] = processoSeletivo;
        } else {
            processoSeletivo.codigo = this._processosSeletivos.length + 1 * 1000;
            this._processosSeletivos.push(processoSeletivo);
        }
        return processoSeletivo;
    }

    getById(processoSeletivoCodigo: number) {
        let processoSeletivo: ProcessoSeletivoItem = null;
        this._processosSeletivos.forEach(processoSeletivoIndex => {
            if (processoSeletivoIndex.codigo == processoSeletivoCodigo) {
                processoSeletivo = processoSeletivoIndex;
            }
        });
        return processoSeletivo;
    }

    getByCiclo(cicloFull: Ciclo): ProcessoSeletivoItem[] {
        const tiposProcessosSeletivos = this._tipoProcessoSeletivoService.getList();

        const processosSeletivosToReturn: ProcessoSeletivoItem[] = [];
        this._processosSeletivos.filter(function (processoItem) {
            if (cicloFull.codigo == processoItem.ciclo.codigo) {
                processoItem.ciclo = cicloFull;

                tiposProcessosSeletivos.forEach(tipoItemFull => {
                    if (processoItem.tipoProcessoSeletivo.codigoTipo == tipoItemFull.codigoTipo) {
                        processoItem.tipoProcessoSeletivo = tipoItemFull;
                    }
                });

                processosSeletivosToReturn.push(processoItem);
            }
        });

        return processosSeletivosToReturn;
    }


}