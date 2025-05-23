import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfessorContinuarCadastroComponent } from './professor-continuar-cadastro.component';

describe('ProfessorContinuarCadastroComponent', () => {
  let component: ProfessorContinuarCadastroComponent;
  let fixture: ComponentFixture<ProfessorContinuarCadastroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProfessorContinuarCadastroComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProfessorContinuarCadastroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
