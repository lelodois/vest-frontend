import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SeletivoWizardComponent } from './seletivo-wizard.component';

describe('SeletivoWizardComponent', () => {
  let component: SeletivoWizardComponent;
  let fixture: ComponentFixture<SeletivoWizardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeletivoWizardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeletivoWizardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
