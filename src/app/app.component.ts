import {Component, ModuleWithProviders, OnInit} from '@angular/core';
import {CicloListComponent} from './components/ciclo/list/ciclo-list.component';
import {RouterModule, Routes} from '@angular/router';
import {EmpresaService} from './provider/service/empresa.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

    serverEnable = true;

    constructor(private empresaService: EmpresaService) {

    }

    ngOnInit(): void {
        this.empresaService.getList()
            .subscribe(response => {
                    this.serverEnable = true;
                }, error1 => {
                    this.serverEnable = false;
                }
            );
    }

}

const APP_ROUTES: Routes = [
    {path: 'param-seletivo/ciclo/list', component: CicloListComponent},
    {path: '', pathMatch: 'full', redirectTo: 'param-seletivo/ciclo/list'},
    {path: '**', pathMatch: 'full', redirectTo: 'param-seletivo/ciclo/list'}
];

export const routers: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);