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
      professor: 'Fernanda Dias',
      local: 'Sorocaba - SP',
      horario: '6:00 ás 7:00',
      idioma: 'Inglês',
      data: '24/03/2025',
    },
    {
      professor: 'Fernanda Dias',
      local: 'Sorocaba - SP',
      horario: '6:00 ás 7:00',
      idioma: 'Inglês',
      data: '24/03/2025',
    },
    {
      professor: 'Fernanda Dias',
      local: 'Sorocaba - SP',
      horario: '6:00 ás 7:00',
      idioma: 'Inglês',
      data: '24/03/2025',
    },
    {
      professor: 'Fernanda Dias',
      local: 'Sorocaba - SP',
      horario: '6:00 ás 7:00',
      idioma: 'Inglês',
      data: '24/03/2025',
    },
    {
      professor: 'Fernanda Dias',
      local: 'Sorocaba - SP',
      horario: '6:00 ás 7:00',
      idioma: 'Inglês',
      data: '24/03/2025',
    },
    
  

  ];

 
}
