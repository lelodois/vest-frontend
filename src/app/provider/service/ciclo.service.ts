import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Empresa} from '../model/empresa.model';
import {Ciclo} from '../model/ciclo.model';
import {EmpresaService} from './empresa.service';
import {EventsService} from './events.service';

@Injectable()
export class CicloService {
    private _ciclos: Ciclo[] = [];

    constructor(private _http: HttpClient,
                private _empresaService: EmpresaService,
                private _eventsService: EventsService) {
    }

    save(codigoEmpresa: number, ciclo: Ciclo) {
        if (ciclo.codigo > 0) {
            const existsIndex = this._ciclos.indexOf(this.getById(ciclo.codigo));
            this._ciclos[existsIndex] = ciclo;
        } else {
            ciclo.codigo = this._ciclos.length + 1 * 1000;
            this._ciclos.push(ciclo);
        }
        const empresas: Empresa[] = this._empresaService.getList();
        ciclo.empresa = this._empresaService.filterByCodigo(codigoEmpresa, empresas);
        this._eventsService.ciclosEvent.emit(ciclo);
    }

    getById(cicloId: number): Ciclo {
        let ciclo: Ciclo = null;
        this._ciclos.forEach(cicloIndex => {
            if (cicloIndex.codigo == cicloId) {
                ciclo = cicloIndex;
            }
        });
        return ciclo;
    }

    getList(): Ciclo[] {
        return this._ciclos;
    }

    getByEmpresa(empresa: Empresa): Ciclo[] {
        const ciclos: Ciclo[] = [];
        this.getList().filter(function (ciclo) {
            if (ciclo.empresa.codigoEmpresa == empresa.codigoEmpresa) {
                ciclo.empresa = empresa;
                ciclos.push(ciclo);
            }
        });
        return ciclos;
    }
}