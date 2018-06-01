import {Injectable} from '@angular/core';
import {Empresa} from '../model/empresa.model';
import { Http, Response } from '@angular/http';
import { HttpClient } from 'selenium-webdriver/http';

@Injectable()
export class EmpresaService {
    url_empresas = 'http://localhost:9099/api/empresas/';

    constructor(private _http: Http) {
    }

    getList(): Empresa[] {
        let empresas = this._http.get(this.url_empresas);
        return empresas.map(response => response.json())
    }

    filterByCodigo(codigo: number): Empresa {
        let empresas = this._http.get(this.url_empresas.concat(codigo.toString()));
        return empresas.map(response => response.json())
    }
}