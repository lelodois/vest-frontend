import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';

import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {CicloService} from './provider/service/ciclo.service';
import {EmpresaService} from './provider/service/empresa.service';
import {HttpModule} from '@angular/http';
import {CommonModule} from '@angular/common';
import {EventsService} from './provider/service/events.service';
import {BrowserModule} from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import {AuthService} from './provider/service/auth.service';
import {CicloListComponent} from './components/ciclo-list/ciclo-list.component';
import {CicloSaveComponent} from './components/ciclo-save/ciclo-save.component';
import {LoginComponent} from './components/login/login.component';
import {AppRouters} from './app.router';
import {UserListComponent} from './components/user-list/user-list.component';

@NgModule({
    imports: [
        CommonModule,
        ReactiveFormsModule,
        HttpModule,
        HttpClientModule,
        FormsModule,
        BrowserModule,
        AppRouters
    ],
    providers: [
        AppComponent,
        EmpresaService,
        CicloService,
        EventsService,
        AuthService
    ],
    declarations: [
        AppComponent,
        CicloSaveComponent,
        CicloListComponent,
        LoginComponent,
        UserListComponent
    ],
    exports: [
        CicloSaveComponent,
        CicloListComponent,
        LoginComponent,
        UserListComponent
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}