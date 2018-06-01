import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ProvaItem} from '../model/processoSeletivo/prova.model';

@Injectable()
export class ProvaService {
    private _provas: ProvaItem[] = [];

    constructor(private _http: HttpClient) {
    }

    save(provaItem: ProvaItem): ProvaItem {
        const novasProvas: ProvaItem[] = [];
        novasProvas.push(provaItem);

        this._provas.forEach(existsProvaItem => {
            if (provaItem.processoSeletivoId != existsProvaItem.processoSeletivoId
                && provaItem.cicloId != existsProvaItem.cicloId) {
                novasProvas.push(existsProvaItem);
            }
        });
        this._provas = novasProvas;
        return provaItem;
    }

    getBy(processoSeletivo: number, cicloId: number): ProvaItem {

        let provaItem: ProvaItem = null;
        this._provas.forEach(existsProvaItem => {
            if (processoSeletivo == existsProvaItem.processoSeletivoId
                && cicloId == existsProvaItem.cicloId) {
                provaItem = existsProvaItem;
            }
        });
        return provaItem;
    }


}