import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OfertaSaveComponent } from './oferta-save.component';

describe('OfertaSaveComponent', () => {
  let component: OfertaSaveComponent;
  let fixture: ComponentFixture<OfertaSaveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OfertaSaveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OfertaSaveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
