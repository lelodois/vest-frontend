import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProvaAgendComponent } from './prova-agend.component';

describe('ProvaAgendComponent', () => {
  let component: ProvaAgendComponent;
  let fixture: ComponentFixture<ProvaAgendComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProvaAgendComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProvaAgendComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
