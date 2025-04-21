import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeProfessorComponent } from './home-professor.component';

describe('HomeProfessorComponent', () => {
  let component: HomeProfessorComponent;
  let fixture: ComponentFixture<HomeProfessorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeProfessorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeProfessorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
