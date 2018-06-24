import {Component, OnInit} from '@angular/core';
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