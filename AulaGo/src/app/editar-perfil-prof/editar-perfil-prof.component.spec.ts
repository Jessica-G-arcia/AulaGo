import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarPerfilProfComponent } from './editar-perfil-prof.component';

describe('EditarPerfilProfComponent', () => {
  let component: EditarPerfilProfComponent;
  let fixture: ComponentFixture<EditarPerfilProfComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditarPerfilProfComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditarPerfilProfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
