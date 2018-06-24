import {AfterViewInit, Component, ElementRef, Input} from '@angular/core';
import {CicloService} from '../../provider/service/ciclo.service';
import {Ciclo} from '../../provider/model/ciclo.model';

declare var $: any;

@Component({
    selector: 'app-ciclo-save',
    templateUrl: './ciclo-save.component.html',
    styleUrls: ['./ciclo-save.component.scss']
})
export class CicloSaveComponent implements AfterViewInit {

    @Input()
    codigoEmpresa: number;
    ciclo: Ciclo = Ciclo.builderNovoCiclo();

    saveModal = null;
    edicaoCiclo: boolean;

    constructor(private service: CicloService,
                private rootNode: ElementRef) {
    }

    ngAfterViewInit() {
        this.saveModal = $(this.rootNode.nativeElement).find('#saveModal');
    }

    initBy(ciclo: Ciclo) {
        this.edicaoCiclo = ciclo.codigo > 0;
        this.ciclo = ciclo;
        this.saveModal.modal('show');
    }

    saveCiclo() {
        this.service.save(this.codigoEmpresa, this.ciclo);
        this.saveModal.modal('hide');
    }

}
