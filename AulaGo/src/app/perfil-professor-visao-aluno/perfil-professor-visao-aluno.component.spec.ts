import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PerfilProfessorVisaoAlunoComponent } from './perfil-professor-visao-aluno.component';

describe('PerfilProfessorVisaoAlunoComponent', () => {
  let component: PerfilProfessorVisaoAlunoComponent;
  let fixture: ComponentFixture<PerfilProfessorVisaoAlunoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PerfilProfessorVisaoAlunoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PerfilProfessorVisaoAlunoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
