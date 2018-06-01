import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CicloSaveComponent } from './ciclo-save.component';

describe('CicloSaveComponent', () => {
  let component: CicloSaveComponent;
  let fixture: ComponentFixture<CicloSaveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CicloSaveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CicloSaveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
