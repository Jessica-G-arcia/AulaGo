import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuLateralAlunoComponent } from './menu-lateral-aluno.component';

describe('MenuLateralAlunoComponent', () => {
  let component: MenuLateralAlunoComponent;
  let fixture: ComponentFixture<MenuLateralAlunoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MenuLateralAlunoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MenuLateralAlunoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
