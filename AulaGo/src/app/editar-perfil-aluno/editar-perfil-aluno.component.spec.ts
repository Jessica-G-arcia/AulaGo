import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarPerfilAlunoComponent } from './editar-perfil-aluno.component';

describe('EditarPerfilAlunoComponent', () => {
  let component: EditarPerfilAlunoComponent;
  let fixture: ComponentFixture<EditarPerfilAlunoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditarPerfilAlunoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditarPerfilAlunoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
