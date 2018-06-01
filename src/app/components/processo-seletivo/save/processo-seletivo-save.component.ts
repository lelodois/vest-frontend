import {Component, Input, OnInit} from '@angular/core';
import {ProcessoSeletivoItem} from '../../../provider/model/processoSeletivo/processoSeletivo.model';
import {ProcessoSeletivoService} from '../../../provider/service/processoSeletivo.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {DataHora} from '../../../provider/common/dataHora.model';
import {MessagesUtil} from '../../../provider/common/messages.util';
import {TipoProcessoSeletivoService} from '../../../provider/service/tipoProcessoSeletivo.service';
import {ChangeStep} from '../../../provider/model/processoSeletivo/changeStep.model';
import {Ciclo} from '../../../provider/model/ciclo.model';
import {ProcessoSeletivoStepInterface} from '../../../provider/common/interfaces.model.';

@Component({
    selector: 'app-processo-seletivo-save',
    templateUrl: './processo-seletivo-save.component.html',
    styleUrls: ['./processo-seletivo-save.component.scss']
})
export class ProcessoSeletivoSaveComponent implements OnInit, ProcessoSeletivoStepInterface {

    @Input()
    _processoSeletivoId: number;
    _baseItem: ProcessoSeletivoItem = new ProcessoSeletivoItem();
    _horasArray: object[] = DataHora.buildHorasArray();
    _errorMessages: string[] = [];

    _tiposProcessosSeletivosList = this.serviceTipoProcesso.getList();
    _saveForm: FormGroup;

    constructor(private service: ProcessoSeletivoService,
                private serviceTipoProcesso: TipoProcessoSeletivoService,
                private _builder: FormBuilder) {
    }

    ngOnInit() {
        if (this._processoSeletivoId > 0) {
            this._baseItem = this.service.getById(this._processoSeletivoId);
        }

        this._saveForm = this._builder.group({
            dataInicioInscricao:
                DataHora.builderFormControl(this._baseItem.dataInicioInscricao),
            dataFimInscricaoWeb:
                DataHora.builderFormControl(this._baseItem.dataFimInscricaoWeb),
            dataFimInscricaoPresencial:
                DataHora.builderFormControl(this._baseItem.dataFimInscricaoPresencial),
            status: this._builder.control(
                this._baseItem.status, Validators.minLength(1)),
            nome: this._builder.control(
                this._baseItem.nome, [Validators.minLength(2), Validators.required]),
            valorInscricao: this._builder.control(
                this._baseItem.valorInscricao, [Validators.min(1), Validators.required]
            ),
            tipoProcessoSeletivo: this._builder.group({
                codigoTipo:
                    this._builder.control(this._baseItem.tipoProcessoSeletivo.codigoTipo, Validators.required),
            })
        });
    }

    initStep(processoSeletivoId: number, cicloId: number) {

    }

    hasAnyError(): boolean {
        this._errorMessages = MessagesUtil.getErrorMessages(this._saveForm);
        return this._errorMessages.length > 0;
    }

    hasErrorIn(field: string): string {
        return this._errorMessages.indexOf(field) > -1 ? 'has-error text-danger' : '';
    }

    saveStep(ciclo: Ciclo): ChangeStep {
        if (this.hasAnyError() === true) {
            return new ChangeStep(false);
        }

        const processoItem: ProcessoSeletivoItem = Object.assign(this._saveForm.value);
        if (this._baseItem.codigo > 0) {
            processoItem.sequencia = this._baseItem.sequencia;
            processoItem.codigo = this._baseItem.codigo;
        }
        const savedItem: ProcessoSeletivoItem = this.service.save(processoItem, ciclo);
        return new ChangeStep(true, savedItem.codigo);
    }
}
