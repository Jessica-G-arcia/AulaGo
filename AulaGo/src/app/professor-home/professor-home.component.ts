import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuSuperiorComponent } from '../menu-superior/menu-superior.component';
import { MenuLateralComponent } from '../menu-lateral/menu-lateral.component';

// Interfaces (mantidas)
interface Language {
  name: string;
  flagUrl: string; // Caminho relativo DENTRO da pasta 'public'
}

interface Student {
  name: string;
  imageUrl: string; // Caminho relativo DENTRO da pasta 'public'
  rating: number;
  languages: string;
  quote: string;
}

interface Class {
  studentName: string;
  location: string;
  time: string;
  type: 'Presencial' | 'Online';
  date: string;
}

@Component({
  selector: 'app-professor-home',
  standalone: true,
  imports: [
    CommonModule, MenuSuperiorComponent, MenuLateralComponent
  ],
  templateUrl: './professor-home.component.html',
  styleUrls: ['./professor-home.component.css'] // Mantém o CSS avançado anterior
})
export class ProfessorHomeComponent implements OnInit {

  // Removi professorName pois a barra superior foi removida
  welcomeName: string = 'Fernanda'; // Nome genérico ou buscar de algum lugar

  languages: Language[] = [
    { name: 'Inglês', flagUrl: 'flags/us.png' },
    { name: 'Espanhol', flagUrl: 'flags/es.png' },
    { name: 'Francês', flagUrl: 'flags/fr.png' },
    { name: 'Alemão', flagUrl: 'flags/de.png' },
    { name: 'Mandarim', flagUrl: 'flags/cn.png' }
  ];

  topStudents: Student[] = [
    {
      name: 'Rafaela Gonçalves',
      imageUrl: 'students/rafaela.png',
      rating: 5,
      languages: 'Inglês',
      quote: '"Rafaela tem um aprendizado rápido, super educada. Aluna sensacional"'
    },
  ];

  todaysClasses: Class[] = [
    {
      studentName: 'Lucas Marques',
      location: 'Sorocaba - SP',
      time: '8:00 às 9:00',
      type: 'Presencial',
      date: '28/04/2025' // Usando data de hoje como exemplo
    },
    {
      studentName: 'Ana Clara',
      location: 'Sorocaba - SP',
      time: '9:30 às 10:30',
      type: 'Online',
      date: '28/04/2025' // Usando data de hoje como exemplo
    },
    // ... outras aulas
  ];

  constructor() { }

  ngOnInit(): void {
    // Lógica para buscar dados reais iria aqui
  }

  // --- Funções de Exemplo para Navegação ---
  previousLanguage() { console.log('Previous Language'); }
  nextLanguage() { console.log('Next Language'); }
  previousTopStudent() { console.log('Previous Top Student'); }
  nextTopStudent() { console.log('Next Top Student'); }
  previousClass() { console.log('Previous Class'); }
  nextClass() { console.log('Next Class'); }

}