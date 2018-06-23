import {Component, OnInit, ViewChild} from '@angular/core';
import {EmpresaService} from '../../../provider/service/empresa.service';
import {Empresa} from '../../../provider/model/empresa.model';
import {CicloService} from '../../../provider/service/ciclo.service';
import {Ciclo} from '../../../provider/model/ciclo.model';
import {ActivatedRoute, Router} from '@angular/router';
import {EventsService} from '../../../provider/service/events.service';
import {CicloSaveComponent} from '../save/ciclo-save.component';
import {CicloEmpresaParam} from '../../../provider/common/cicloEmpresaParam.model';

@Component({
    selector: 'app-ciclo-list',
    templateUrl: './ciclo-list.component.html',
    styleUrls: ['./ciclo-list.component.scss']
})
export class CicloListComponent implements OnInit {

    _empresasList: Empresa[] = [];
    _ciclosList: Ciclo[] = [];
    _empresaSelecionada: Empresa = new Empresa();

    @ViewChild('cicloSaveItem')
    private _cicloSaveItem: CicloSaveComponent;

    constructor(private empresaService: EmpresaService,
                private cicloService: CicloService,
                private router: Router,
                private activatedRoute: ActivatedRoute,
                private eventsService: EventsService) {
    }

    ngOnInit() {
        this.empresaService.getList().subscribe(
            data => this._empresasList = data
        );

        this.listenerCicloListChanged();

        const parameter: CicloEmpresaParam = Object.assign(this.activatedRoute.snapshot.queryParams);
        if (parameter && parameter.empresaId) {
            this._empresaSelecionada.fillByParameter(parameter);
            this.loadCiclosByEmpresa(this._empresaSelecionada.codigoEmpresa);
        }
    }

    listenerCicloListChanged() {
        this.eventsService.ciclosEvent.subscribe(
            (novoCiclo: Ciclo) => {
                if (novoCiclo.codigo) {
                    this.loadCiclosByEmpresa(this._empresaSelecionada.codigoEmpresa);
                }
            }
        );
    }

    onChangeEmpresa(event) {
        this._ciclosList = [];
        this._empresaSelecionada = new Empresa();
        const codigoEmpresa: number = event.target.value;
        if (codigoEmpresa) {
            this.loadCiclosByEmpresa(codigoEmpresa);
            this.empresaService.filterByCodigo(codigoEmpresa)
                .subscribe(response => {
                    this._empresaSelecionada = response;
                });
        }
    }

    loadCiclosByEmpresa(codigoEmpresa: number) {
        this.cicloService.getByEmpresa(codigoEmpresa)
            .subscribe(response => this._ciclosList = response);
    }

    openCicloModal(ciclo?: Ciclo) {
        if (ciclo === undefined) {
            ciclo = Ciclo.builderNovoCiclo();
        }
        this._cicloSaveItem.initBy(Object.create(ciclo));
    }

    navigateToProcessoSeletivoList(ciclo: Ciclo) {
        this.router.navigate(['/param-seletivo/processo-seletivo/list'], {
            queryParams: {
                cicloId: ciclo.codigo,
                empresaId: ciclo.empresa.codigoEmpresa,
                nomeFantasia: ciclo.empresa.nomeFantasia
            }
        });
    }

}
