import {Injectable} from '@angular/core';
import {Empresa} from '../model/empresa.model';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class EmpresaService {
    url_empresas = 'http://localhost:9099/api/empresas/';

    constructor(private _http: HttpClient) {
    }

    getList(): Observable<Empresa[]> {
        return this._http.get<Empresa[]>(this.url_empresas);
    }

    filterByCodigo(codigo: number): Empresa {
        const url = this.url_empresas.concat(codigo.toString());
        //return this._http.get<Empresa>(url).;
        return new Empresa();

    }
}