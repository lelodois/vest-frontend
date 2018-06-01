import {TipoProcessoSeletivo} from './tipoProcessoSeletivo.model';
import {DataHora} from '../../common/dataHora.model';
import {Ciclo} from '../ciclo.model';

export class ProcessoSeletivoItem {

    private _codigo: number;
    private _nome: string;
    private _tipoProcessoSeletivo: TipoProcessoSeletivo = new TipoProcessoSeletivo();

    private _dataInicioInscricao: DataHora = new DataHora();
    private _dataFimInscricaoPresencial: DataHora = new DataHora();
    private _dataFimInscricaoWeb: DataHora = new DataHora();

    private _status = 0;
    private _valorInscricao: number;
    private _sequencia: number;

    private _finalizado: Date;
    private _ciclo: Ciclo = new Ciclo();

    get finalizado(): Date {
        return this._finalizado;
    }

    set finalizado(value: Date) {
        this._finalizado = value;
    }

    get ciclo(): Ciclo {
        return this._ciclo;
    }

    set ciclo(value: Ciclo) {
        this._ciclo = value;
    }

    get sequencia(): number {
        return this._sequencia;
    }

    set sequencia(value: number) {
        this._sequencia = value;
    }

    get codigo(): number {
        return this._codigo;
    }

    set codigo(value: number) {
        this._codigo = value;
    }

    get nome(): string {
        return this._nome;
    }

    set nome(value: string) {
        this._nome = value;
    }

    get tipoProcessoSeletivo(): TipoProcessoSeletivo {
        return this._tipoProcessoSeletivo;
    }

    set tipoProcessoSeletivo(value: TipoProcessoSeletivo) {
        this._tipoProcessoSeletivo = value;
    }

    get dataInicioInscricao(): DataHora {
        return this._dataInicioInscricao;
    }

    set dataInicioInscricao(value: DataHora) {
        this._dataInicioInscricao = value;
    }

    get dataFimInscricaoPresencial(): DataHora {
        return this._dataFimInscricaoPresencial;
    }

    set dataFimInscricaoPresencial(value: DataHora) {
        this._dataFimInscricaoPresencial = value;
    }

    get dataFimInscricaoWeb(): DataHora {
        return this._dataFimInscricaoWeb;
    }

    set dataFimInscricaoWeb(value: DataHora) {
        this._dataFimInscricaoWeb = value;
    }

    get status(): number {
        return this._status;
    }

    set status(value: number) {
        this._status = value;
    }

    get valorInscricao(): number {
        return this._valorInscricao;
    }

    set valorInscricao(value: number) {
        this._valorInscricao = value;
    }
}

