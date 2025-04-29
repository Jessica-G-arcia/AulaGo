import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfessorHomeComponent } from './professor-home.component';

describe('ProfessorHomeComponent', () => {
  let component: ProfessorHomeComponent;
  let fixture: ComponentFixture<ProfessorHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfessorHomeComponent ] // Declara o componente a ser testado
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfessorHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges(); // Dispara a detecção de mudanças inicial
  });

  it('should create', () => {
    expect(component).toBeTruthy(); // Teste básico: verifica se o componente foi criado com sucesso
  });

  // Aqui você adicionaria mais testes:
  // - Verificar se o nome do professor é exibido
  // - Verificar se as listas (idiomas, aulas) são renderizadas
  // - Simular cliques nos botões e verificar o comportamento (se houver lógica)
});