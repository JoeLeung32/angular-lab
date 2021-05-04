import {ComponentFixture, TestBed} from '@angular/core/testing';

import {ProjecctMtrComponent} from './projecct-mtr.component';

describe('ProjecctMtrComponent', () => {
    let component: ProjecctMtrComponent;
    let fixture: ComponentFixture<ProjecctMtrComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [ProjecctMtrComponent]
        })
            .compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(ProjecctMtrComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
