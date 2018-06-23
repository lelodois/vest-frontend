import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';

import {CicloListComponent} from './components/ciclo/list/ciclo-list.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {CicloService} from './provider/service/ciclo.service';
import {EmpresaService} from './provider/service/empresa.service';
import {HttpModule} from '@angular/http';
import {routers} from './app.router';
import {CicloSaveComponent} from './components/ciclo/save/ciclo-save.component';
import {CommonModule} from '@angular/common';
import {EventsService} from './provider/service/events.service';
import {BrowserModule} from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
    imports: [
        CommonModule,
        ReactiveFormsModule,
        HttpModule,
        HttpClientModule,
        FormsModule,
        BrowserModule,
        routers
    ],
    providers: [
        AppComponent,
        EmpresaService,
        CicloService,
        EventsService
    ],
    declarations: [
        AppComponent,
        CicloSaveComponent,
        CicloListComponent
    ],
    exports: [
        CicloSaveComponent,
        CicloListComponent
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}