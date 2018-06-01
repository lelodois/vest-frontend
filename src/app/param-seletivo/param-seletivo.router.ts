import {RouterModule, Routes} from '@angular/router';
import {ModuleWithProviders} from '@angular/core';

import {CicloListComponent} from '../components/ciclo/list/ciclo-list.component';
import {ProcessoSeletivoListComponent} from '../components/processo-seletivo/list/processo-seletivo-list.component';
import {SeletivoWizardComponent} from '../components/processo-seletivo/seletivo-wizard/seletivo-wizard.component';

const APP_ROUTES: Routes = [
    {path: 'param-seletivo/processo-seletivo/list', component: ProcessoSeletivoListComponent},
    {path: 'param-seletivo/processo-seletivo', component: SeletivoWizardComponent},
    {path: 'param-seletivo/ciclo/list', component: CicloListComponent},
    {path: '', pathMatch: 'full', redirectTo: 'param-seletivo/ciclo/list'},
    {path: '**', pathMatch: 'full', redirectTo: 'param-seletivo/ciclo/list'}
];

export const routers: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);