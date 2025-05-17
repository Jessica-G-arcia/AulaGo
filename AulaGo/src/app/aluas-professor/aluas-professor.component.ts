import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-aluas-professor',
  imports: [CommonModule],
  templateUrl: './aluas-professor.component.html',
  styleUrl: './aluas-professor.component.css'
})
export class AluasProfessorComponent {
  // prop. para controlar qual tipo de aulas estão sendo exibidas
  abaAtiva: 'concluidas' | 'agendadas' = 'concluidas';

  // aulas concluídas 
  aulasConcluidas = [
    {
      aluno: 'João Pedro',
      local: 'Sorocaba - SP',
      horario: '8:00 às 9:00',
      idioma: 'Inglês',
      data: '29/03/2025',
      modalidade: 'Online',
      avaliacao: 4
    },
    {
      aluno: 'Alana Vaz',
      local: 'Sorocaba - SP',
      horario: '6:00 às 7:00',
      idioma: 'Inglês',
      data: '24/03/2025',
      modalidade: 'Presencial',
      avaliacao: 5
    },
    {
      aluno: 'Katia Leone',
      local: 'Sorocaba - SP',
      horario: '13:00 às 14:00',
      idioma: 'Inglês',
      data: '27/03/2025',
      modalidade: 'Presencial',
      avaliacao: 4
    },
    {
      aluno: 'Gisele Silva',
      local: 'Sorocaba - SP',
      horario: '7:00 às 8:00',
      idioma: 'Espanhol',
      data: '27/03/2025',
      modalidade: 'Online',
      avaliacao: 5
    },
    {
      aluno: 'Marcos Paulo',
      local: 'Sorocaba - SP',
      horario: '8:00 às 9:00',
      idioma: 'Inglês',
      data: '05/04/2025',
      modalidade: 'Presencial',
      avaliacao: 2
    },
    {
      aluno: 'Felipe Ferraz',
      local: 'Sorocaba - SP',
      horario: '8:00 às 9:00',
      idioma: 'Inglês',
      data: '10/05/2025',
      modalidade: 'Online',
      avaliacao: 4
    },
  ];

  // novo array para aulas agendadas
  aulasAgendadas = [
    {
      aluno: 'Carlos Silva',
      local: 'Sorocaba - SP',
      horario: '14:00 às 15:00',
      idioma: 'Inglês',
      data: '13/05/2025',
      modalidade: 'Presencial'
    },
    {
      aluno: 'Ana Paula',
      local: 'Sorocaba - SP',
      horario: '15:30 às 16:30',
      idioma: 'Inglês',
      data: '13/05/2025',
      modalidade: 'Online'
    },
    {
      aluno: 'Katia Leone',
      local: 'Sorocaba - SP',
      horario: '10:00 às 11:00',
      idioma: 'Inglês',
      data: '20/07/2025',
      modalidade: 'Online'
    },
    {
      aluno: 'Gabriel Dias',
      local: 'Sorocaba - SP',
      horario: '14:00 às 15:00',
      idioma: 'Inglês',
      data: '22/07/2025',
      modalidade: 'Online'
    },
    {
      aluno: 'Marcos Paulo',
      local: 'Sorocaba - SP',
      horario: '9:00 às 10:00',
      idioma: 'Inglês',
      data: '25/07/2025',
      modalidade: 'Online'
    },
    {
      aluno: 'Felipe Ferraz',
      local: 'Sorocaba - SP',
      horario: '13:00 às 14:00',
      idioma: 'Inglês',
      data: '26/07/2025',
      modalidade: 'Online'
    },
    {
      aluno: 'Alana Vaz',
      local: 'Sorocaba - SP',
      horario: '6:00 às 7:00',
      idioma: 'Inglês',
      data: '28/07/2025',
      modalidade: 'Online'
    },
    {
      aluno: 'Igor Rodrigo',
      local: 'Sorocaba - SP',
      horario: '7:00 às 8:00',
      idioma: 'Inglês',
      data: '30/07/2025',
      modalidade: 'Online'
    }
  ];

  // método para mudar entre as abas
  mudarAba(aba: 'concluidas' | 'agendadas'): void {
    this.abaAtiva = aba;
  }

  // método para verificar se uma aba esta ativa
  isAbaAtiva(aba: 'concluidas' | 'agendadas'): boolean {
    return this.abaAtiva === aba;
  }
  // método para gerar um array de estrelas com base na avaliação
  getEstrelas(avaliacao: number): number[] {
    return Array(5).fill(0).map((_, i) => i < (avaliacao || 0) ? 1 : 0);
  }

  // método que permite o usuário avaliar uma aula (concluídas)
  avaliarAula(aula: any, nota: number): void {
    if (this.abaAtiva === 'concluidas') {
      aula.avaliacao = nota;
    }
  }
}
