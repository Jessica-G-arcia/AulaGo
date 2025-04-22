import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';


@Component({
  selector: 'app-aulas',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './aulas.component.html',
  styleUrl: './aulas.component.css'
})
export class AulasComponent {
  aulasConcluidas = [
    {
      professor: 'João Pedro',
      local: 'Sorocaba - SP',
      horario: '8:00 ás 9:00',
      idioma: 'Inglês',
      data: '29/03/2025',
    },
    {
      professor: 'Alana Vaz',
      local: 'Sorocaba - SP',
      horario: '6:00 ás 7:00',
      idioma: 'Inglês',
      data: '24/03/2025',
    },
    {
      professor: 'Katia Leone',
      local: 'Sorocaba - SP',
      horario: '13:00 ás 14:00 ',
      idioma: 'Inglês',
      data: '27/03/2025',
    },
    {
      professor: 'Gisele Silva',
      local: 'Sorocaba - SP',
      horario: '7:00 ás 8:00',
      idioma: 'Espanhol',
      data: '27/03/2025',
    },
    {
      professor: 'Marcos Paulo',
      local: 'Sorocaba - SP',
      horario: '8:00 ás 9:00',
      idioma: 'Inglês',
      data: '05/04/2025',
    },
    {
      professor: 'Felipe Ferraz',
      local: 'Sorocaba - SP',
      horario: '8:00 ás 9:00',
      idioma: 'Inglês',
      data: '10/05/2025',
    },
    
  

  ];

 
}
