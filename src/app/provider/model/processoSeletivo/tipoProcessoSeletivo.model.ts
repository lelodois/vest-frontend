export class TipoProcessoSeletivo {

    static TIPO_PROVA_TRADICIONAL = 'Tradicional';
    static TIPO_PROVA_AGENDADA = 'Agendada';
    static TIPO_PROVA_PROVA_FIXA = 'Sem Prova';

    private _codigoTipo: number;
    private _descricao: string;
    private _tipoProva = TipoProcessoSeletivo.TIPO_PROVA_TRADICIONAL;

    public isProvaTradicional(): boolean {
        return TipoProcessoSeletivo.TIPO_PROVA_TRADICIONAL == this._tipoProva;
    }

    public isProvaAgendada(): boolean {
        return TipoProcessoSeletivo.TIPO_PROVA_AGENDADA == this._tipoProva;
    }

    get codigoTipo(): number {
        return this._codigoTipo;
    }

    set codigoTipo(codigo: number) {
        this._codigoTipo = codigo;
    }

    get tipoProva(): string {
        return this._tipoProva;
    }

    set tipoProva(tipoProva: string) {
        this._tipoProva = tipoProva;
    }

    get descricao(): string {
        return this._descricao;
    }

    set descricao(nome: string) {
        this._descricao = nome;
    }


}