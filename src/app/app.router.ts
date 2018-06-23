import {RouterModule, Routes} from '@angular/router';
import {ModuleWithProviders} from '@angular/core';

import {CicloListComponent} from './components/ciclo/list/ciclo-list.component';

const APP_ROUTES: Routes = [
    {path: 'param-seletivo/ciclo/list', component: CicloListComponent},
    {path: '', pathMatch: 'full', redirectTo: 'param-seletivo/ciclo/list'},
    {path: '**', pathMatch: 'full', redirectTo: 'param-seletivo/ciclo/list'}
];

export const routers: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);