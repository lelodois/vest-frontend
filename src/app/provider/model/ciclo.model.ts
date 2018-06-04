import {Empresa} from './empresa.model';

export class Ciclo {

    private _codigo: number;
    private _ano: number;
    private _semestre: number;
    private _situacaoMatricula = 0;
    private _situacaoInscricao = 0;
    private _empresa: Empresa;

    public static builderNovoCiclo(): Ciclo {
        const novoCiclo = new Ciclo();
        novoCiclo.empresa = new Empresa();
        novoCiclo.ano = new Date().getFullYear() + 1;
        novoCiclo.semestre = 1;
        novoCiclo.situacaoInscricao = 1;
        novoCiclo.situacaoMatricula = 1;
        return novoCiclo;
    }

    get codigo(): number {
        return this._codigo;
    }

    set codigo(value: number) {
        this._codigo = value;
    }

    get ano(): number {
        return this._ano;
    }

    set ano(value: number) {
        this._ano = value;
    }

    get semestre(): number {
        return this._semestre;
    }

    set semestre(value: number) {
        this._semestre = value;
    }

    get situacaoMatricula(): number {
        return this._situacaoMatricula;
    }

    set situacaoMatricula(value: number) {
        this._situacaoMatricula = value;
    }

    get situacaoInscricao(): number {
        return this._situacaoInscricao;
    }

    set situacaoInscricao(value: number) {
        this._situacaoInscricao = value;
    }

    get empresa(): Empresa {
        return this._empresa;
    }

    set empresa(value: Empresa) {
        this._empresa = value;
    }


}