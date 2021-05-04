import {ComponentFixture, TestBed} from '@angular/core/testing';

import {ProjectAiaComponent} from './project-aia.component';

describe('ProjectAiaComponent', () => {
    let component: ProjectAiaComponent;
    let fixture: ComponentFixture<ProjectAiaComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [ProjectAiaComponent]
        })
            .compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(ProjectAiaComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
