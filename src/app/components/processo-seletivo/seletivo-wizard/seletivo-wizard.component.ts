import {Component, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Ciclo} from '../../../provider/model/ciclo.model';
import {ParameterService} from '../../../provider/service/parameter.service';
import {CicloProcessoSeletivoParam} from '../../../provider/model/param/cicloProcessoSeletivoParam.model';
import {ChangeStep} from '../../../provider/model/processoSeletivo/changeStep.model';
import {ProcessoSeletivoStepInterface} from '../../../provider/common/interfaces.model.';

@Component({
    selector: 'app-seletivo-wizard',
    templateUrl: './seletivo-wizard.component.html',
    styleUrls: ['./seletivo-wizard.component.scss']
})
export class SeletivoWizardComponent implements OnInit {

    _ciclo: Ciclo;
    _tabAtivaId;
    _processoSeletivoId: number;
    _processoSeletivoNome: string;

    @ViewChild('tab1Form')
    _tab1Form: ProcessoSeletivoStepInterface;

    @ViewChild('tab2Form')
    _tab2Form: ProcessoSeletivoStepInterface;

    constructor(private route: ActivatedRoute,
                private router: Router,
                private serviceParameter: ParameterService) {
        this._tabAtivaId = 'tab1';
    }

    ngOnInit() {
        const params = this.route.snapshot.queryParams;
        const param: CicloProcessoSeletivoParam = this.serviceParameter.getCicloProcessoSeletivo(params);
        this._ciclo = param.cicloFull;
        this._processoSeletivoId = param.processoSeletivoId;
        this._processoSeletivoNome = param.nomeProcessoSeletivo;
    }

    previousStep(targertTabId) {
        this._tabAtivaId = targertTabId;
    }

    nextStep(targertTabId) {
        let stepChange = new ChangeStep(true);

        if (this._tabAtivaId == 'tab1') {
            stepChange = this._tab1Form.saveStep(this._ciclo);
            this._tab2Form.initStep(stepChange.processoSeletivoId, this._ciclo.codigo);
        }

        if (this._tabAtivaId == 'tab2') {
            stepChange = this._tab2Form.saveStep(this._ciclo);
        }

        if (stepChange.canChangeTag === true) {
            this._tabAtivaId = targertTabId;
        }
    }

    isTabAtiva(currentTabId) {
        return this._tabAtivaId == currentTabId;
    }

    navigateToProcessoSeletivoList() {
        this.router.navigate(['/param-seletivo/processo-seletivo/list'], {
            queryParams: {
                cicloId: this._ciclo.codigo,
                empresaId: this._ciclo.empresa.codigoEmpresa,
                nomeFantasia: this._ciclo.empresa.nomeFantasia
            }
        });
    }
}
