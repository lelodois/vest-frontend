import {EventEmitter, Injectable} from '@angular/core';
import {Ciclo} from '../model/ciclo.model';
import {ProcessoSeletivoItem} from '../model/processoSeletivo/processoSeletivo.model';

@Injectable()
export class EventsService {

    private _ciclosList: EventEmitter<Ciclo> = new EventEmitter<Ciclo>(false);
    private _seletivosList: EventEmitter<ProcessoSeletivoItem> = new EventEmitter<ProcessoSeletivoItem>(false);

    get ciclosEvent(): EventEmitter<Ciclo> {
        return this._ciclosList;
    }

    get seletivosEvent(): EventEmitter<ProcessoSeletivoItem> {
        return this._seletivosList;
    }

}