import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProcessoSeletivoListComponent } from './processo-seletivo-list.component';

describe('ProcessoSeletivoListComponent', () => {
  let component: ProcessoSeletivoListComponent;
  let fixture: ComponentFixture<ProcessoSeletivoListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProcessoSeletivoListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProcessoSeletivoListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
