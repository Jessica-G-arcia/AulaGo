import { Component, } from '@angular/core';
import { ChatAbertoComponent } from "../chat-aberto/chat-aberto.component";
import { CommonModule } from '@angular/common';
import { MenuSuperiorAlunoComponent } from "../menu-superior-aluno/menu-superior-aluno.component";
import { MenuLateralAlunoComponent } from "../menu-lateral-aluno/menu-lateral-aluno.component";


@Component({
  selector: 'app-chat',
  imports: [ChatAbertoComponent, CommonModule, MenuSuperiorAlunoComponent, MenuLateralAlunoComponent],
  templateUrl: './chat.component.html',
  styleUrl: './chat.component.css'
})
export class ChatComponent  {
   conversaSelecionada: string | null = null;

abrirConversa(nome: string) {
  this.conversaSelecionada = nome;
}

fecharConversa() {
  this.conversaSelecionada = null;
}
}
