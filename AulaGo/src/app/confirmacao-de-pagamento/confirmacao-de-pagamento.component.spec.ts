import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmacaoDePagamentoComponent } from './confirmacao-de-pagamento.component';

describe('ConfirmacaoDePagamentoComponent', () => {
  let component: ConfirmacaoDePagamentoComponent;
  let fixture: ComponentFixture<ConfirmacaoDePagamentoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConfirmacaoDePagamentoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConfirmacaoDePagamentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
