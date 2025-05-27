import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuSuperiorComponent } from '../menu-superior/menu-superior.component';
import { MenuLateralComponent } from '../menu-lateral/menu-lateral.component';

interface Language {
  name: string;
  flagUrl: string;
  available: boolean;
}

interface Student {
  name: string;
  imageUrl: string;
  rating: number;
  languages: string;
  quote: string;
  authorQuote: string;
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
  styleUrls: ['./professor-home.component.css']
})
export class ProfessorHomeComponent implements OnInit {

  welcomeName: string = 'Fernanda';

  currentLanguageIndex: number = 0;
  currentStudentIndex: number = 0;
  currentClassIndex: number = 0;

  languagesPerView: number = 5; // idiomas mostrados por vez
  classesPerView: number = 2; // aulas mostrdas por vez

  languages: Language[] = [
  { name: 'Inglês', flagUrl: 'flags/us.png', available: true },
  { name: 'Espanhol', flagUrl: 'flags/es.png', available: false },
  { name: 'Francês', flagUrl: 'flags/fr.png', available: false },
  { name: 'Alemão', flagUrl: 'flags/de.png', available: false },
  { name: 'Mandarim', flagUrl: 'flags/cn.png', available: false },
  { name: 'Italiano', flagUrl: 'flags/it.png', available: false },
  { name: 'Japonês', flagUrl: 'flags/jp.png', available: false }
];

  top: Student[] = [
    {
      name: 'Rafaela Gonçalves',
      imageUrl: '/melhorAluno1.png',
      rating: 5,
      languages: 'Inglês',
      quote: '"Rafaela tem um aprendizado rápido, super educada. Aluna sensacional"',
      authorQuote: "Rogério Lima"
    },
    {
      name: 'Pedro Santos',
      imageUrl: '/melhorAluno2.png',
      rating: 5,
      languages: 'Inglês',
      quote: '"Pedro é muito dedicado e sempre faz as tarefas em dia. Excelente aluno!"',
      authorQuote: "Rogério Lima"
    },
    {
      name: 'Beatriz Gonçalves',
      imageUrl: '/melhorAluno3.png',
      rating: 5,
      languages: 'Inglês',
      quote: '"Beatriz tem grande facilidade com idiomas e é muito participativa."',
      authorQuote: "Rogério Lima"
    },
    {
      name: 'Gabriela Mendonça',
      imageUrl: '/melhorAluno4.png',
      rating: 5,
      languages: 'Inglês',
      quote: '"Gabriela tem grande facilidade com idiomas e é muito participativa."',
      authorQuote: "Rogério Lima"
    },
     {
      name: 'João Pedro',
      imageUrl: '/melhorAluno8.png',
      rating: 5,
      languages: 'Inglês',
      quote: '"João tem grande facilidade com idiomas e é muito participativo."',
      authorQuote: "Rogério Lima"
    },
    {
      name: 'Rafael Henrique',
      imageUrl: '/melhorAluno10.png',
      rating: 5,
      languages: 'Inglês',
      quote: '"Rafael tem grande facilidade com idiomas e é muito participativo."',
      authorQuote: "Rogério Lima"
    },
    {
      name: 'Jéssica Oliveira',
      imageUrl: '/melhorAluno5.png',
      rating: 5,
      languages: 'Inglês',
      quote: '"Jéssica tem grande facilidade com idiomas e é muito participativa."',
      authorQuote: "Rogério Lima"
    },
    {
      name: 'Pietra Nunes',
      imageUrl: '/melhorAluno6.png',
      rating: 5,
      languages: 'Inglês',
      quote: '"Pietra tem grande facilidade com idiomas e é muito participativa."',
      authorQuote: "Rogério Lima"
    },
    {
      name: 'Caroline Rocha',
      imageUrl: '/melhorAluno7.png',
      rating: 5,
      languages: 'Inglês',
      quote: '"Caroline tem grande facilidade com idiomas e é muito participativa."',
      authorQuote: "Rogério Lima"
    },
   

    {
      name: 'Fernanda Costa',
      imageUrl: '/melhorAluno9.png',
      rating: 5,
      languages: 'Inglês',
      quote: '"Fernanda tem grande facilidade com idiomas e é muito participativa."',
      authorQuote: "Rogério Lima"
    }

  ];

  todaysClasses: Class[] = [
    {
      studentName: 'Lucas Marques',
      location: 'Sorocaba - SP',
      time: '8:00 às 9:00',
      type: 'Presencial',
      date: '28/04/2025'
    },
    {
      studentName: 'Ana Clara',
      location: 'Sorocaba - SP',
      time: '9:30 às 10:30',
      type: 'Online',
      date: '28/04/2025'
    },
    {
      studentName: 'Pedro Santos',
      location: 'São Paulo - SP',
      time: '14:00 às 15:00',
      type: 'Online',
      date: '28/04/2025'
    },
    {
      studentName: 'Juliana Silva',
      location: 'Sorocaba - SP',
      time: '16:30 às 17:30',
      type: 'Presencial',
      date: '28/04/2025'
    }
  ];

  constructor() { }

  ngOnInit(): void {

  }

  get visibleLanguages(): Language[] {
    return this.languages.slice(this.currentLanguageIndex, this.currentLanguageIndex + this.languagesPerView);
  }

  get currentStudent(): Student {
    return this.top[this.currentStudentIndex];
  }

  get visibleClasses(): Class[] {
    return this.todaysClasses.slice(this.currentClassIndex, this.currentClassIndex + this.classesPerView);
  }

  // navegação para idiomas
  previousLanguage(): void {
    if (this.currentLanguageIndex > 0) {
      this.currentLanguageIndex--;
    } else {
      // volta para o final 
      this.currentLanguageIndex = Math.max(0, this.languages.length - this.languagesPerView);
    }
  }

  nextLanguage(): void {
    if (this.currentLanguageIndex + this.languagesPerView < this.languages.length) {
      this.currentLanguageIndex++;
    } else {
      // volta para o início 
      this.currentLanguageIndex = 0;
    }
  }

  // navegação para top aluns
  previousTopStudent(): void {
    if (this.currentStudentIndex > 0) {
      this.currentStudentIndex--;
    } else {
      // volta para o último aluno 
      this.currentStudentIndex = this.top.length - 1;
    }
  }

  nextTopStudent(): void {
    if (this.currentStudentIndex < this.top.length - 1) {
      this.currentStudentIndex++;
    } else {
      // volta para o primeiro aluno 
      this.currentStudentIndex = 0;
    }
  }

  //navegação para aulas de hoje
  previousClass(): void {
    if (this.currentClassIndex > 0) {
      this.currentClassIndex--;
    } else {
      // volta para o final 
      this.currentClassIndex = Math.max(0, this.todaysClasses.length - this.classesPerView);
    }
  }

  nextClass(): void {
    if (this.currentClassIndex + this.classesPerView < this.todaysClasses.length) {
      this.currentClassIndex++;
    } else {
      // olta para o início 
      this.currentClassIndex = 0;
    }
  }

}