import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExplorarAlunoComponent } from './explorar-aluno.component';

describe('ExplorarAlunoComponent', () => {
  let component: ExplorarAlunoComponent;
  let fixture: ComponentFixture<ExplorarAlunoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExplorarAlunoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExplorarAlunoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
