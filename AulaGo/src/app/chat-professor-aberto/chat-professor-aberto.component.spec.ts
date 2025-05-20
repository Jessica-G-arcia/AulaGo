import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatProfessorAbertoComponent } from './chat-professor-aberto.component';

describe('ChatProfessorAbertoComponent', () => {
  let component: ChatProfessorAbertoComponent;
  let fixture: ComponentFixture<ChatProfessorAbertoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChatProfessorAbertoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChatProfessorAbertoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
