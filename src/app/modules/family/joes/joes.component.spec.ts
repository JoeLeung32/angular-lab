import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JoesComponent } from './joes.component';

describe('JoesComponent', () => {
  let component: JoesComponent;
  let fixture: ComponentFixture<JoesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JoesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JoesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
