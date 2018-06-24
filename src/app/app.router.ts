import {RouterModule, Routes} from '@angular/router';
import {ModuleWithProviders} from '@angular/core';
import {LoginComponent} from './components/login/login.component';
import {CicloListComponent} from './components/ciclo-list/ciclo-list.component';

const APP_ROUTES: Routes = [
    {path: 'login', component: LoginComponent},
    {path: 'ciclos', component: CicloListComponent}
];

export const AppRouters: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);