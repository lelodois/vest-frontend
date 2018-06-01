import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

import {routers} from './param-seletivo.router';
import {ParamSeletivoComponent} from './param-seletivo.component';
import {CicloSaveComponent} from '../components/ciclo/save/ciclo-save.component';
import {CicloListComponent} from '../components/ciclo/list/ciclo-list.component';
import {ProcessoSeletivoSaveComponent} from '../components/processo-seletivo/save/processo-seletivo-save.component';
import {ProcessoSeletivoListComponent} from '../components/processo-seletivo/list/processo-seletivo-list.component';
import {ResumoComponent} from '../components/processo-seletivo/resumo/resumo.component';
import {SeletivoWizardComponent} from '../components/processo-seletivo/seletivo-wizard/seletivo-wizard.component';
import {OfertaSaveComponent} from '../components/processo-seletivo/oferta-save/oferta-save.component';
import {ProvaComponent} from '../components/processo-seletivo/prova/prova.component';
import {ProvaTradicComponent} from '../components/processo-seletivo/prova/prova-tradic/prova-tradic.component';
import {ProvaAgendComponent} from '../components/processo-seletivo/prova/prova-agend/prova-agend.component';
import {EmpresaService} from '../provider/service/empresa.service';
import {CicloService} from '../provider/service/ciclo.service';
import {ProcessoSeletivoService} from '../provider/service/processoSeletivo.service';
import {ParameterService} from '../provider/service/parameter.service';
import {EventsService} from '../provider/service/events.service';
import {TipoProcessoSeletivoService} from '../provider/service/tipoProcessoSeletivo.service';
import {ProvaService} from '../provider/service/provaService.service';

@NgModule({
    imports: [
        CommonModule,
        ReactiveFormsModule,
        HttpModule,
        FormsModule,
        routers
    ],
    providers: [
        EmpresaService,
        CicloService,
        ProcessoSeletivoService,
        ParameterService,
        EventsService,
        TipoProcessoSeletivoService,
        ProvaService
    ],
    declarations: [
        ParamSeletivoComponent,
        CicloSaveComponent,
        CicloListComponent,
        ProcessoSeletivoSaveComponent,
        ProcessoSeletivoListComponent,
        SeletivoWizardComponent,
        ResumoComponent,
        OfertaSaveComponent,
        ProvaComponent,
        ProvaAgendComponent,
        ProvaTradicComponent
    ],
    exports: [
        ParamSeletivoComponent,
        CicloSaveComponent,
        CicloListComponent,
        ProcessoSeletivoSaveComponent,
        ProcessoSeletivoListComponent,
        SeletivoWizardComponent,
        ResumoComponent,
        OfertaSaveComponent,
        ProvaComponent,
        ProvaAgendComponent,
        ProvaTradicComponent
    ]
})
export class ParamSeletivoModule {
}
