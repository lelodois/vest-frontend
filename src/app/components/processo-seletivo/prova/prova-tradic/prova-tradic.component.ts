import {Component, OnInit} from '@angular/core';
import {DataHora} from '../../../../provider/common/dataHora.model';
import {FormGroup} from '@angular/forms';
import {ProvaTradicionalItem} from '../../../../provider/model/processoSeletivo/provaTradicional.model';

@Component({
    selector: 'app-prova-tradic',
    templateUrl: './prova-tradic.component.html',
    styleUrls: ['./prova-tradic.component.scss']
})
export class ProvaTradicComponent implements OnInit {

    _horasArray: object[] = DataHora.buildHorasArray();
    _tradicionalItem: ProvaTradicionalItem = new ProvaTradicionalItem();

    constructor() {
    }

    ngOnInit() {
    }

    addFormControl(parentForm: FormGroup) {
        parentForm.addControl(
            'tradicionalItem.dataProva',
            DataHora.builderFormControl(this._tradicionalItem.dataProva)
        );
    }

}
