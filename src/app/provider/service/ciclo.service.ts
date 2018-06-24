import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Ciclo} from '../model/ciclo.model';
import {EmpresaService} from './empresa.service';
import {EventsService} from './events.service';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class CicloService {

    CICLO_URL = 'http://localhost:9099/api/ciclos/';

    httpOptions = {
        headers: new HttpHeaders({
            'Content-Type': 'application/json'
        })
    };

    constructor(private http: HttpClient,
                private empresaService: EmpresaService,
                private eventsService: EventsService) {
    }

    save(codigoEmpresa: number, ciclo: Ciclo) {
        this.http.post<Ciclo>(this.CICLO_URL,
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
                this.eventsService.ciclosEvent.emit(result as Ciclo);
            });
    }

    getByEmpresa(codigoEmpresa: number): Observable<Ciclo[]> {
        const cicloEmpresaUrl: string = 'empresa/' + codigoEmpresa;
        return this.http.get<Ciclo[]>(this.CICLO_URL.concat(cicloEmpresaUrl));
    }
}