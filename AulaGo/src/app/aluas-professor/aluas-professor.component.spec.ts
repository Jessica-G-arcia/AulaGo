import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AluasProfessorComponent } from './aulas-professor.component';

describe('AluasProfessorComponent', () => {
  let component: AluasProfessorComponent;
  let fixture: ComponentFixture<AluasProfessorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AluasProfessorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AluasProfessorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
