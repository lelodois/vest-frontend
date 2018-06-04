import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Ciclo} from '../model/ciclo.model';
import {EmpresaService} from './empresa.service';
import {EventsService} from './events.service';
import {Observable} from 'rxjs/Observable';
import {UrlUtil} from '../common/url.util';

@Injectable()
export class CicloService {
    CICLO_URL = UrlUtil.URL_ENDPOINT_BASE.concat('ciclos/');

    httpOptions = {
        headers: new HttpHeaders({
            'Content-Type': 'application/json'
        })
    };

    constructor(private _http: HttpClient,
                private _empresaService: EmpresaService,
                private _eventsService: EventsService) {
    }

    save(codigoEmpresa: number, ciclo: Ciclo) {
        this._http.post<Ciclo>(this.CICLO_URL,
            {
                ano: ciclo.ano,
                semestre: ciclo.semestre,
                situacaoMatricula: ciclo.situacaoMatricula,
                situacaoInscricao: ciclo.situacaoInscricao,
                empresa: {
                    codigoEmpresa: codigoEmpresa
                }
            }, this.httpOptions)
            .subscribe(result => {
                this._eventsService.ciclosEvent.emit(result as Ciclo);
            });
    }

    getById(cicloId: number): Observable<Ciclo> {
        return this._http.get<Ciclo>(this.CICLO_URL.concat(cicloId.toString()));
    }

    getByEmpresa(codigoEmpresa: number): Observable<Ciclo[]> {
        const cicloEmpresaUrl: string = 'empresa/' + codigoEmpresa;
        return this._http.get<Ciclo[]>(this.CICLO_URL.concat(cicloEmpresaUrl));
    }
}