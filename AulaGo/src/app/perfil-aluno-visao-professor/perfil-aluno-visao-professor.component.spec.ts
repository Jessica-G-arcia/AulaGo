import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PerfilAlunoVisaoProfessorComponent } from './perfil-aluno-visao-professor.component';

describe('PerfilAlunoVisaoProfessorComponent', () => {
  let component: PerfilAlunoVisaoProfessorComponent;
  let fixture: ComponentFixture<PerfilAlunoVisaoProfessorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PerfilAlunoVisaoProfessorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PerfilAlunoVisaoProfessorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
