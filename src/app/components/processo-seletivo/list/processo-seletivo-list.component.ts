import {Component, OnInit} from '@angular/core';
import {Ciclo} from '../../../provider/model/ciclo.model';
import {ActivatedRoute, Router} from '@angular/router';
import {ProcessoSeletivoService} from '../../../provider/service/processoSeletivo.service';
import {ProcessoSeletivoItem} from '../../../provider/model/processoSeletivo/processoSeletivo.model';
import {ParameterService} from '../../../provider/service/parameter.service';
import {CicloEmpresaParam} from '../../../provider/model/param/cicloEmpresaParam.model';

@Component({
    selector: 'app-processo-seletivo-list',
    templateUrl: './processo-seletivo-list.component.html',
    styleUrls: ['./processo-seletivo-list.component.scss']
})
export class ProcessoSeletivoListComponent implements OnInit {

    _ciclo: Ciclo;
    _processosSeletivos: ProcessoSeletivoItem[] = [];

    constructor(private route: ActivatedRoute,
                private router: Router,
                private service: ProcessoSeletivoService,
                private serviceParameter: ParameterService) {
    }

    ngOnInit() {
        const param: CicloEmpresaParam = this.serviceParameter.getCicloEmpresa(this.route.snapshot.queryParams);
        this._ciclo = param.cicloFull;
        this._processosSeletivos = this.service.getByCiclo(this._ciclo);
    }

    navigateToProcessoSeletivo(item?: ProcessoSeletivoItem) {
        this.router.navigate(['/param-seletivo/processo-seletivo/'], {
            queryParams: {
                cicloId: this._ciclo.codigo,
                empresaId: this._ciclo.empresa.codigoEmpresa,
                nomeFantasia: this._ciclo.empresa.nomeFantasia,
                processoSeletivoId: item ? item.codigo : null,
                processoSeletivoNome: item ? item.nome : null
            }
        });
    }

    navigateToCiclo() {
        this.router.navigate(['/param-seletivo/ciclo/list'], {
            queryParams: {
                cicloId: this._ciclo.codigo,
                empresaId: this._ciclo.empresa.codigoEmpresa,
                nomeFantasia: this._ciclo.empresa.nomeFantasia
            }
        });
    }
}
