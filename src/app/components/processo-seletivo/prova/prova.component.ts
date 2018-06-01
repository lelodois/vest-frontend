import {Component, ViewChild} from '@angular/core';
import {ProvaItem} from '../../../provider/model/processoSeletivo/prova.model';
import {DataHora} from '../../../provider/common/dataHora.model';
import {FormBuilder, FormGroup} from '@angular/forms';
import {ProvaAgendComponent} from './prova-agend/prova-agend.component';
import {ProvaTradicComponent} from './prova-tradic/prova-tradic.component';
import {ProcessoSeletivoService} from '../../../provider/service/processoSeletivo.service';
import {ProcessoSeletivoItem} from '../../../provider/model/processoSeletivo/processoSeletivo.model';
import {TipoProcessoSeletivoService} from '../../../provider/service/tipoProcessoSeletivo.service';
import {ProcessoSeletivoStepInterface} from '../../../provider/common/interfaces.model.';
import {Ciclo} from '../../../provider/model/ciclo.model';
import {ChangeStep} from '../../../provider/model/processoSeletivo/changeStep.model';
import {TipoProcessoSeletivo} from '../../../provider/model/processoSeletivo/tipoProcessoSeletivo.model';
import {MessagesUtil} from '../../../provider/common/messages.util';
import {ProvaService} from '../../../provider/service/provaService.service';

@Component({
    selector: 'app-prova',
    templateUrl: './prova.component.html',
    styleUrls: ['./prova.component.scss']
})
export class ProvaComponent implements ProcessoSeletivoStepInterface {

    @ViewChild('provaAgendadaComponent')
    _provaAgendadaComponent: ProvaAgendComponent;

    @ViewChild('provaTradicionalComponent')
    _provaTradicionalComponent: ProvaTradicComponent;

    _horasArray: object[] = DataHora.buildHorasArray();
    _provaItem: ProvaItem = new ProvaItem();
    _processoSeletivo: ProcessoSeletivoItem = null;
    _tipoProcesso: TipoProcessoSeletivo = null;
    _errorMessages: string[] = [];
    _provaForm: FormGroup;
    _initialized: boolean = false;

    constructor(private _builder: FormBuilder,
                private serviceProcessoSeletivo: ProcessoSeletivoService,
                private serviceTipoProcesso: TipoProcessoSeletivoService,
                private service: ProvaService) {

    }

    saveStep(ciclo: Ciclo): ChangeStep {
        if (this.hasAnyError() === true) {
            return new ChangeStep(false);
        }

        const provaItem: ProvaItem = Object.assign(this._provaForm.value);
        provaItem.cicloId = ciclo.codigo;
        provaItem.processoSeletivoId = this._processoSeletivo.codigo;
        provaItem.tipoProcessoSeletivo = this._tipoProcesso;
        const savedItem: ProvaItem = this.service.save(provaItem);
        return new ChangeStep(true, savedItem.processoSeletivoId);
    }

    hasAnyError(): boolean {
        this._errorMessages = MessagesUtil.getErrorMessages(this._provaForm);
        return this._errorMessages.length > 0;
    }

    hasErrorIn(field: string): string {
        return this._errorMessages.indexOf(field) > -1 ? 'has-error text-danger' : '';
    }

    initStep(processoSeletivoId: number, cicloId: number) {
        this._processoSeletivo = this.serviceProcessoSeletivo.getById(processoSeletivoId);
        this._provaItem = this.service.getBy(processoSeletivoId, cicloId);
        this._tipoProcesso =
            this.serviceTipoProcesso.getById(this._processoSeletivo.tipoProcessoSeletivo.codigoTipo);

        if (!this._provaItem) {
            this._provaItem = ProvaItem.buildBy(this._processoSeletivo, this._tipoProcesso);
        }

        this._provaForm = this._builder.group({
            resultado: DataHora.builderFormControl(this._provaItem.resultado),
            gabarito: DataHora.builderFormControl(this._provaItem.gabarito),
            comentario: this._provaItem.comentario
        });

        this._initialized = true;
    }

    public isProvaTradicional(): boolean {
        return this._provaItem.tipoProcessoSeletivo.isProvaTradicional() == true;
    }

    public isProvaAgendada(): boolean {
        return this._provaItem.tipoProcessoSeletivo.isProvaAgendada() == true;
    }

}
