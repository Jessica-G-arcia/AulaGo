import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ChatProfessorAbertoComponent } from '../chat-professor-aberto/chat-professor-aberto.component';
import { MenuSuperiorComponent } from "../menu-superior/menu-superior.component";
import { MenuLateralComponent } from "../menu-lateral/menu-lateral.component";

@Component({
  selector: 'app-chat-professor',
  imports: [CommonModule, ChatProfessorAbertoComponent, MenuSuperiorComponent, MenuLateralComponent],
  templateUrl: './chat-professor.component.html',
  styleUrl: './chat-professor.component.css'
})
export class ChatProfessorComponent {
  conversaSelecionada: string | null = null;

  abrirConversa(nome: string) {
    this.conversaSelecionada = nome;
  }

  fecharConversa() {
    this.conversaSelecionada = null;
  }
}
