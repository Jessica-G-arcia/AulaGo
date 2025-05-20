import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagamentoBoletoComponent } from './pagamento-boleto.component';

describe('PagamentoBoletoComponent', () => {
  let component: PagamentoBoletoComponent;
  let fixture: ComponentFixture<PagamentoBoletoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PagamentoBoletoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PagamentoBoletoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
