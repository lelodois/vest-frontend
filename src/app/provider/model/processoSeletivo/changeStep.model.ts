export class ChangeStep {

    constructor(private _canChangeTag: boolean,
                private _processoSeletivoId?: number) {
    }

    get canChangeTag(): boolean {
        return this._canChangeTag;
    }

    set canChangeTag(value: boolean) {
        this._canChangeTag = value;
    }

    get processoSeletivoId(): number {
        return this._processoSeletivoId;
    }

    set processoSeletivoId(value: number) {
        this._processoSeletivoId = value;
    }
}