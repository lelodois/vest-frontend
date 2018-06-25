import {Component, OnInit, ViewChild} from '@angular/core';
import {EmpresaService} from '../../provider/service/empresa.service';
import {Empresa} from '../../provider/model/empresa.model';
import {CicloService} from '../../provider/service/ciclo.service';
import {Ciclo} from '../../provider/model/ciclo.model';
import {ActivatedRoute, Router} from '@angular/router';
import {EventsService} from '../../provider/service/events.service';
import {CicloSaveComponent} from '../ciclo-save/ciclo-save.component';
import {AuthService} from '../../provider/service/auth.service';
import {User} from '../../provider/model/user.model';

@Component({
    selector: 'app-ciclo-list',
    templateUrl: './ciclo-list.component.html',
    styleUrls: ['./ciclo-list.component.scss']
})
export class CicloListComponent implements OnInit {

    empresas: Empresa[] = [];
    ciclos: Ciclo[] = [];
    empresaSelecionada: Empresa = new Empresa();
    user = new User();

    @ViewChild('cicloSaveItem')
    private cicloSaveComponent: CicloSaveComponent;

    constructor(private empresaService: EmpresaService,
                private cicloService: CicloService,
                private authService: AuthService,
                private router: Router,
                private eventsService: EventsService) {
    }

    ngOnInit() {

        this.empresaService.getList().subscribe(
            data => this.empresas = data
        );

        this.listenerCicloListChanged();

        this.authService.getCurrentUser()
            .subscribe(userResponse => this.user = userResponse);
    }

    listenerCicloListChanged() {
        this.eventsService.ciclosEvent.subscribe(
            (novoCiclo: Ciclo) => {
                if (novoCiclo.codigo) {
                    this.loadCiclosByEmpresa(this.empresaSelecionada.codigoEmpresa);
                }
            }
        );
    }

    onChangeEmpresa(event) {
        this.ciclos = [];
        this.empresaSelecionada = new Empresa();
        const codigoEmpresa: number = event.target.value;
        if (codigoEmpresa) {
            this.loadCiclosByEmpresa(codigoEmpresa);
            this.empresaService.filterByCodigo(codigoEmpresa)
                .subscribe(response => {
                    this.empresaSelecionada = response;
                });
        }
    }

    loadCiclosByEmpresa(codigoEmpresa: number) {
        this.cicloService.getByEmpresa(codigoEmpresa)
            .subscribe(response => this.ciclos = response);
    }

    openCicloModal(ciclo?: Ciclo) {
        if (ciclo === undefined) {
            ciclo = Ciclo.builderNovoCiclo();
        }
        this.cicloSaveComponent.initBy(Object.create(ciclo));
    }

    logout() {
        this.authService.logout();
        this.router.navigate(['login']);
    }
}
