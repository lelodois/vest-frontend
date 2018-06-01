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

    get descricao(): string {
        return this.semestre + '° semestre de ' + this.ano;
    }

    get codigo(): number {
        return this._codigo;
    }

    get ano(): number {
        return this._ano;
    }

    get empresa(): Empresa {
        return this._empresa;
    }

    get semestre(): number {
        return this._semestre;
    }

    set codigo(codigo: number) {
        this._codigo = codigo;
    }

    set ano(ano: number) {
        this._ano = ano;
    }

    set semestre(semestre: number) {
        this._semestre = semestre;
    }

    set empresa(empresa: Empresa) {
        this._empresa = empresa;
    }

    get situacaoMatricula() {
        return this._situacaoMatricula;
    }

    set situacaoMatricula(value) {
        this._situacaoMatricula = value;
    }

    get situacaoInscricao() {
        return this._situacaoInscricao;
    }

    set situacaoInscricao(value) {
        this._situacaoInscricao = value;
    }

}