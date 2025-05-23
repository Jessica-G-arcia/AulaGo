import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotificacoesAlunosComponent } from './notificacoes-alunos.component';

describe('NotificacoesAlunosComponent', () => {
  let component: NotificacoesAlunosComponent;
  let fixture: ComponentFixture<NotificacoesAlunosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NotificacoesAlunosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NotificacoesAlunosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
