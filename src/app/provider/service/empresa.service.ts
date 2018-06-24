import {Injectable} from '@angular/core';
import {Empresa} from '../model/empresa.model';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class EmpresaService {

    EMPRESAS_URL = 'http://localhost:9099/api/empresas/';

    constructor(private http: HttpClient) {
    }

    getList(): Observable<Empresa[]> {
        return this.http.get<Empresa[]>(this.EMPRESAS_URL);
    }

    filterByCodigo(codigo: number): Observable<Empresa> {
        const url = this.EMPRESAS_URL.concat(codigo.toString());
        return this.http.get<Empresa>(url);

    }
}