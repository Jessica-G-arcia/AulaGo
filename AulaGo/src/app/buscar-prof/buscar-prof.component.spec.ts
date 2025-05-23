import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuscarProfComponent } from './buscar-prof.component';

describe('BuscarProfComponent', () => {
  let component: BuscarProfComponent;
  let fixture: ComponentFixture<BuscarProfComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BuscarProfComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BuscarProfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
