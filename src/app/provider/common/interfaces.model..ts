import {Ciclo} from '../model/ciclo.model';
import {ChangeStep} from '../model/processoSeletivo/changeStep.model';

export interface ProcessoSeletivoStepInterface {
    saveStep(ciclo: Ciclo): ChangeStep;

    initStep(processoSeletivoId: number, cicloId: number);
}