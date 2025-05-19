import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TermosPoliticaComponent } from './termos-politica.component';

describe('TermosPoliticaComponent', () => {
  let component: TermosPoliticaComponent;
  let fixture: ComponentFixture<TermosPoliticaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TermosPoliticaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TermosPoliticaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
