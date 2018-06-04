import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {ProvaTradicComponent} from './prova-tradic.component';

describe('ProvaSaveComponent', () => {
    let component: ProvaTradicComponent;
    let fixture: ComponentFixture<ProvaTradicComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ProvaTradicComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(ProvaTradicComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
