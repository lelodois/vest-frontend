import {DataHora} from '../../common/dataHora.model';

export class ProvaTradicionalItem {

    constructor(private _dataProva?: DataHora) {

    }

    get dataProva(): DataHora {
        return this._dataProva;
    }

    set dataProva(value: DataHora) {
        this._dataProva = value;
    }


}

