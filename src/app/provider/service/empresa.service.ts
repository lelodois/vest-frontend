import {Injectable} from '@angular/core';
import {Empresa} from '../model/empresa.model';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import {UrlUtil} from '../common/url.util';

@Injectable()
export class EmpresaService {
    EMPRESAS_URL = UrlUtil.URL_ENDPOINT_BASE.concat('empresas/');

    constructor(private _http: HttpClient) {
    }

    getList(): Observable<Empresa[]> {
        return this._http.get<Empresa[]>(this.EMPRESAS_URL);
    }

    filterByCodigo(codigo: number): Observable<Empresa> {
        const url = this.EMPRESAS_URL.concat(codigo.toString());
        return this._http.get<Empresa>(url);

    }
}