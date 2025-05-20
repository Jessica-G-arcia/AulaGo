import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MenuSuperiorComponent } from '../menu-superior/menu-superior.component';
import { MenuLateralComponent } from '../menu-lateral/menu-lateral.component';

@Component({
  selector: 'app-aulas',
  standalone: true,
  imports: [CommonModule, MenuSuperiorComponent, MenuLateralComponent],
  templateUrl: './aulas.component.html',
  styleUrl: './aulas.component.css'
})
export class AulasComponent {
  // prop. para controlar qual tipo de aulas estão sendo exibidas
  abaAtiva: 'concluidas' | 'agendadas' = 'concluidas';

  // aulas concluídas 
  aulasConcluidas = [
    {
      professor: 'João Pedro',
      local: 'Sorocaba - SP',
      horario: '8:00 ás 9:00',
      idioma: 'Inglês',
      data: '29/03/2025',
      modalidade: 'Online',
      avaliacao: 4
    },
    {
      professor: 'Alana Vaz',
      local: 'Sorocaba - SP',
      horario: '6:00 ás 7:00',
      idioma: 'Inglês',
      data: '24/03/2025',
      modalidade: 'Presencial',
      avaliacao: 5
    },
    {
      professor: 'Katia Leone',
      local: 'Sorocaba - SP',
      horario: '13:00 ás 14:00',
      idioma: 'Inglês',
      data: '27/03/2025',
      modalidade: 'Presencial',
      avaliacao: 4
    },
    {
      professor: 'Gisele Silva',
      local: 'Sorocaba - SP',
      horario: '7:00 ás 8:00',
      idioma: 'Espanhol',
      data: '27/03/2025',
      modalidade: 'Online',
      avaliacao: 5
    },
    {
      professor: 'Marcos Paulo',
      local: 'Sorocaba - SP',
      horario: '8:00 ás 9:00',
      idioma: 'Inglês',
      data: '05/04/2025',
      modalidade: 'Presencial',
      avaliacao: 2
    },
    {
      professor: 'Felipe Ferraz',
      local: 'Sorocaba - SP',
      horario: '8:00 ás 9:00',
      idioma: 'Inglês',
      data: '10/05/2025',
      modalidade: 'Online',
      avaliacao: 4
    },
  ];

  // novo array para aulas agendadas
  aulasAgendadas = [
    {
      professor: 'Fernanda Dias',
      local: 'Sorocaba - SP',
      horario: '8:00 ás 9:00',
      idioma: 'Inglês',
      data: '17/07/2025',
      modalidade: 'Online'
    },
    {
      professor: 'João Pedro',
      local: 'Sorocaba - SP',
      horario: '8:00 ás 9:00',
      idioma: 'Inglês',
      data: '18/07/2025',
      modalidade: 'Online'
    },
    {
      professor: 'Katia Leone',
      local: 'Sorocaba - SP',
      horario: '10:00 ás 11:00',
      idioma: 'Inglês',
      data: '20/07/2025',
      modalidade: 'Online'
    },
    {
      professor: 'Gabriel Dias',
      local: 'Sorocaba - SP',
      horario: '14:00 ás 15:00',
      idioma: 'Inglês',
      data: '22/07/2025',
      modalidade: 'Online'
    },
    {
      professor: 'Marcos Paulo',
      local: 'Sorocaba - SP',
      horario: '9:00 ás 10:00',
      idioma: 'Inglês',
      data: '25/07/2025',
      modalidade: 'Online'
    },
    {
      professor: 'Felipe Ferraz',
      local: 'Sorocaba - SP',
      horario: '13:00 ás 14:00',
      idioma: 'Inglês',
      data: '26/07/2025',
      modalidade: 'Online'
    },
    {
      professor: 'Alana Vaz',
      local: 'Sorocaba - SP',
      horario: '6:00 ás 7:00',
      idioma: 'Inglês',
      data: '28/07/2025',
      modalidade: 'Online'
    },
    {
      professor: 'Igor Rodrigo',
      local: 'Sorocaba - SP',
      horario: '7:00 ás 8:00',
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