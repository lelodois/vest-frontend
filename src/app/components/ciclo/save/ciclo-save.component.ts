import {AfterViewInit, Component, ElementRef, Input} from '@angular/core';
import {CicloService} from '../../../provider/service/ciclo.service';
import {Ciclo} from '../../../provider/model/ciclo.model';

declare var $: any;

@Component({
    selector: 'app-ciclo-save',
    templateUrl: './ciclo-save.component.html',
    styleUrls: ['./ciclo-save.component.scss']
})
export class CicloSaveComponent implements AfterViewInit {

    @Input() _codigoEmpresa: number;
    _ciclo: Ciclo = Ciclo.builderNovoCiclo();

    _saveModal = null;
    _edicaoCiclo: boolean;

    constructor(private service: CicloService,
                private _rootNode: ElementRef) {
    }

    ngAfterViewInit() {
        this._saveModal = $(this._rootNode.nativeElement).find('#saveModal');
    }

    initBy(ciclo: Ciclo) {
        this._edicaoCiclo = ciclo.codigo > 0;
        this._ciclo = ciclo;
        this._saveModal.modal('show');
    }

    saveCiclo() {
        this.service.save(this._codigoEmpresa, this._ciclo);
        this._saveModal.modal('hide');
    }

}
