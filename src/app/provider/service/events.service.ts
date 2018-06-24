import {EventEmitter, Injectable} from '@angular/core';
import {Ciclo} from '../model/ciclo.model';

@Injectable()
export class EventsService {

    private _ciclosList: EventEmitter<Ciclo> =
        new EventEmitter<Ciclo>(false);

    get ciclosEvent(): EventEmitter<Ciclo> {
        return this._ciclosList;
    }

}