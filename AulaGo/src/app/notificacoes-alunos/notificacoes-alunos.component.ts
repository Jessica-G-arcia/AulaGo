import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { MenuSuperiorAlunoComponent } from '../menu-superior-aluno/menu-superior-aluno.component';
import { MenuLateralAlunoComponent } from '../menu-lateral-aluno/menu-lateral-aluno.component';


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
  selector: 'app-notificacoes-alunos',
  imports: [CommonModule, FormsModule, RouterLinkActive, RouterLink, MenuSuperiorAlunoComponent, MenuLateralAlunoComponent ],
  templateUrl: './notificacoes-alunos.component.html',
  styleUrl: './notificacoes-alunos.component.css'
})
export class NotificacoesAlunosComponent implements OnInit {
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
        titulo: 'Lembrete de aula!',
        mensagem: 'Sua aula com a professora Fernanda está chegando! Prepare seu material e bora aprender mais um pouco!',
        data: '19/05/2025',
        status: 'Agora',
        lida: false,
      },
      {
        id: 2,
        titulo: 'Nova aula agendada',
        mensagem: 'Sua aula de inglês com a professora Fernanda foi agendada para o dia 17/05/2025.',
        data: '16/05/2025',
        hora: '09:00',
        lida: true
      },
      {
        id: 3,
        titulo: 'Pagamento efetuado!',
        mensagem: 'O pagamento no valor de R$150,00 foi processado com sucesso.',
        data: '25/03/2025',
        hora: '10:30',
        lida: false
      },
      {
        id: 4,
        titulo: 'Nova aula agendada!',
        mensagem: 'Sua aula de inglês com a professora Fernanda foi agendada para o dia 12/04/2025.',
        data: '10/04/2025',
        hora: '12:00',
        lida: false
      },
      {
        id: 5,
        titulo: 'Nova avaliação recebida!',
        mensagem: 'A professora Fernanda acabou de avaliar sua última aula do dia 12/05/2025. Confira o feedback!',
        data: '10/05/2025',
        hora: '11:00',
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
