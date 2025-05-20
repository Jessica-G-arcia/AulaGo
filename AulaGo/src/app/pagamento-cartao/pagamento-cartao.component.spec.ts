import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagamentoCartaoComponent } from './pagamento-cartao.component';

describe('PagamentoCartaoComponent', () => {
  let component: PagamentoCartaoComponent;
  let fixture: ComponentFixture<PagamentoCartaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PagamentoCartaoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PagamentoCartaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
