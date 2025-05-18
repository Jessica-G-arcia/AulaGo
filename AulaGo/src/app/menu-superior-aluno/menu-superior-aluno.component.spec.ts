import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuSuperiorAlunoComponent } from './menu-superior-aluno.component';

describe('MenuSuperiorAlunoComponent', () => {
  let component: MenuSuperiorAlunoComponent;
  let fixture: ComponentFixture<MenuSuperiorAlunoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MenuSuperiorAlunoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MenuSuperiorAlunoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
