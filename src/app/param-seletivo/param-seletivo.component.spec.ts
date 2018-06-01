import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParamSeletivoComponent } from './param-seletivo.component';

describe('ParamSeletivoComponent', () => {
  let component: ParamSeletivoComponent;
  let fixture: ComponentFixture<ParamSeletivoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParamSeletivoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParamSeletivoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
