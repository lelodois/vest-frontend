import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProcessoSeletivoSaveComponent } from './processo-seletivo-save.component';

describe('ProcessoSeletivoSaveComponent', () => {
  let component: ProcessoSeletivoSaveComponent;
  let fixture: ComponentFixture<ProcessoSeletivoSaveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProcessoSeletivoSaveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProcessoSeletivoSaveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
