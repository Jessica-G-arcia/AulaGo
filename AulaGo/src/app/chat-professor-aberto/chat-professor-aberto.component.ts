import { CommonModule } from '@angular/common';
import { Component, Input, Output, EventEmitter, AfterViewChecked } from '@angular/core';
import { FormsModule } from '@angular/forms';

const STORAGE_KEY = 'chat-mensagens';

@Component({
  selector: 'app-chat-professor-aberto',
  imports: [CommonModule, FormsModule],
  templateUrl: './chat-professor-aberto.component.html',
  styleUrl: './chat-professor-aberto.component.css'
})
export class ChatProfessorAbertoComponent implements AfterViewChecked {
   @Input() nome!: string;
  @Output() fechar = new EventEmitter<void>();

  mensagens: { tipo: string; texto: string }[] = [];
  novaMensagem: string = '';

  constructor() {
    this.carregarMensagens();
  }

  enviarMensagem() {
    const texto = this.novaMensagem.trim();
    if (texto) {
      this.mensagens.push({ tipo: 'prof', texto }); // mudar aqui para 'prof'
      this.novaMensagem = '';
      this.salvarMensagens();
      this.scrollParaFim();
    }
  }

  fecharConversa() {
    this.fechar.emit();
  }

  ngAfterViewChecked() {
    this.scrollParaFim();
  }

  scrollParaFim() {
    const container = document.querySelector('.chat-mensagens');
    if (container) {
      container.scrollTop = container.scrollHeight;
    }
  }

  salvarMensagens() {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(this.mensagens));
  }

  carregarMensagens() {
    const mensagensSalvas = localStorage.getItem(STORAGE_KEY);
    if (mensagensSalvas) {
      this.mensagens = JSON.parse(mensagensSalvas);
    } else {
      this.mensagens = [
        { tipo: 'prof', texto: 'Oi, Matheus! Tudo bem? Passando pra confirmar nossa aula de amanhã às 18h. Está tudo certo pra você?' },
        { tipo: 'aluno', texto: 'Oi, prof! Tudo certo sim, confirmado 😍' },
        { tipo: 'prof', texto: 'Perfeito! Até amanhã, Matheus.' },
        { tipo: 'aluno', texto: 'Show! Tô animado, até amanhã então!' }
      ];
      this.salvarMensagens();
    }
  }
}
