import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProvaSaveComponent } from './prova-tradic.component';

describe('ProvaSaveComponent', () => {
  let component: ProvaSaveComponent;
  let fixture: ComponentFixture<ProvaSaveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProvaSaveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProvaSaveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
