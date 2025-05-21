import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatAbertoComponent } from './chat-aberto.component';

describe('ChatAbertoComponent', () => {
  let component: ChatAbertoComponent;
  let fixture: ComponentFixture<ChatAbertoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChatAbertoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChatAbertoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
