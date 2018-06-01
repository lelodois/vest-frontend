import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {TipoProcessoSeletivo} from '../model/processoSeletivo/tipoProcessoSeletivo.model';

@Injectable()
export class TipoProcessoSeletivoService {
    private _tipos: TipoProcessoSeletivo[] = [];

    constructor(private _http: HttpClient) {
    }

    getById(tipoProcessoSeletivoId: number): TipoProcessoSeletivo {
        let tipoProcessoSeletivo: TipoProcessoSeletivo = null;
        this.getList().forEach(item => {
            if (item.codigoTipo == tipoProcessoSeletivoId) {
                tipoProcessoSeletivo = item;
            }
        });
        return tipoProcessoSeletivo;
    }


    getList(): TipoProcessoSeletivo[] {
        this._tipos = new Array();

        const tipo1: TipoProcessoSeletivo = new TipoProcessoSeletivo();
        tipo1.codigoTipo = 20181;
        tipo1.descricao = 'Presencial hora marcada';
        tipo1.tipoProva = TipoProcessoSeletivo.TIPO_PROVA_TRADICIONAL;

        const tipo2: TipoProcessoSeletivo = new TipoProcessoSeletivo();
        tipo2.codigoTipo = 20151;
        tipo2.descricao = 'Segunda Graduação Agnd';
        tipo2.tipoProva = TipoProcessoSeletivo.TIPO_PROVA_AGENDADA;

        const tipo4: TipoProcessoSeletivo = new TipoProcessoSeletivo();
        tipo4.codigoTipo = 20171;
        tipo4.descricao = 'Enem';
        tipo4.tipoProva = TipoProcessoSeletivo.TIPO_PROVA_PROVA_FIXA;

        this._tipos.push(tipo1, tipo2, tipo4);

        return this._tipos;
    }

}