import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink, RouterLinkActive } from '@angular/router';

interface Notificacao {
  id: number;
  titulo: string;
  mensagem: string;
  data: string;
  hora?: string;
  status?: string;
  lida: boolean;
}

@Component({
  selector: 'app-notificacoes',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLinkActive, RouterLink],
  templateUrl: './notificacoes.component.html',
  styleUrl: './notificacoes.component.css'
})
export class NotificacoesComponent implements OnInit {
  notificacoes: Notificacao[] = [];
  filtros = {
    naoLidas: false,
    lidas: false,
    recentes: true
  };

  ngOnInit(): void {
    // Dados de exemplo para simular notificações
    this.notificacoes = [
      {
        id: 1,
        titulo: 'Pagamento recebido!',
        mensagem: 'O valor da aula agendada por Maria já foi depositado em sua conta com sucesso: R$150,00.',
        data: '25/03/2025',
        status: 'Agora',
        lida: false,
      },
      {
        id: 2,
        titulo: 'Nova aula agendada',
        mensagem: 'Ana Paula agendou uma nova aula online com você para o dia 17/05/2025 às 15:30.',
        data: '24/05/2025',
        hora: '14:00',
        lida: true
      },
      {
        id: 3,
        titulo: 'Nova avaliação receida',
        mensagem: 'João acabou de avaliar sua última aula. Confira o feedback e veja como você está impactando seus alunos!',
        data: '25/03/2025',
        hora: '08:00',
        lida: true
      },
      {
        id: 4,
        titulo: 'Nova avaliação receida',
        mensagem: 'Eduardo acabou de avaliar sua última aula.Confira o feedback e veja como você está impactando seus alunos!',
        data: '25/03/2025',
        hora: '10:30',
        lida: false
      }
    ];
  }

  filtrarNotificacoes(): Notificacao[] {
    return this.notificacoes.filter(notificacao => {
      const { naoLidas, lidas, recentes } = this.filtros;

      // se nenhum filtro estiver marcado, vai exibir todas
      if (!naoLidas && !lidas && !recentes) {
        return true;
      }

      let exibeFiltro = false;

      //exibe as notificações de filtro (não lidas)
      if (naoLidas && !notificacao.lida && notificacao.status?.toLowerCase() !== 'agora') {
        exibeFiltro = true;
      }

      //exibe as notificações de filtro (lidas)
      if (lidas && notificacao.lida) {
        exibeFiltro = true;
      }

      //exibe as notificações de filtro (recentes)
      if (recentes && notificacao.status?.toLowerCase() === 'agora') {
        exibeFiltro = true;
      }

      return exibeFiltro;
    });
  }
}