import {TipoProcessoSeletivo} from './tipoProcessoSeletivo.model';
import {DataHora} from '../../common/dataHora.model';
import {ProvaTradicionalItem} from './provaTradicional.model';
import {ProvaAgendadaItem} from './provaAgendadaItem.model';
import {ProcessoSeletivoItem} from './processoSeletivo.model';

export class ProvaItem {

    private _processoSeletivoId: number;
    private _cicloId: number;
    private _resultado: DataHora = new DataHora();
    private _gabarito: DataHora = new DataHora();
    private _tradicionalItem: ProvaTradicionalItem;
    private _agendadaItens: ProvaAgendadaItem[];
    private _comentario: string;
    private _tipoProcessoSeletivo = new TipoProcessoSeletivo();

    public static buildBy(processo: ProcessoSeletivoItem, tipoProcesso: TipoProcessoSeletivo): ProvaItem {
        const provaItem: ProvaItem = new ProvaItem();
        provaItem.cicloId = processo.ciclo.codigo;
        provaItem.processoSeletivoId = processo.codigo;
        provaItem.tipoProcessoSeletivo = tipoProcesso;
        if (provaItem.tipoProcessoSeletivo.isProvaTradicional() == true) {
            provaItem.tradicionalItem = new ProvaTradicionalItem();
        }
        if (provaItem.tipoProcessoSeletivo.isProvaAgendada() == true) {
            provaItem.agendadaItens = new Array();
        }
        return provaItem;
    }

    get tradicionalItem(): ProvaTradicionalItem {
        return this._tradicionalItem;
    }

    set tradicionalItem(value: ProvaTradicionalItem) {
        this._tradicionalItem = value;
    }

    get agendadaItens(): ProvaAgendadaItem[] {
        return this._agendadaItens;
    }

    set agendadaItens(value: ProvaAgendadaItem[]) {
        this._agendadaItens = value;
    }

    get tipoProcessoSeletivo(): TipoProcessoSeletivo {
        return this._tipoProcessoSeletivo;
    }

    set tipoProcessoSeletivo(value: TipoProcessoSeletivo) {
        this._tipoProcessoSeletivo = value;
    }

    get processoSeletivoId(): number {
        return this._processoSeletivoId;
    }

    set processoSeletivoId(value: number) {
        this._processoSeletivoId = value;
    }

    get cicloId(): number {
        return this._cicloId;
    }

    set cicloId(value: number) {
        this._cicloId = value;
    }

    get gabarito(): DataHora {
        return this._gabarito;
    }

    set gabarito(value: DataHora) {
        this._gabarito = value;
    }

    get resultado(): DataHora {
        return this._resultado;
    }

    set resultado(value: DataHora) {
        this._resultado = value;
    }

    get comentario(): string {
        return this._comentario;
    }

    set comentario(value: string) {
        this._comentario = value;
    }

}

