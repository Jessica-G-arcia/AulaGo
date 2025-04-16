import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PerfilAlunoComponent } from './perfil-aluno.component';

describe('PerfilAlunoComponent', () => {
  let component: PerfilAlunoComponent;
  let fixture: ComponentFixture<PerfilAlunoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PerfilAlunoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PerfilAlunoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
