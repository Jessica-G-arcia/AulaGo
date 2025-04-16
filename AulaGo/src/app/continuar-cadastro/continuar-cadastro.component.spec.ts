import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContinuarCadastroComponent } from './continuar-cadastro.component';

describe('ContinuarCadastroComponent', () => {
  let component: ContinuarCadastroComponent;
  let fixture: ComponentFixture<ContinuarCadastroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContinuarCadastroComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContinuarCadastroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
